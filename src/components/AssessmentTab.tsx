import React from 'react';
import { Search, Check, FileText } from 'lucide-react';
import type { CBEControls, AssessmentState } from '@/types/compliance';

interface AssessmentTabProps {
    cbeControls: CBEControls;
    checkedControls: AssessmentState;
    selectedDomain: string | null;
    searchTerm: string;
    onDomainChange: (domainKey: string) => void;
    onSearchChange: (term: string) => void;
    onToggleControl: (controlId: string) => void;
}

const AssessmentTab: React.FC<AssessmentTabProps> = ({
    cbeControls,
    checkedControls,
    selectedDomain,
    searchTerm,
    onDomainChange,
    onSearchChange,
    onToggleControl
}) => {
    const domainKeys = Object.keys(cbeControls);
    const currentDomainKey = selectedDomain || domainKeys[0];
    const currentDomain = cbeControls[currentDomainKey];
    const currentIndex = domainKeys.indexOf(currentDomainKey);

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

    // Filter controls by search
    const filterControls = (controls: any[]) => {
        if (!searchTerm) return controls;
        return controls.filter(control =>
            control.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            control.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            control.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const domainStats = getDomainStats(currentDomain);

    return (
        <div className="space-y-4">
            {/* Domain Selector */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="text-3xl">{currentDomain.icon}</span>
                            {currentDomain.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            {currentDomain.subdomains.length} subdomains • {domainStats.total} controls
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onDomainChange(domainKeys[Math.max(0, currentIndex - 1)])}
                            disabled={currentIndex === 0}
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            ← Previous
                        </button>
                        <button
                            onClick={() => onDomainChange(domainKeys[Math.min(domainKeys.length - 1, currentIndex + 1)])}
                            disabled={currentIndex === domainKeys.length - 1}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            Next Domain →
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Domain Completion</span>
                        <span className="font-bold text-gray-900">{domainStats.rate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                            className={`h-4 rounded-full transition-all duration-500 ${domainStats.rate >= 80 ? 'bg-green-600' :
                                    domainStats.rate >= 50 ? 'bg-yellow-500' :
                                        'bg-red-500'
                                }`}
                            style={{ width: `${domainStats.rate}%` }}
                        />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        {domainStats.implemented} of {domainStats.total} controls implemented
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search controls by ID, title, or description..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Controls Checklist */}
            {currentDomain.subdomains.map((subdomain, subIdx) => {
                const filteredControls = filterControls(subdomain.controls);
                if (filteredControls.length === 0) return null;

                const subdomainImplemented = subdomain.controls.filter((c: any) => checkedControls[c.id]).length;
                const subdomainTotal = subdomain.controls.length;
                const subdomainRate = Math.round((subdomainImplemented / subdomainTotal) * 100);

                return (
                    <div key={subIdx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 border-b-2 border-gray-200">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-gray-900 text-lg">{subdomain.name}</h4>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-600">
                                        {subdomainImplemented}/{subdomainTotal}
                                    </span>
                                    <span className={`text-sm font-bold ${subdomainRate >= 80 ? 'text-green-600' :
                                            subdomainRate >= 50 ? 'text-yellow-600' :
                                                'text-red-600'
                                        }`}>
                                        {subdomainRate}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            {filteredControls.map((control) => (
                                <div
                                    key={control.id}
                                    className="border-2 border-gray-200 rounded-xl p-5 hover:border-green-500 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <button
                                                onClick={() => onToggleControl(control.id)}
                                                className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${checkedControls[control.id]
                                                        ? 'bg-green-600 border-green-600 shadow-lg'
                                                        : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                                                    }`}
                                            >
                                                {checkedControls[control.id] && (
                                                    <Check className="w-5 h-5 text-white" />
                                                )}
                                            </button>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-mono text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                                            {control.id}
                                                        </span>
                                                        <h5 className="font-bold text-gray-900 text-lg">{control.title}</h5>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${control.criticality === 'Mandatory'
                                                                ? 'bg-red-100 text-red-700'
                                                                : 'bg-blue-100 text-blue-700'
                                                            }`}>
                                                            {control.criticality}
                                                        </span>
                                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700">
                                                            {control.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-700 leading-relaxed mt-3">
                                                {control.description}
                                            </p>

                                            {control.evidence && (
                                                <div className="mt-3 pt-3 border-t border-gray-200">
                                                    <h6 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-1">
                                                        <FileText className="w-3 h-3" />
                                                        Expected Evidence:
                                                    </h6>
                                                    <ul className="space-y-1">
                                                        {control.evidence.map((item: string, idx: number) => (
                                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                                                <span className="text-green-600 mt-0.5">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AssessmentTab;
