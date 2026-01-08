export interface Control {
    id: string;
    title: string;
    type: 'Process' | 'Technology' | 'People';
    criticality: 'Mandatory' | 'Advisable';
    description: string;
    evidence?: string[];
}

export interface Subdomain {
    name: string;
    controls: Control[];
}

export interface Domain {
    name: string;
    icon: string;
    subdomains: Subdomain[];
}

export interface CBEControls {
    [key: string]: Domain;
}

export interface AssessmentState {
    [controlId: string]: boolean;
}

export interface ComplianceStats {
    totalControls: number;
    implementedControls: number;
    complianceRate: number;
    gap: number;
    mandatoryTotal: number;
    mandatoryImplemented: number;
    mandatoryRate: number;
}

export interface AssessmentData {
    checkedControls: AssessmentState;
    lastUpdated: string;
    version: string;
}
