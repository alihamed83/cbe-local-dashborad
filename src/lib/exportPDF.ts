import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { AssessmentState, CBEControls, ComplianceStats } from '@/types/compliance';

export const generatePDFReport = (
    checkedControls: AssessmentState,
    cbeControls: CBEControls,
    stats: ComplianceStats
): void => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yOffset = 20;

    // Cover Page
    doc.setFillColor(34, 197, 94); // green-600
    doc.rect(0, 0, pageWidth, 60, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('CBE Cybersecurity Framework', pageWidth / 2, 30, { align: 'center' });
    doc.setFontSize(16);
    doc.text('Compliance Assessment Report', pageWidth / 2, 45, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    yOffset = 80;

    doc.text(`Generated: ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Overall Compliance Rate: ${stats.complianceRate}%`, 20, yOffset);
    yOffset += 10;
    doc.text(`Mandatory Controls Compliance: ${stats.mandatoryRate}%`, 20, yOffset);
    yOffset += 20;

    // Executive Summary
    doc.setFontSize(16);
    doc.setTextColor(34, 197, 94);
    doc.text('Executive Summary', 20, yOffset);
    yOffset += 10;

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);

    const summaryData = [
        ['Total Controls', stats.totalControls.toString()],
        ['Implemented Controls', stats.implementedControls.toString()],
        ['Pending Controls', stats.gap.toString()],
        ['Overall Compliance', `${stats.complianceRate}%`],
        ['Mandatory Controls (Total)', stats.mandatoryTotal.toString()],
        ['Mandatory Controls (Implemented)', stats.mandatoryImplemented.toString()],
        ['Mandatory Compliance Rate', `${stats.mandatoryRate}%`]
    ];

    autoTable(doc, {
        startY: yOffset,
        head: [['Metric', 'Value']],
        body: summaryData,
        theme: 'grid',
        headStyles: { fillColor: [34, 197, 94] },
        margin: { left: 20, right: 20 }
    });

    // Domain Breakdown
    doc.addPage();
    yOffset = 20;
    doc.setFontSize(16);
    doc.setTextColor(34, 197, 94);
    doc.text('Domain Breakdown', 20, yOffset);
    yOffset += 10;

    Object.entries(cbeControls).forEach(([, domain]) => {
        let domainTotal = 0;
        let domainImplemented = 0;

        domain.subdomains.forEach(subdomain => {
            subdomain.controls.forEach(control => {
                domainTotal++;
                if (checkedControls[control.id]) {
                    domainImplemented++;
                }
            });
        });

        const domainRate = domainTotal > 0 ? Math.round((domainImplemented / domainTotal) * 100) : 0;

        // Check if we need a new page
        if (yOffset > pageHeight - 40) {
            doc.addPage();
            yOffset = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(`${domain.icon} ${domain.name}`, 20, yOffset);
        yOffset += 8;

        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`${domainImplemented} of ${domainTotal} controls (${domainRate}%)`, 20, yOffset);
        yOffset += 12;

        // Subdomain details
        domain.subdomains.forEach(subdomain => {
            if (yOffset > pageHeight - 60) {
                doc.addPage();
                yOffset = 20;
            }

            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(`  ${subdomain.name}`, 25, yOffset);
            yOffset += 6;

            subdomain.controls.forEach(control => {
                if (yOffset > pageHeight - 20) {
                    doc.addPage();
                    yOffset = 20;
                }

                const status = checkedControls[control.id] ? '✓' : '✗';
                const statusColor = checkedControls[control.id] ? [34, 197, 94] : [239, 68, 68];

                doc.setFontSize(9);
                doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
                doc.text(status, 30, yOffset);

                doc.setTextColor(0, 0, 0);
                doc.text(`${control.id} - ${control.title}`, 35, yOffset);

                const critColor = control.criticality === 'Mandatory' ? [239, 68, 68] : [59, 130, 246];
                doc.setTextColor(critColor[0], critColor[1], critColor[2]);
                doc.text(`[${control.criticality}]`, pageWidth - 45, yOffset);

                yOffset += 5;
            });

            yOffset += 3;
        });

        yOffset += 5;
    });

    // Gap Analysis
    doc.addPage();
    yOffset = 20;
    doc.setFontSize(16);
    doc.setTextColor(239, 68, 68);
    doc.text('Gap Analysis - Pending Mandatory Controls', 20, yOffset);
    yOffset += 10;

    const gapControls: any[] = [];
    Object.values(cbeControls).forEach(domain => {
        domain.subdomains.forEach(subdomain => {
            subdomain.controls.forEach(control => {
                if (control.criticality === 'Mandatory' && !checkedControls[control.id]) {
                    gapControls.push([
                        control.id,
                        control.title,
                        domain.name,
                        subdomain.name
                    ]);
                }
            });
        });
    });

    if (gapControls.length > 0) {
        autoTable(doc, {
            startY: yOffset,
            head: [['Control ID', 'Title', 'Domain', 'Subdomain']],
            body: gapControls,
            theme: 'grid',
            headStyles: { fillColor: [239, 68, 68] },
            margin: { left: 20, right: 20 },
            styles: { fontSize: 8 }
        });
    } else {
        doc.setFontSize(12);
        doc.setTextColor(34, 197, 94);
        doc.text('✓ All mandatory controls are implemented!', 20, yOffset);
    }

    // Footer on all pages
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
            `Page ${i} of ${totalPages} | CBE Cybersecurity Framework Assessment`,
            pageWidth / 2,
            pageHeight - 10,
            { align: 'center' }
        );
    }

    // Save the PDF
    const fileName = `CBE_Compliance_Report_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
};
