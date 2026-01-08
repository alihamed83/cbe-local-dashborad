import type { AssessmentState, AssessmentData } from '@/types/compliance';

const STORAGE_KEY = 'cbe-compliance-assessment';
const VERSION = '1.0.0';

export const saveAssessment = (checkedControls: AssessmentState): void => {
    if (typeof window === 'undefined') return;

    const data: AssessmentData = {
        checkedControls,
        lastUpdated: new Date().toISOString(),
        version: VERSION
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save assessment:', error);
    }
};

export const loadAssessment = (): AssessmentState | null => {
    if (typeof window === 'undefined') return null;

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;

        const data: AssessmentData = JSON.parse(stored);

        // Version check - you could add migration logic here if needed
        if (data.version !== VERSION) {
            console.warn('Assessment version mismatch, loading anyway');
        }

        return data.checkedControls;
    } catch (error) {
        console.error('Failed to load assessment:', error);
        return null;
    }
};

export const exportAssessmentData = (checkedControls: AssessmentState): string => {
    const data: AssessmentData = {
        checkedControls,
        lastUpdated: new Date().toISOString(),
        version: VERSION
    };

    return JSON.stringify(data, null, 2);
};

export const importAssessmentData = (jsonString: string): AssessmentState | null => {
    try {
        const data: AssessmentData = JSON.parse(jsonString);
        return data.checkedControls;
    } catch (error) {
        console.error('Failed to import assessment data:', error);
        return null;
    }
};

export const clearAssessment = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
};

export const getLastUpdated = (): string | null => {
    if (typeof window === 'undefined') return null;

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;

        const data: AssessmentData = JSON.parse(stored);
        return data.lastUpdated;
    } catch (error) {
        return null;
    }
};
