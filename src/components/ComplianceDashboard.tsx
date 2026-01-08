'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Shield, Download, FileText, Save } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { cbeControls } from '@/data/cbeControls';
import { type AssessmentState, type ComplianceStats } from '@/types/compliance';
import { saveAssessment, loadAssessment, exportAssessmentData, importAssessmentData, getLastUpdated } from '@/lib/storage';
import { generatePDFReport } from '@/lib/exportPDF';
import { generateExcelReport } from '@/lib/exportExcel';
import OverviewTab from './OverviewTab';
import AssessmentTab from './AssessmentTab';

const ComplianceDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [checkedControls, setCheckedControls] = useState<AssessmentState>({});
    const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'idle'>('idle');
    const [lastSaved, setLastSaved] = useState<string | null>(null);

    // Load assessment on mount
    useEffect(() => {
        const loaded = loadAssessment();
        if (loaded) {
            setCheckedControls(loaded);
            const lastUpdate = getLastUpdated();
            if (lastUpdate) {
                setLastSaved(new Date(lastUpdate).toLocaleString());
            }
            toast.success('Previous assessment loaded');
        }
    }, []);

    // Auto-save functionality
    useEffect(() => {
        if (Object.keys(checkedControls).length === 0) return;

        setAutoSaveStatus('saving');
        const timeoutId = setTimeout(() => {
            saveAssessment(checkedControls);
            setAutoSaveStatus('saved');
            setLastSaved(new Date().toLocaleString());
            setTimeout(() => setAutoSaveStatus('idle'), 2000);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [checkedControls]);

    // Toggle control check
    const toggleControl = useCallback((controlId: string) => {
        setCheckedControls((prev: AssessmentState) => ({
            ...prev,
            [controlId]: !prev[controlId]
        }));
    }, []);

    // Calculate statistics
    const stats: ComplianceStats = useMemo(() => {
        let totalControls = 0;
        let implementedControls = 0;
        let mandatoryTotal = 0;
        let mandatoryImplemented = 0;
        Object.entries(cbeControls).forEach(([, domain]) => {
            domain.subdomains.forEach(subdomain => {
                subdomain.controls.forEach(control => {
                    totalControls++;
                    if (checkedControls[control.id]) {
                        implementedControls++;
                    }
                    if (control.criticality === 'Mandatory') {
                        mandatoryTotal++;
                        if (checkedControls[control.id]) {
                            mandatoryImplemented++;
                        }
                    }
                });
            });
        });

        return {
            totalControls,
            implementedControls,
            complianceRate: totalControls > 0 ? Math.round((implementedControls / totalControls) * 100) : 0,
            gap: totalControls - implementedControls,
            mandatoryTotal,
            mandatoryImplemented,
            mandatoryRate: mandatoryTotal > 0 ? Math.round((mandatoryImplemented / mandatoryTotal) * 100) : 0
        };
    }, [checkedControls]);

    // Export handlers
    const handleExportPDF = () => {
        try {
            toast.loading('Generating PDF report...');
            generatePDFReport(checkedControls, cbeControls, stats);
            toast.dismiss();
            toast.success('PDF report downloaded successfully!');
        } catch (error) {
            toast.dismiss();
            toast.error('Failed to generate PDF report');
            console.error(error);
        }
    };

    const handleExportExcel = () => {
        try {
            toast.loading('Generating Excel report...');
            generateExcelReport(checkedControls, cbeControls, stats);
            toast.dismiss();
            toast.success('Excel report downloaded successfully!');
        } catch (error) {
            toast.dismiss();
            toast.error('Failed to generate Excel report');
            console.error(error);
        }
    };

    const handleExportJSON = () => {
        try {
            const jsonData = exportAssessmentData(checkedControls);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `CBE_Assessment_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            toast.success('JSON data exported successfully!');
        } catch (error) {
            toast.error('Failed to export JSON data');
            console.error(error);
        }
    };

    const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const result = e.target?.result as string;
                const imported = importAssessmentData(result);
                if (imported) {
                    setCheckedControls(imported);
                    toast.success('Assessment imported successfully!');
                } else {
                    toast.error('Failed to import assessment');
                }
            } catch (error) {
                toast.error('Invalid JSON file');
                console.error(error);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <Shield className="w-8 h-8" />
                            <div>
                                <h1 className="text-2xl font-bold">Egypt Financial Compliance Dashboard</h1>
                                <p className="text-green-100 text-sm">CBE Cybersecurity Framework Interactive Assessment</p>
                            </div>
                        </div>

                        {/* Export Buttons */}
                        <div className="flex items-center gap-2">
                            {autoSaveStatus !== 'idle' && (
                                <div className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg text-sm">
                                    <Save className="w-4 h-4" />
                                    {autoSaveStatus === 'saving' ? 'Saving...' : 'Saved'}
                                </div>
                            )}

                            <button
                                onClick={handleExportPDF}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition font-medium"
                            >
                                <FileText className="w-5 h-5" />
                                Export PDF
                            </button>

                            <button
                                onClick={handleExportExcel}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition font-medium"
                            >
                                <Download className="w-5 h-5" />
                                Export Excel
                            </button>

                            <button
                                onClick={handleExportJSON}
                                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition font-medium"
                            >
                                Export JSON
                            </button>

                            <label className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition font-medium cursor-pointer">
                                Import JSON
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleImportJSON}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {lastSaved && (
                        <div className="text-xs text-green-100 mt-2">
                            Last saved: {lastSaved}
                        </div>
                    )}
                </div>

                {/* Tabs */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-2 border-b border-green-500">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'assessment', label: 'Self-Assessment' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-medium transition ${activeTab === tab.id
                                    ? 'bg-white text-green-700 rounded-t-lg shadow-lg'
                                    : 'text-white hover:bg-green-500 rounded-t-lg'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {activeTab === 'overview' && (
                    <OverviewTab
                        stats={stats}
                        cbeControls={cbeControls}
                        checkedControls={checkedControls}
                        onDomainClick={(domainKey) => {
                            setSelectedDomain(domainKey);
                            setActiveTab('assessment');
                        }}
                        onStartAssessment={() => setActiveTab('assessment')}
                    />
                )}

                {activeTab === 'assessment' && (
                    <AssessmentTab
                        cbeControls={cbeControls}
                        checkedControls={checkedControls}
                        selectedDomain={selectedDomain}
                        searchTerm={searchTerm}
                        onDomainChange={setSelectedDomain}
                        onSearchChange={setSearchTerm}
                        onToggleControl={toggleControl}
                    />
                )}
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white mt-12">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="text-sm text-gray-300 text-center space-y-2">
                        <p>Egypt Financial Compliance Dashboard - CBE Cybersecurity Framework (December 2021)</p>
                        <p className="text-xs text-gray-400">
                            Interactive Self-Assessment Tool • {stats.totalControls} Total Controls • Always verify with official CBE documentation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceDashboard;
