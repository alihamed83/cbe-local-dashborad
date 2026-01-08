import type { CBEControls } from '@/types/compliance';

export const cbeControls: CBEControls = {
    governance: {
        name: "Governance",
        icon: "🏛️",
        subdomains: [
            {
                name: "Strategy & Organizational Structure",
                controls: [
                    {
                        id: "1.1.4.a",
                        title: "Leadership Advocacy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A program is in place where C-suite leadership engages in initiatives and champions efforts that showcase visible involvement and support for the overall Cybersecurity program.",
                        evidence: [
                            "Leadership communication records (emails, memos, announcements)",
                            "Executive meeting minutes discussing cybersecurity",
                            "Budget approvals for cybersecurity initiatives",
                            "Leadership participation in security awareness campaigns",
                            "Board presentations on cybersecurity strategy"
                        ]
                    },
                    {
                        id: "1.1.4.b",
                        title: "Defined Roles and Responsibilities",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A formal, documented matrix exists that maps specific job roles and responsibilities to individuals. This matrix is accessible to the workforce and accounts for minimum knowledge, skills, and abilities required.",
                        evidence: [
                            "RACI matrix or responsibility assignment matrix",
                            "Job descriptions for cybersecurity roles",
                            "Organization charts showing reporting structure",
                            "Skills and competency requirements documentation",
                            "Access to centralized repository (intranet, SharePoint)"
                        ]
                    },
                    {
                        id: "1.1.4.c",
                        title: "Documented Strategic Objectives",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented roadmap exists that identifies strategic objectives for the Cybersecurity program and measures efforts towards attaining those objectives.",
                        evidence: [
                            "Cybersecurity strategy document or roadmap",
                            "OKRs (Objectives and Key Results) documentation",
                            "KPIs and metrics tracking reports",
                            "Quarterly or annual progress reports",
                            "Board-approved strategic plans"
                        ]
                    },
                    {
                        id: "1.1.4.d",
                        title: "Mission, Vision, and Goals",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists that documents the organization's mission statement, vision, and goals. This should be stored centrally and articulated during onboarding.",
                        evidence: [
                            "Published mission, vision, and goals statements",
                            "Employee onboarding materials including these statements",
                            "Centralized location link (intranet, policy portal)",
                            "Employee acknowledgment records",
                            "Communication materials distributed to workforce"
                        ]
                    },
                    {
                        id: "1.1.4.e",
                        title: "Operations & Execution Validation",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to review program roles and skill sets on a recurring basis to ensure the program is capable of fulfilling cybersecurity needs.",
                        evidence: [
                            "Periodic review schedule and procedures",
                            "Review meeting minutes and findings",
                            "Skills gap analysis reports",
                            "OLA performance metrics and reports",
                            "Career development and succession plans"
                        ]
                    }
                ]
            },
            {
                name: "Policy",
                controls: [
                    {
                        id: "1.2.4.a",
                        title: "Policy Management",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to approve, change, and periodically review existing policies. Policy owners must be aware of their responsibility for policy maintenance.",
                        evidence: [
                            "Policy management procedure document",
                            "Policy approval workflow and records",
                            "Policy review schedule and completion logs",
                            "Policy owner assignment documentation",
                            "Version control and change logs for policies"
                        ]
                    },
                    {
                        id: "1.2.4.b",
                        title: "Critical Policy Coverage",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "Organizational policies cover critical areas including acceptable use, access control, auditing, business continuity, change management, data privacy, HR, physical security, incident management, and more.",
                        evidence: [
                            "Complete policy library or repository",
                            "Index of all policies covering required areas",
                            "Individual policy documents for each critical area",
                            "Policy distribution records",
                            "Board or executive approval records"
                        ]
                    },
                    {
                        id: "1.2.4.c",
                        title: "Policy Training & Acceptance",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process requires employees and contractors to receive training on critical policies during onboarding and at least annually, with certification of understanding.",
                        evidence: [
                            "Policy training curriculum and materials",
                            "Training completion records and certificates",
                            "Employee acknowledgment forms (signed)",
                            "Annual policy review and acceptance logs",
                            "LMS reports showing training completion rates"
                        ]
                    },
                    {
                        id: "1.2.5.a",
                        title: "Policy Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A centralized system maintains organizational policies with effective dates, owners, change logs, and records recurring acknowledgement and acceptance.",
                        evidence: [
                            "Policy management system screenshots or documentation",
                            "System configuration showing version control",
                            "Sample acknowledgment tracking reports",
                            "User access logs to policy repository",
                            "Vendor contract or system implementation records"
                        ]
                    }
                ]
            },
            {
                name: "Compliance",
                controls: [
                    {
                        id: "1.3.4.a",
                        title: "Audit and Compliance Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to programmatically monitor and assess organizational compliance with internal policies, national directives, and regulatory guidance.",
                        evidence: [
                            "Audit and compliance program charter",
                            "Annual audit plan and schedule",
                            "Internal audit reports and findings",
                            "Compliance monitoring procedures",
                            "Remediation tracking documentation"
                        ]
                    },
                    {
                        id: "1.3.4.b",
                        title: "Self-Assessment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to conduct self-assessment of cybersecurity capabilities using a questionnaire and framework provided by the regulator.",
                        evidence: [
                            "Completed self-assessment questionnaires",
                            "Self-assessment methodology document",
                            "Statement of Applicability (SOA)",
                            "Supporting evidence for assessment responses",
                            "Submission records to CBE"
                        ]
                    },
                    {
                        id: "1.3.4.c",
                        title: "Reporting Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures that lapses in compliance and policy are documented and reported to proper authorities, including CBE EG-FINCIRT for cyber security incidents.",
                        evidence: [
                            "Incident reporting procedures",
                            "EG-FINCIRT incident report submissions",
                            "Compliance violation reports",
                            "Timeline documentation showing timely reporting",
                            "Communication logs with CBE"
                        ]
                    },
                    {
                        id: "1.3.4.d",
                        title: "Regulatory Alignment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures that compliance and enforcement activities are aligned with regulatory requirements with explicit references to specific regulations or laws.",
                        evidence: [
                            "Regulatory mapping document",
                            "Policies with explicit regulatory references",
                            "Compliance tracking matrix",
                            "Gap analysis against regulatory requirements",
                            "Legal review documentation"
                        ]
                    },
                    {
                        id: "1.3.5.a",
                        title: "GRC System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to identify technical compliance with official policies, interacting with compliance agents and reporting results for audit management and compliance tracking.",
                        evidence: [
                            "GRC system documentation and configuration",
                            "Sample compliance reports from system",
                            "Integration documentation with compliance agents",
                            "System access logs and user permissions",
                            "Vendor contract and implementation records"
                        ]
                    }
                ]
            },
            {
                name: "Security Awareness & Training",
                controls: [
                    {
                        id: "1.4.4.a",
                        title: "Formalized Security Awareness Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to support a centralized Cybersecurity Awareness program with training to help employees understand their responsibility for protecting organizational assets.",
                        evidence: [
                            "Security awareness program charter",
                            "Training curriculum and materials",
                            "Annual training calendar",
                            "Awareness campaign records (posters, emails, events)",
                            "Employee feedback and satisfaction surveys"
                        ]
                    },
                    {
                        id: "1.4.4.b",
                        title: "Role-Based Training Plan",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard identifies training requirements based on employee or contractor job role and level of access, determining core skills and suggested training.",
                        evidence: [
                            "Role-based training matrix",
                            "Job role descriptions with training requirements",
                            "Individual training plans",
                            "Skills assessment records",
                            "Training completion tracking by role"
                        ]
                    },
                    {
                        id: "1.4.4.c",
                        title: "Metrics",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard helps evaluate effectiveness of policies, programs, and training by benchmarking user performance in complying with cybersecurity awareness concepts.",
                        evidence: [
                            "Training effectiveness metrics reports",
                            "Phishing simulation results and trends",
                            "Training completion rates dashboard",
                            "Incident reports related to human error",
                            "Year-over-year comparison reports"
                        ]
                    },
                    {
                        id: "1.4.5.a",
                        title: "Learning Management System (LMS)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to centralize security awareness and training administration, storage, tracking, reporting, and delivery to employees and contractors.",
                        evidence: [
                            "LMS platform documentation",
                            "System configuration and setup",
                            "Training content library screenshots",
                            "Completion reports and analytics",
                            "Vendor contract or licensing agreement"
                        ]
                    },
                    {
                        id: "1.4.5.b",
                        title: "Phishing Awareness",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool used to administer immersive phishing training simulations to employees and contractors to improve workforce security awareness and detect phishing emails.",
                        evidence: [
                            "Phishing simulation platform documentation",
                            "Campaign schedules and templates used",
                            "Simulation results and click rates",
                            "Remedial training records for users who failed",
                            "Trend analysis reports"
                        ]
                    }
                ]
            }
        ]
    },
    riskManagement: {
        name: "Cyber Risk Management",
        icon: "⚠️",
        subdomains: [
            {
                name: "Risk Management Operations",
                controls: [
                    {
                        id: "2.1.4.a",
                        title: "Risk Committee",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard defines the role, responsibilities, and members of the organization's risk committee to advise the Board on risk appetite, profile, and tolerance.",
                        evidence: [
                            "Risk Committee charter",
                            "Committee member roster with roles",
                            "Meeting minutes and attendance records",
                            "Risk appetite statement",
                            "Reports to Board of Directors"
                        ]
                    },
                    {
                        id: "2.1.4.b",
                        title: "Formal Risk Management Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented program exists to catalogue, quantify, qualify, and mitigate specific risks. Includes risk register updated and reviewed periodically.",
                        evidence: [
                            "Risk management policy and procedures",
                            "Risk management program charter",
                            "Risk assessment methodology documentation",
                            "Annual risk assessment reports",
                            "Management review meeting minutes"
                        ]
                    },
                    {
                        id: "2.1.4.c",
                        title: "Risk Monitoring and Risk Register",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to catalogue, monitor, and periodically review identified risks and corresponding mitigating controls via a comprehensive risk register.",
                        evidence: [
                            "Current risk register with all required fields",
                            "Risk monitoring procedures",
                            "Periodic risk review reports",
                            "Risk treatment plans",
                            "Risk escalation records"
                        ]
                    },
                    {
                        id: "2.1.4.d",
                        title: "Risk Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A standard defines classifications for risks into overarching categories (political, environmental, economic, geopolitical, social, technological) with criticality levels.",
                        evidence: [
                            "Risk classification framework document",
                            "Risk taxonomy or hierarchy",
                            "Criticality level definitions",
                            "Asset criticality assignments",
                            "Risk category examples and guidance"
                        ]
                    },
                    {
                        id: "2.1.5.a",
                        title: "GRC System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to identify, document, and address risks; maintain compliance; and streamline analysis through risk visualization and automated reporting.",
                        evidence: [
                            "GRC system implementation documentation",
                            "Risk dashboard screenshots",
                            "Automated risk reports",
                            "System integration documentation",
                            "User training records for GRC system"
                        ]
                    }
                ]
            },
            {
                name: "Asset Management",
                controls: [
                    {
                        id: "2.2.4.a",
                        title: "Asset Management Process",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies organizational assets, their lifecycle, handling, and classification with criteria for self-assessment including ownership, location, description, threats, and mitigating measures.",
                        evidence: [
                            "Asset management policy and procedures",
                            "Asset inventory with all required fields",
                            "Asset classification scheme",
                            "Asset lifecycle documentation",
                            "Asset review and update records"
                        ]
                    },
                    {
                        id: "2.2.4.b",
                        title: "Media Handling & Information Asset Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures information is handled and classified according to sensitivity including classification standards, approved transit/storage methods, data disposal, retention, and custodians.",
                        evidence: [
                            "Data classification policy",
                            "Media handling procedures",
                            "Data retention schedule",
                            "Secure disposal records and certificates",
                            "Data custodian assignments"
                        ]
                    },
                    {
                        id: "2.2.5.a",
                        title: "Configuration Management Database (CMDB)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system deployed to track and store configuration information for software and hardware assets including ownership, location, configuration, dependencies, and criticality.",
                        evidence: [
                            "CMDB system documentation",
                            "Sample CMDB records showing required fields",
                            "Configuration baseline documentation",
                            "Change tracking logs",
                            "CMDB audit reports"
                        ]
                    },
                    {
                        id: "2.2.5.b",
                        title: "Asset Management Database",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system tracks all hardware and software assets permitted to access and communicate in the organization's environment with technical identifiers for lifecycle management.",
                        evidence: [
                            "Asset management system documentation",
                            "Complete asset inventory export",
                            "Asset discovery scan results",
                            "Automated inventory update logs",
                            "Reconciliation reports"
                        ]
                    }
                ]
            },
            {
                name: "Business Resilience",
                controls: [
                    {
                        id: "2.3.4.a",
                        title: "Change Management Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies risks to business operations ensuring resilience when introducing new technology. Includes formal approval chain, testing requirements, and change tracking.",
                        evidence: [
                            "Change management policy and procedures",
                            "Change Advisory Board (CAB) meeting minutes",
                            "Change request forms and approvals",
                            "Change implementation records",
                            "Post-implementation review reports"
                        ]
                    },
                    {
                        id: "2.3.4.b",
                        title: "Backup & Retention Strategy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines frequency, scope, and methods for backing up data and storage length accounting for data criticality.",
                        evidence: [
                            "Backup policy and procedures",
                            "Backup schedule documentation",
                            "Backup success/failure logs",
                            "Retention schedule matrix",
                            "Backup storage location records"
                        ]
                    },
                    {
                        id: "2.3.4.c",
                        title: "Recovery Strategy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process incorporates recovery-level objectives from BIA to prioritize resumption of business-critical processes, systems, and services.",
                        evidence: [
                            "Recovery strategy documentation",
                            "Recovery prioritization matrix",
                            "Hot/Warm/Cold site requirements",
                            "Recovery resource allocation plans",
                            "Recovery strategy approval records"
                        ]
                    },
                    {
                        id: "2.3.4.d",
                        title: "Disaster Recovery Plan (DRP)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan defines steps to restore critical systems and functionality to resume delivery of products and services after an incident.",
                        evidence: [
                            "Disaster Recovery Plan document",
                            "RTO and RPO definitions for critical systems",
                            "DR site documentation and contracts",
                            "System recovery procedures",
                            "DR plan approval and version history"
                        ]
                    },
                    {
                        id: "2.3.4.e",
                        title: "Business Continuity Plan (BCP)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan documents how to minimize disruption to delivery of products and services consistent with acceptable business operations cadence.",
                        evidence: [
                            "Business Continuity Plan document",
                            "Business continuity objectives (BCO)",
                            "Critical business function identification",
                            "Alternative work arrangements documentation",
                            "BCP testing and exercise records"
                        ]
                    },
                    {
                        id: "2.3.4.f",
                        title: "Business Impact Analysis (BIA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies potential impact from incidents affecting critical assets. Determines MAO, RPO, and RTO for acceptable disruption and required continuity speed.",
                        evidence: [
                            "Business Impact Analysis report",
                            "Critical asset identification",
                            "MAO, RPO, RTO calculations",
                            "Impact assessment worksheets",
                            "BIA update and review records"
                        ]
                    },
                    {
                        id: "2.3.4.g",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard holds incident simulation exercises at least annually to test incident response, business continuity, and disaster recovery plans across all organizational levels.",
                        evidence: [
                            "Annual exercise schedule",
                            "Exercise scenarios and objectives",
                            "Exercise participation records",
                            "After-action reports and lessons learned",
                            "Corrective action implementation records"
                        ]
                    },
                    {
                        id: "2.3.5.a",
                        title: "High Availability System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system ensures agreed operational performance (uptime) for higher-than-normal periods including UPS, server clustering, load balancing, virtualization, and DR automation.",
                        evidence: [
                            "High availability architecture diagrams",
                            "System uptime SLA documentation",
                            "Redundancy configuration records",
                            "Failover testing results",
                            "System availability reports"
                        ]
                    },
                    {
                        id: "2.3.5.b",
                        title: "Backup System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system creates exact copies of files, databases, or entire systems for restoration in the event of data loss.",
                        evidence: [
                            "Backup system configuration documentation",
                            "Backup job schedules and logs",
                            "Backup restoration test results",
                            "Backup media inventory",
                            "Offsite storage receipts and agreements"
                        ]
                    }
                ]
            },
            {
                name: "Insider Threat Management",
                controls: [
                    {
                        id: "2.4.4.a",
                        title: "Legal/HR Collaboration",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process defines how HR and Legal engage when suspected insider threat is identified, stored in a playbook accounting for legal and forensic requirements.",
                        evidence: [
                            "Insider threat response playbook",
                            "Legal and HR collaboration procedures",
                            "Chain of custody procedures",
                            "Investigation authorization forms",
                            "Case documentation templates"
                        ]
                    },
                    {
                        id: "2.4.4.b",
                        title: "Employee Risk Profiling",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process authorizes monitoring, tracking, and developing risk profiles for authorized users with access to sensitive systems accounting for job role, access level, baseline activity, and background.",
                        evidence: [
                            "Acceptable Use Policy with monitoring clause",
                            "Risk profiling methodology",
                            "User behavior baseline documentation",
                            "Background investigation records",
                            "High-risk user watchlist"
                        ]
                    },
                    {
                        id: "2.4.4.c",
                        title: "Need-to-Know RBAC",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process restricts employee/contractor access to minimum required systems and physical workspace considering separation of duties and job rotation.",
                        evidence: [
                            "Access control policy",
                            "Role-based access matrix",
                            "Separation of duties documentation",
                            "Access request and approval forms",
                            "Periodic access reviews and certifications"
                        ]
                    },
                    {
                        id: "2.4.5.a",
                        title: "User Behavior Analytics (UBA)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool aggregates, stores, indexes, and correlates abnormal behaviors for specific user accounts, creating baselines and determining changes in trends for investigation.",
                        evidence: [
                            "UBA system documentation",
                            "Baseline behavior profiles",
                            "Anomaly detection alerts",
                            "Integration with SIEM logs",
                            "Investigation reports from UBA alerts"
                        ]
                    },
                    {
                        id: "2.4.5.b",
                        title: "Advanced Forensics",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool collects and preserves sources of potential evidence to support legal or HR efforts associated with insider threats.",
                        evidence: [
                            "Forensic tools inventory and licenses",
                            "Forensic analysis procedures",
                            "Chain of custody forms",
                            "Forensic investigation reports",
                            "Evidence preservation records"
                        ]
                    },
                    {
                        id: "2.4.5.c",
                        title: "Isolated Case Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool stores sensitive information about suspected and confirmed insider threat activity with need-to-know access control in a distinct security enclave.",
                        evidence: [
                            "Case management system documentation",
                            "Access control logs showing restrictions",
                            "Network segmentation documentation",
                            "Case records and investigation notes",
                            "System audit logs"
                        ]
                    },
                    {
                        id: "2.4.5.d",
                        title: "Honeypot",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool detects unauthorized user access to organizational assets designed never to be accessed legitimately, including fake files, credentials, network shares, or applications.",
                        evidence: [
                            "Honeypot deployment documentation",
                            "Honeypot configuration records",
                            "Access attempt logs and alerts",
                            "Integration with SIEM",
                            "Incident reports from honeypot triggers"
                        ]
                    }
                ]
            }
        ]
    },
    cyberDefence: {
        name: "Cyber Defence",
        icon: "🛡️",
        subdomains: [
            {
                name: "Incident Management",
                controls: [
                    {
                        id: "3.1.4.a",
                        title: "Incident Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process provides clear guidance on classifying events and their responses, with sliding scale of engagement needs based on incident severity (P1, P2, P3).",
                        evidence: [
                            "Incident classification policy",
                            "Severity level definitions (P1, P2, P3)",
                            "Classification decision matrix",
                            "Historical incident classification records",
                            "Training materials on classification"
                        ]
                    },
                    {
                        id: "3.1.4.b",
                        title: "Incident Categorization",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented matrix categorizes incidents after event information collection (abusive content, malicious code, information gathering, intrusion attempts, intrusions).",
                        evidence: [
                            "Incident categorization matrix",
                            "Category definitions and examples",
                            "Incident tickets showing categorization",
                            "Reporting by category",
                            "Category-specific response procedures"
                        ]
                    },
                    {
                        id: "3.1.4.c",
                        title: "Communications Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process accounts for potential communications limitations during events, specifying primary, secondary, and tertiary methods of voice, video, and data communications.",
                        evidence: [
                            "Communications plan document",
                            "Contact lists with multiple methods",
                            "Communication tools and backups",
                            "Communications test results",
                            "Escalation call trees"
                        ]
                    },
                    {
                        id: "3.1.4.d",
                        title: "Escalation Matrix",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process documents, manages, and publishes clearly defined escalation pathway with associated authority for execution during incidents.",
                        evidence: [
                            "Escalation matrix document",
                            "Authority and decision-making levels",
                            "Escalation criteria and thresholds",
                            "Escalation records from past incidents",
                            "Matrix distribution and availability proof"
                        ]
                    },
                    {
                        id: "3.1.5.a",
                        title: "Communications System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool functions independent of organizational technology providing central communication source with SMS/email broadcast, video conferencing, and offline capability.",
                        evidence: [
                            "Communications system documentation",
                            "System independence verification",
                            "SMS/email broadcast test results",
                            "Video conferencing setup records",
                            "Offline communication capability tests"
                        ]
                    },
                    {
                        id: "3.1.5.b",
                        title: "Knowledge Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool provides central source independent of organizational technology stack to store and retrieve information during incidents with role-based access.",
                        evidence: [
                            "Knowledge management system documentation",
                            "Incident documentation repository",
                            "Access control configuration",
                            "Document versioning records",
                            "System availability and independence proof"
                        ]
                    }
                ]
            },
            {
                name: "Incident Response",
                controls: [
                    {
                        id: "3.2.4.a",
                        title: "Malware Analysis",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process exists to forensically analyze suspicious files discovered during investigation, identifying how to handle evidence and determine malware functionality and IOCs.",
                        evidence: [
                            "Malware analysis procedures",
                            "Sandbox environment documentation",
                            "Malware analysis reports",
                            "IOC extraction records",
                            "Analyst training and certification"
                        ]
                    },
                    {
                        id: "3.2.4.b",
                        title: "Communications Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines how Incident Response findings are communicated to organizational stakeholders, in what modality, frequency, and escalation pathway.",
                        evidence: [
                            "IR communications plan",
                            "Stakeholder notification procedures",
                            "Communication templates",
                            "Notification logs and records",
                            "Escalation communication workflows"
                        ]
                    },
                    {
                        id: "3.2.4.c",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard requires security personnel to test Incident Response Plan through simulated cyber incident exercises at least annually against relevant threats.",
                        evidence: [
                            "Annual exercise schedule",
                            "Exercise scenarios and injects",
                            "Exercise observer notes",
                            "After-action reports",
                            "Improvement plan implementation records"
                        ]
                    },
                    {
                        id: "3.2.4.d",
                        title: "Incident Response Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan outlines organization's procedures, steps, roles, and responsibilities in Incident Response program and activities required during each investigation phase.",
                        evidence: [
                            "Incident Response Plan document",
                            "NIST IR lifecycle phase procedures",
                            "Role and responsibility assignments",
                            "IR metrics and effectiveness measures",
                            "Plan approval and version control"
                        ]
                    },
                    {
                        id: "3.2.5.a",
                        title: "Case Management System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool captures relevant information discovered through incident investigations including scope, scale, affected accounts/systems, and attacker TTPs with need-to-know access.",
                        evidence: [
                            "Case management system documentation",
                            "Sample incident case records",
                            "Access control and permissions",
                            "Case tracking and workflow",
                            "Integration with other security tools"
                        ]
                    },
                    {
                        id: "3.2.5.b",
                        title: "Digital Forensics",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool acquires, maintains, inventories, tracks, stores, and handles evidentiary artifacts during investigations with chain-of-custody procedures adhering to data classification standards.",
                        evidence: [
                            "Forensic tool inventory and licenses",
                            "Chain of custody forms",
                            "Evidence storage and handling procedures",
                            "Forensic image verification hashes",
                            "Forensic analysis reports"
                        ]
                    }
                ]
            },
            {
                name: "Security Operations",
                controls: [
                    {
                        id: "3.3.4.a",
                        title: "24x7x365 Staffing",
                        type: "People",
                        criticality: "Mandatory",
                        description: "A documented standard ensures SOC is staffed for continuous monitoring 24x7x365 with staff capable of detecting and escalating alerts within documented OLAs.",
                        evidence: [
                            "SOC staffing policy",
                            "Shift schedules and rotation",
                            "Staffing coverage reports",
                            "OLA compliance reports",
                            "Staff availability and backup procedures"
                        ]
                    },
                    {
                        id: "3.3.4.b",
                        title: "Verbose Logging Standard",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures logs with relevant security information are directed to central console ensuring SOC has complete insight into technical security occurrences.",
                        evidence: [
                            "Logging standard document",
                            "Log source inventory",
                            "Log collection verification",
                            "Sample logs showing required verbosity",
                            "Log forwarding configuration"
                        ]
                    },
                    {
                        id: "3.3.4.c",
                        title: "Log Retention Standard",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures security logs are retained for 12 months providing critical visibility to identify intrusion scope, scale, and attacker TTPs.",
                        evidence: [
                            "Log retention policy",
                            "Storage capacity planning documents",
                            "Log archival procedures",
                            "Retention compliance reports",
                            "Historical log availability proof"
                        ]
                    },
                    {
                        id: "3.3.4.d",
                        title: "Operational Level Agreement (OLA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies maximum agreed time to respond to SOC requests supporting investigations across cross-functional IT and Cybersecurity teams.",
                        evidence: [
                            "OLA documents signed by all parties",
                            "Response time definitions by request type",
                            "OLA performance tracking reports",
                            "Escalation procedures for OLA violations",
                            "OLA review and update records"
                        ]
                    },
                    {
                        id: "3.3.4.e",
                        title: "Penetration Testing",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process tests existing security controls against weaponized vulnerabilities and methods used by cyber threat actors informed by threat intelligence.",
                        evidence: [
                            "Penetration testing policy",
                            "Annual testing schedule",
                            "Rules of engagement documents",
                            "Penetration test reports",
                            "Remediation tracking for findings"
                        ]
                    },
                    {
                        id: "3.3.4.f",
                        title: "Playbooks",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process develops playbooks allowing all Cybersecurity team members to understand roles, responsibilities, escalations, and pre-defined actions for specific incident types.",
                        evidence: [
                            "Incident response playbook library",
                            "Playbooks for common incident types",
                            "Playbook review and update logs",
                            "Staff training on playbook usage",
                            "Playbook execution records from incidents"
                        ]
                    },
                    {
                        id: "3.3.4.g",
                        title: "Threat Hunting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process authorizes SOC to proactively investigate endpoints, networks, and applications exhibiting characteristics of intrusion activities.",
                        evidence: [
                            "Threat hunting program charter",
                            "Hunting hypotheses and methodologies",
                            "Hunt mission reports",
                            "IOCs discovered through hunting",
                            "Integration with threat intelligence"
                        ]
                    },
                    {
                        id: "3.3.4.h",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process defines how frequently cybersecurity controls should be tested with cyber incident simulations to determine coverage gaps.",
                        evidence: [
                            "Control testing schedule",
                            "Purple team exercise plans",
                            "Coverage gap assessment reports",
                            "Control improvement roadmaps",
                            "Exercise lessons learned documentation"
                        ]
                    },
                    {
                        id: "3.3.5.a",
                        title: "SIEM",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool aggregates, normalizes, parses, correlates, and indexes logs, security events, and alerts into centralized location allowing detection of intrusion activities.",
                        evidence: [
                            "SIEM architecture documentation",
                            "Log source integration list",
                            "Correlation rules repository",
                            "Sample detection alerts",
                            "SIEM performance and capacity reports"
                        ]
                    },
                    {
                        id: "3.3.5.b",
                        title: "Centralized Log Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool processes, flattens, parses, and stores collected log data from endpoints, applications, and networks transforming data into standardized template for indexing.",
                        evidence: [
                            "Log management architecture",
                            "Parsing rules and configurations",
                            "Log normalization standards",
                            "Storage capacity and retention proof",
                            "Log query and retrieval capabilities"
                        ]
                    },
                    {
                        id: "3.3.5.c",
                        title: "Correlation Rules & Use Cases",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool allows SOC personnel to develop signatures drawing connections between multiple log events generating alerts for additional investigation.",
                        evidence: [
                            "Use case library with descriptions",
                            "Correlation rule documentation",
                            "Alert tuning records",
                            "False positive reduction metrics",
                            "Rule testing and validation procedures"
                        ]
                    },
                    {
                        id: "3.3.5.d",
                        title: "EDR Integration",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool enables SOC to take corrective action on suspicious endpoint activities including file containment, endpoint isolation, and blocking IP addresses or domains.",
                        evidence: [
                            "EDR-SIEM integration documentation",
                            "Response action playbooks",
                            "Containment action logs",
                            "Automated response configurations",
                            "EDR alert escalation workflows"
                        ]
                    },
                    {
                        id: "3.3.5.e",
                        title: "SOAR",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A system comprised of security software, tools, and scripts helping SOC define, prioritize, and focus resources during investigations using automation and machine learning.",
                        evidence: [
                            "SOAR platform documentation",
                            "Automated workflow configurations",
                            "Integration with security tools",
                            "Automation playbook library",
                            "Time-saving metrics from automation"
                        ]
                    }
                ]
            },
            {
                name: "Cyber Threat Intelligence",
                controls: [
                    {
                        id: "3.4.4.a",
                        title: "Cyber Threat Profile",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard creates and maintains register of cyber risks to organizational assets with actor motivations, likelihood, impact rating, and corresponding TTPs.",
                        evidence: [
                            "Organizational threat profile document",
                            "Threat actor database",
                            "Industry-specific threat analysis",
                            "TTP mapping to MITRE ATT&CK",
                            "Quarterly threat profile updates"
                        ]
                    },
                    {
                        id: "3.4.4.b",
                        title: "Priority Intelligence Requirements (PIRs)",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process identifies key CTI focus areas based on organizational stakeholder needs and frequency for PIR re-evaluation to determine relevance and alignment.",
                        evidence: [
                            "PIR documentation",
                            "Stakeholder requirements gathering",
                            "PIR review and approval records",
                            "PIR alignment with business objectives",
                            "PIR revision history"
                        ]
                    },
                    {
                        id: "3.4.4.c",
                        title: "Key Intelligence Questions (KIQs)",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard translates PIRs into measurable parts as KIQs used to quantify metrics associated with threat intelligence relevance.",
                        evidence: [
                            "KIQ development methodology",
                            "PIR-to-KIQ mapping",
                            "KIQ tracking and measurement",
                            "Intelligence collection plans",
                            "KIQ effectiveness assessments"
                        ]
                    },
                    {
                        id: "3.4.4.d",
                        title: "Analysis and Reporting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process develops intelligence products supporting business operations and driving resource decisions using both internal and external data sources.",
                        evidence: [
                            "Intelligence product library",
                            "Analytic methodologies documentation",
                            "Intelligence reports and briefings",
                            "Distribution lists for intelligence",
                            "Feedback from intelligence consumers"
                        ]
                    },
                    {
                        id: "3.4.4.e",
                        title: "Operational Integration",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process integrates findings from analytic products into routine cyber defence operations and leadership workflows.",
                        evidence: [
                            "Integration procedures",
                            "CTI-driven hunting campaigns",
                            "Detection rule updates from CTI",
                            "Executive intelligence briefings",
                            "CTI impact metrics on operations"
                        ]
                    },
                    {
                        id: "3.4.5.a",
                        title: "Threat Intelligence Feed",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "Data feeds containing suspected IOCs from commercial and open-source intelligence including IP addresses, domains, and malware file hash values.",
                        evidence: [
                            "Threat feed subscriptions and licenses",
                            "Feed integration documentation",
                            "IOC consumption in security tools",
                            "Feed quality and relevance assessments",
                            "Feed update frequency verification"
                        ]
                    },
                    {
                        id: "3.4.5.b",
                        title: "Threat Intelligence Platform (TIP)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool deployed as central repository to catalogue CTI analytic assessments regarding incidents and threat actor capabilities with need-to-know access controls.",
                        evidence: [
                            "TIP platform documentation",
                            "Intelligence artifact repository",
                            "Access control configuration",
                            "Integration with security tools",
                            "Intelligence sharing capabilities"
                        ]
                    }
                ]
            }
        ]
    },
    technology: {
        name: "Technology & Operations",
        icon: "💻",
        subdomains: [
            {
                name: "Identity & Access Management",
                controls: [
                    {
                        id: "4.1.4.a",
                        title: "Onboarding/Offboarding",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process for account provisioning/deprovisioning with required approval chain based on access level and risk, integrated into personnel management processes.",
                        evidence: [
                            "Account provisioning/deprovisioning procedures",
                            "Access request and approval forms",
                            "Integration with HR systems documentation",
                            "Account creation/termination tickets",
                            "OLA compliance reports for account lifecycle"
                        ]
                    },
                    {
                        id: "4.1.4.b",
                        title: "Hardening",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures authentication systems are configured for least privilege, data encryption, disabled unnecessary services, enhanced logging, and disabled unnecessary protocols.",
                        evidence: [
                            "Authentication system hardening standard",
                            "System configuration baselines",
                            "Hardening compliance scan results",
                            "Change records for hardening implementation",
                            "Periodic hardening validation reports"
                        ]
                    },
                    {
                        id: "4.1.4.c",
                        title: "Access Compliance",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process requires audit of privileged access and continued validation that business requirements exist for access with varying time requirements and automatic disabling.",
                        evidence: [
                            "Access review policy and procedures",
                            "Quarterly/annual access certification reports",
                            "Access recertification records",
                            "Orphaned account remediation logs",
                            "Automated account disabling rules"
                        ]
                    },
                    {
                        id: "4.1.4.d",
                        title: "Identity Federation",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process identifies approved federated authentication services and instances where federation is obligatory, optional, or prohibited incorporating digital identity risk model.",
                        evidence: [
                            "Federation policy and standards",
                            "Approved identity provider list",
                            "Federation architecture diagrams",
                            "SAML/OAuth configurations",
                            "Federation risk assessment"
                        ]
                    },
                    {
                        id: "4.1.4.e",
                        title: "IAM Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies and documents standards for identity and access management including credential standards, least privilege, RBAC, and privileged access assurance levels.",
                        evidence: [
                            "IAM standards document",
                            "RBAC role definitions and assignments",
                            "Credential policy (complexity, rotation)",
                            "Privileged access requirements",
                            "Two-person integrity procedures"
                        ]
                    },
                    {
                        id: "4.1.5.a",
                        title: "Multi-Factor Authentication",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system requires something user knows and has for authentication, standardized for privileged or remote access and sensitive data access, not permitting SMS OTPs.",
                        evidence: [
                            "MFA system documentation",
                            "MFA enrollment rates by user type",
                            "MFA method configurations (no SMS)",
                            "MFA authentication logs",
                            "MFA coverage reports for privileged access"
                        ]
                    },
                    {
                        id: "4.1.5.b",
                        title: "Authentication Logging",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A feature employed in software and hardware solutions to log all authentication requests integrated into central console for analysis, correlation, and alerting.",
                        evidence: [
                            "Authentication logging configuration",
                            "Sample authentication logs",
                            "SIEM integration documentation",
                            "Failed authentication alerts",
                            "Authentication log retention verification"
                        ]
                    },
                    {
                        id: "4.1.5.c",
                        title: "Identity & Privileged Access Management Tools",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "Tools provide heightened visibility and security for identity and privileged access including credential management, entitlement provisioning, MFA, posture check, and behavior analytics.",
                        evidence: [
                            "PAM/IAM system documentation",
                            "Credential vaulting configuration",
                            "Session recording samples",
                            "Privileged access analytics reports",
                            "Tool integration architecture"
                        ]
                    },
                    {
                        id: "4.1.5.d",
                        title: "Session Recording",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool records all activity associated with high-risk, highly sensitive, or privileged activity maintained in immutable format and reviewed by auditors at least annually.",
                        evidence: [
                            "Session recording configuration",
                            "Sample recorded sessions (sanitized)",
                            "Storage and immutability verification",
                            "Audit review reports",
                            "Recording policy and scope definition"
                        ]
                    },
                    {
                        id: "4.1.5.e",
                        title: "Password Vaulting",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool stores and manages access to passwords across the organization, leveraged to randomize local passwords preventing re-use across multiple systems.",
                        evidence: [
                            "Password vault system documentation",
                            "Password rotation policies and schedules",
                            "Vault access logs and audit trails",
                            "Password randomization configurations",
                            "Emergency access procedures"
                        ]
                    },
                    {
                        id: "4.1.5.f",
                        title: "Service Account Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system manages service accounts ensuring regular password rotation complying with password-aging requirements ensuring passwords aren't stored in source code.",
                        evidence: [
                            "Service account inventory",
                            "Password rotation compliance reports",
                            "Service account ownership assignments",
                            "Code repository scans for hardcoded credentials",
                            "Service account monitoring alerts"
                        ]
                    },
                    {
                        id: "4.1.5.g",
                        title: "Centralized Access Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system federates access across organization to eliminate local accounts and shared credentials, particularly for infrastructure and network devices.",
                        evidence: [
                            "Centralized authentication architecture",
                            "RADIUS/TACACS configuration",
                            "Local account elimination reports",
                            "SSO implementation documentation",
                            "Federation coverage by system type"
                        ]
                    },
                    {
                        id: "4.1.5.h",
                        title: "Public Key Cryptography",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A system manages trusted digital certificates empowering SOC to detect installation and unauthorized use of digital identity certificates with changes logged.",
                        evidence: [
                            "PKI infrastructure documentation",
                            "Certificate inventory and expiry tracking",
                            "Certificate issuance and revocation logs",
                            "Certificate monitoring alerts",
                            "Trusted CA list and policies"
                        ]
                    }
                ]
            },
            {
                name: "Data Protection & Privacy",
                controls: [
                    {
                        id: "4.2.4.a",
                        title: "Data Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process defines categories for data assignment dictating security level to be applied through identify, classify, protect, monitor, and improve phases.",
                        evidence: [
                            "Data classification policy",
                            "Classification scheme (Public, Internal, Confidential, Restricted)",
                            "Data inventory with classifications",
                            "Classification labeling procedures",
                            "Data owner assignments"
                        ]
                    },
                    {
                        id: "4.2.4.b",
                        title: "Cryptographic Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies requirements for data encryption accounting for data type and classification determining acceptable encryption algorithms.",
                        evidence: [
                            "Encryption standards document",
                            "Approved algorithm list (AES, RSA, etc.)",
                            "Encryption key management procedures",
                            "Encryption implementation guidelines",
                            "Cryptographic module validation"
                        ]
                    },
                    {
                        id: "4.2.4.c",
                        title: "Removable Storage Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies approved methods and technologies for data storage on removable media accounting for data classification.",
                        evidence: [
                            "Removable media policy",
                            "Approved removable media types",
                            "Encryption requirements for removable media",
                            "Media registration and tracking",
                            "Secure disposal procedures and certificates"
                        ]
                    },
                    {
                        id: "4.2.4.d",
                        title: "Reporting Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies data breach reporting requirements containing reporting timelines, communication methods, and penalties for non-compliance.",
                        evidence: [
                            "Breach notification procedures",
                            "Reporting timeline documentation",
                            "Notification templates",
                            "CBE and regulatory reporting records",
                            "Breach notification logs"
                        ]
                    },
                    {
                        id: "4.2.5.a",
                        title: "Brand & Reputation Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A service employed to scour internet and dark web for potential leaked data or system access for sale by criminals.",
                        evidence: [
                            "Dark web monitoring service contract",
                            "Monitoring scope and configuration",
                            "Alert samples and findings",
                            "Response procedures for findings",
                            "Quarterly monitoring reports"
                        ]
                    },
                    {
                        id: "4.2.5.b",
                        title: "Data Loss Prevention (DLP)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool detects and blocks data from exiting organizational network, correlating suspicious file activity and alerting across network, endpoint, and email DLP systems.",
                        evidence: [
                            "DLP system architecture and deployment",
                            "DLP policies and rules configuration",
                            "Data classification integration",
                            "DLP incident reports and investigations",
                            "Coverage reports (endpoints, network, email)"
                        ]
                    },
                    {
                        id: "4.2.5.c",
                        title: "Data Integrity Monitoring",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool detects and blocks changes to data integrity when activity is above acceptable threshold, focusing on most sensitive assets, source code, and data vaults.",
                        evidence: [
                            "File integrity monitoring (FIM) configuration",
                            "Baseline and integrity checks",
                            "Change detection alerts",
                            "Integrity violation investigation records",
                            "Critical asset monitoring scope"
                        ]
                    },
                    {
                        id: "4.2.5.d",
                        title: "Secure File Sharing",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool provides secure data transfers to external personnel validating recipient and preventing sharing beyond intended recipient.",
                        evidence: [
                            "Secure file sharing platform documentation",
                            "Access control and recipient validation",
                            "Encryption in transit and at rest",
                            "File sharing audit logs",
                            "Link expiration and access tracking"
                        ]
                    },
                    {
                        id: "4.2.5.e",
                        title: "Data Storage System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system stores data electronically in readable format making data storage and access easy, reliable, and secure with encryption capabilities.",
                        evidence: [
                            "Storage infrastructure documentation",
                            "Encryption at rest configuration",
                            "Access control implementation",
                            "Backup and redundancy configuration",
                            "Storage capacity and performance reports"
                        ]
                    }
                ]
            }
        ]
    },
    outsourcing: {
        name: "Outsourcing & Vendor",
        icon: "🤝",
        subdomains: [
            {
                name: "Third-Party & Vendor Management",
                controls: [
                    {
                        id: "5.1.4.a",
                        title: "Approved Vendor Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies specific requirements for vendors using risk-based approach including governance, monitoring, nationality/residency, geographic restrictions, and connectivity requirements.",
                        evidence: [
                            "Vendor selection criteria document",
                            "Approved vendor list",
                            "Risk-based tiering framework",
                            "Vendor assessment questionnaires",
                            "Vendor approval records"
                        ]
                    },
                    {
                        id: "5.1.4.b",
                        title: "Supply-Chain Assessment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard assesses potential purchases and vendors for risk exposure at least annually for each vendor, product line, and contract evaluating unintended cybersecurity consequences.",
                        evidence: [
                            "Supply chain risk assessment methodology",
                            "Annual vendor risk assessment reports",
                            "Third-party audit reports (SOC 2, ISO)",
                            "Vendor security questionnaire responses",
                            "Risk treatment plans for vendors"
                        ]
                    },
                    {
                        id: "5.1.4.c",
                        title: "Vendor Non-Disclosure Agreement (NDA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures all vendors and contractors are legally bound by NDA precluding public acknowledgement or discussion about contracts, projects, or services.",
                        evidence: [
                            "Standard NDA template",
                            "Executed NDA documents",
                            "NDA tracking register",
                            "Legal review documentation",
                            "NDA enforcement procedures"
                        ]
                    },
                    {
                        id: "5.1.4.d",
                        title: "Vendor Compliance & Auditing Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures vendors comply with standards set forth in organizational policy incorporated into contractual process with right to audit.",
                        evidence: [
                            "Vendor compliance program charter",
                            "Right-to-audit clauses in contracts",
                            "Vendor audit schedule and reports",
                            "Compliance monitoring procedures",
                            "Vendor performance scorecards"
                        ]
                    },
                    {
                        id: "5.1.4.e",
                        title: "Security Vetting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures security vetting is conducted in risk-based manner with increasingly frequent vetting based on vendor's access requirements.",
                        evidence: [
                            "Vendor vetting procedures",
                            "Background check results",
                            "Security clearance documentation",
                            "Re-vetting schedule and records",
                            "Risk-based vetting criteria"
                        ]
                    },
                    {
                        id: "5.1.4.f",
                        title: "Onboarding/Offboarding",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process for onboarding and offboarding vendors and contractors accounting for relevant standards tied to asset issuing/recovery, account provisioning/deprovisioning, and physical access.",
                        evidence: [
                            "Vendor onboarding/offboarding procedures",
                            "Access provisioning requests and approvals",
                            "Asset issuance and return records",
                            "Account termination verification",
                            "Physical access badge logs"
                        ]
                    }
                ]
            },
            {
                name: "Cloud Security",
                controls: [
                    {
                        id: "5.2.4.a",
                        title: "Cloud Security Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines security requirements for cloud computing including approved CSPs, multi-tenancy, MFA, geolocation, connectivity, logging, backup, exit plans, and communication matrix.",
                        evidence: [
                            "Cloud security policy and standards",
                            "Approved cloud service provider list",
                            "Cloud architecture review procedures",
                            "Service Level Agreements (SLAs)",
                            "Exit strategy and data portability plans"
                        ]
                    },
                    {
                        id: "5.2.4.b",
                        title: "Approved Supply Chain",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard identifies list of approved CSPs for IaaS, PaaS, and SaaS in accordance with Third-Party and Vendor Management requirements.",
                        evidence: [
                            "Approved CSP list by service type",
                            "CSP security assessment reports",
                            "CSP certifications (ISO 27001, SOC 2)",
                            "CSP comparison and selection criteria",
                            "CSP onboarding documentation"
                        ]
                    },
                    {
                        id: "5.2.4.c",
                        title: "Geographic Boundary Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies what data must reside only within specific geography and which vendors offer such service varying based on data sensitivity and legal compliance.",
                        evidence: [
                            "Data residency requirements by classification",
                            "Geographic location of cloud data centers",
                            "Data localization compliance documentation",
                            "Cross-border data transfer assessments",
                            "Legal and regulatory compliance proof"
                        ]
                    },
                    {
                        id: "5.2.4.d",
                        title: "Hardening",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures cloud services are configured for least privilege, system hardening including disabled unused services, enhanced logging, and changed default passwords.",
                        evidence: [
                            "Cloud service hardening guidelines",
                            "CIS benchmark compliance reports",
                            "Cloud configuration baseline",
                            "Security group and firewall rules",
                            "Cloud security posture assessments"
                        ]
                    },
                    {
                        id: "5.2.4.e",
                        title: "Privilege Management",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process manages and logs activity for users with privileged accounts on IaaS, PaaS, or SaaS CSP services integrated into onboarding/offboarding processes.",
                        evidence: [
                            "Cloud IAM policy and procedures",
                            "Privileged account inventory in cloud",
                            "Cloud access reviews and certifications",
                            "Cloud activity logging and monitoring",
                            "Integration with central PAM solution"
                        ]
                    },
                    {
                        id: "5.2.4.f",
                        title: "Data Flow/Connectivity Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies specific connectivity and data flow requirements for off-premises and cloud-based systems accounting for dedicated private, semi-private, or public transmission.",
                        evidence: [
                            "Cloud connectivity architecture diagrams",
                            "VPN/Direct Connect configurations",
                            "Network segmentation documentation",
                            "Data flow diagrams",
                            "Encryption in transit verification"
                        ]
                    },
                    {
                        id: "5.2.5.a",
                        title: "Cloud Access Security Broker (CASB)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "An on-prem tool manages and enforces security requirements for cloud integrated into central console for analysis, correlation, and alerting.",
                        evidence: [
                            "CASB deployment documentation",
                            "Cloud service discovery reports",
                            "Shadow IT identification",
                            "DLP policies for cloud services",
                            "Cloud activity monitoring and alerts"
                        ]
                    },
                    {
                        id: "5.2.5.b",
                        title: "Cloud Security Posture Management (CSPM)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool continuously monitors and identifies risks from intentional or unintentional misconfigurations within cloud environment.",
                        evidence: [
                            "CSPM tool documentation",
                            "Misconfiguration detection reports",
                            "Automated remediation workflows",
                            "Compliance posture dashboards",
                            "Security findings and resolution tracking"
                        ]
                    },
                    {
                        id: "5.2.5.c",
                        title: "Verbose Logging",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A function provides detailed logging at infrastructure, platform, and application level providing granular visibility of all user and customer cloud activity.",
                        evidence: [
                            "Cloud logging configuration",
                            "CloudTrail/Activity logs enabled",
                            "Log forwarding to central SIEM",
                            "Log retention in cloud environment",
                            "Sample cloud activity logs"
                        ]
                    }
                ]
            }
        ]
    }
};
