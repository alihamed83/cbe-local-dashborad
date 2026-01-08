import React from 'react';
import { TrendingUp, AlertCircle, Clock, FileText, Check } from 'lucide-react';
import type { CBEControls, AssessmentState, ComplianceStats } from '@/types/compliance';

interface OverviewTabProps {
    stats: ComplianceStats;
    cbeControls: CBEControls;
    checkedControls: AssessmentState;
    onDomainClick: (domainKey: string) => void;
    onStartAssessment: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({
    stats,
    cbeControls,
    checkedControls,
    onDomainClick,
    onStartAssessment
}) => {
    // Get domain statistics
    const getDomainStats = (domain: any) => {
        let total = 0;
        let implemented = 0;

        domain.subdomains.forEach((subdomain: any) => {
            subdomain.controls.forEach((control: any) => {
                total++;
                if (checkedControls[control.id]) {
                    implemented++;
                }
            });
        });

        return {
            total,
            implemented,
            rate: total > 0 ? Math.round((implemented / total) * 100) : 0
        };
    };

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-600">Overall Compliance</div>
                        <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{stats.complianceRate}%</div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {stats.implementedControls} of {stats.totalControls} controls
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600 hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-600">Mandatory Controls</div>
                        <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{stats.mandatoryRate}%</div>
                    <div className="text-xs text-gray-500 mt-1">
                        {stats.mandatoryImplemented} of {stats.mandatoryTotal} mandatory
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600 hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-600">Compliance Gap</div>
                        <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{stats.gap}</div>
                    <div className="text-xs text-gray-500 mt-1">Controls pending</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-600">Total Controls</div>
                        <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{stats.totalControls}</div>
                    <div className="text-xs text-gray-500 mt-1">CBE Framework</div>
                </div>
            </div>

            {/* Domain Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(cbeControls).map(([key, domain]) => {
                    const domainStats = getDomainStats(domain);
                    return (
                        <div
                            key={key}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1 duration-300"
                            onClick={() => onDomainClick(key)}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-4xl">{domain.icon}</div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-lg">{domain.name}</h3>
                                    <p className="text-sm text-gray-600">{domain.subdomains.length} subdomains</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="text-gray-600 font-medium">Progress</span>
                                    <span className="font-bold text-gray-900">{domainStats.rate}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className={`h-3 rounded-full transition-all duration-500 ${domainStats.rate >= 80 ? 'bg-green-600' :
                                            domainStats.rate >= 50 ? 'bg-yellow-500' :
                                                'bg-red-500'
                                            }`}
                                        style={{ width: `${domainStats.rate}%` }}
                                    />
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 flex items-center justify-between">
                                <span>{domainStats.implemented} / {domainStats.total} controls</span>
                                <span className="text-green-600 font-medium hover:underline">View Details →</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-xl shadow-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Ready to assess your compliance?</h3>
                    <p className="text-green-100 mb-6 text-lg">
                        Start the interactive self-assessment to identify your current position and compliance gaps
                    </p>
                    <button
                        onClick={onStartAssessment}
                        className="px-8 py-4 bg-white text-green-700 rounded-lg font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
                    >
                        Start Self-Assessment →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OverviewTab;
