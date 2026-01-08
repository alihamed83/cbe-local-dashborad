import * as XLSX from 'xlsx';
import type { AssessmentState, CBEControls, ComplianceStats } from '@/types/compliance';

export const generateExcelReport = (
    checkedControls: AssessmentState,
    cbeControls: CBEControls,
    stats: ComplianceStats
): void => {
    const workbook = XLSX.utils.book_new();

    // Summary Sheet
    const summaryData = [
        ['CBE Cybersecurity Framework - Compliance Assessment'],
        ['Generated:', new Date().toLocaleDateString()],
        [],
        ['Overall Statistics'],
        ['Total Controls', stats.totalControls],
        ['Implemented Controls', stats.implementedControls],
        ['Pending Controls', stats.gap],
        ['Overall Compliance Rate', `${stats.complianceRate}%`],
        [],
        ['Mandatory Controls'],
        ['Total Mandatory', stats.mandatoryTotal],
        ['Implemented Mandatory', stats.mandatoryImplemented],
        ['Mandatory Compliance Rate', `${stats.mandatoryRate}%`]
    ];

    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);

    // Style the summary sheet
    if (!summarySheet['!cols']) summarySheet['!cols'] = [];
    summarySheet['!cols'][0] = { wch: 30 };
    summarySheet['!cols'][1] = { wch: 20 };

    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

    // Create a sheet for each domain
    Object.entries(cbeControls).forEach(([, domain]) => {
        const domainData: any[] = [
            [domain.name],
            [],
            ['Control ID', 'Title', 'Type', 'Criticality', 'Status', 'Description']
        ];

        domain.subdomains.forEach(subdomain => {
            domainData.push([subdomain.name, '', '', '', '', '']); // Subdomain header row

            subdomain.controls.forEach(control => {
                const status = checkedControls[control.id] ? 'Implemented' : 'Pending';
                domainData.push([
                    control.id,
                    control.title,
                    control.type,
                    control.criticality,
                    status,
                    control.description
                ]);
            });

            domainData.push([]); // Empty row between subdomains
        });

        const domainSheet = XLSX.utils.aoa_to_sheet(domainData);

        // Set column widths
        if (!domainSheet['!cols']) domainSheet['!cols'] = [];
        domainSheet['!cols'][0] = { wch: 12 }; // ID
        domainSheet['!cols'][1] = { wch: 40 }; // Title
        domainSheet['!cols'][2] = { wch: 15 }; // Type
        domainSheet['!cols'][3] = { wch: 15 }; // Criticality
        domainSheet['!cols'][4] = { wch: 15 }; // Status
        domainSheet['!cols'][5] = { wch: 80 }; // Description

        // Shorten sheet name to fit Excel's 31 character limit
        let sheetName = domain.name;
        if (sheetName.length > 31) {
            sheetName = sheetName.substring(0, 28) + '...';
        }

        XLSX.utils.book_append_sheet(workbook, domainSheet, sheetName);
    });

    // Gap Analysis Sheet
    const gapData: any[] = [
        ['Gap Analysis - Pending Mandatory Controls'],
        [],
        ['Control ID', 'Title', 'Domain', 'Subdomain', 'Type', 'Description']
    ];

    Object.entries(cbeControls).forEach(([, domain]) => {
        domain.subdomains.forEach(subdomain => {
            subdomain.controls.forEach(control => {
                if (control.criticality === 'Mandatory' && !checkedControls[control.id]) {
                    gapData.push([
                        control.id,
                        control.title,
                        domain.name,
                        subdomain.name,
                        control.type,
                        control.description
                    ]);
                }
            });
        });
    });

    if (gapData.length > 3) {
        const gapSheet = XLSX.utils.aoa_to_sheet(gapData);

        // Set column widths
        if (!gapSheet['!cols']) gapSheet['!cols'] = [];
        gapSheet['!cols'][0] = { wch: 12 };
        gapSheet['!cols'][1] = { wch: 40 };
        gapSheet['!cols'][2] = { wch: 25 };
        gapSheet['!cols'][3] = { wch: 35 };
        gapSheet['!cols'][4] = { wch: 15 };
        gapSheet['!cols'][5] = { wch: 80 };

        XLSX.utils.book_append_sheet(workbook, gapSheet, 'Gap Analysis');
    }

    // Save the file
    const fileName = `CBE_Compliance_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
};
