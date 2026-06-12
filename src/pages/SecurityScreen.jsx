import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/securityScreen.css";

// ==========================================================================
// ALL EXPORTED FIGMA IMAGE PATHS (MATCHING THE GRAPHICS DIRECTLY)
// ==========================================================================

// Global / Common Elements
import checkBulletRed from "../assets/images/approachScreen/startBullet.png";

// Section 2: Tenant In Scope Icons
import cloudIcon from "../assets/images/securityScreen/cloud-icon.png";
import purse from "../assets/images/securityScreen/purse.png";
import purse1 from "../assets/images/securityScreen/purse1.png";
import mail from "../assets/images/securityScreen/mail.png";
import email from "../assets/images/securityScreen/email.png";
import key from "../assets/images/securityScreen/key.png";
import key1 from "../assets/images/securityScreen/key1.png";
import security1 from "../assets/images/securityScreen/security1.png";
import pulse from "../assets/images/securityScreen/pulse.png";
import pc from "../assets/images/securityScreen/pc.png";
import shield from "../assets/images/securityScreen/shield.png";
import people from "../assets/images/securityScreen/people.png";
import warning from "../assets/images/securityScreen/warning.png";
import security from "../assets/images/complianceScreen/icon1.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";
import { Link } from "react-router-dom";


const SecurityScreen = () => {
    return (
        <>
            <Header />
            <main className="security-main">

                {/* 1. HERO SECTION */}
                <div className="blog-hero-fullwidth">
                    <div className="custom-container">
                        <div className="blog-hero-content">
                            <div className="blog-breadcrumb">
                                <span>MICROSOFT 365 SECURITY</span> <span className="separator">|</span> <span style={{color: "white"}}>Home</span>
                            </div>
                            <h1 className="blog-hero-title">Hardened Microsoft 365 Security <br />for Federal Contractors.</h1>
                            <p className="blog-hero-subtitle">
                                GCC High migration, CUI enclaves and audit-ready Microsoft 365 hardening - engineered to meet CMMC 2.0, NIST 800-171 and DFARS 7012.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. TENANT IN SCOPE SECTION */}
                <section className="sec-light-section text-center">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>WHY MICROSOFT 365 SECURITY MATTERS
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3">Your Tenant is in scope. Your Assessor will look here first.</h2>
                        <p className="section-sub-heading2 mb-5" >
                            Email, SharePoint, OneDrive, Teams - all touch CUI. Without proper data residency and configuration, the entire CMMC scope expands. Spartan delivers a hardened, audit-ready Microsoft 365 Security environment engineered for the regulated workloads of federal contractors.
                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="Configuration Control" className="panel-icon" /></div>
                                    <h5>GCC High Migration</h5>
                                    <p>Move regulated workloads into a sovereign US tenant with proper data residency.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={purse1} alt="Boundary Isolation" className="panel-icon" /></div>
                                    <h5>CUI Enclave Design</h5>
                                    <p>Reduce assessment scope with a purpose-built enclave for controlled data.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={email} alt="Shared Matrix" className="panel-icon" /></div>
                                    <h5>Email & Collaboration</h5>
                                    <p>DLP, encryption, conditional access, and retention aligned to federal rules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. ENTRA ID ASYMMETRIC GRID FEATURE */}
                <section className="sec-light-section1 border-top-gray">
                    <div className="custom-container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 content-column" >
                                <div className="section-tag-wrapper justify-content-start">
                                    <span className="section-mini-tag">
                                        <span className="fallback-red-dot"></span>IDENTITY & ACCESS MANAGEMENT
                                    </span>
                                </div>
                                <h2 className="section-main-heading1 mt-3">Entra ID hardened to federal access standards.</h2>
                                <p className="sec-body-text mt-3">
                                    Privileged access, conditional access, and role-
                                    based controls tied directly to NIST 800-171
                                    access-control families. Every identity is
                                    mapped, monitored, and enforced.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={key1} alt="MFA" className="panel-icon" /></div>
                                            <h6>Privileged Access</h6>
                                            <p>PIM, just-in-time elevation
                                            and admin tier separation.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={security1} alt="Privileged" className="panel-icon" /></div>
                                            <h6>Conditional Access</h6>
                                            <p>Device, location and risk-based policy enforcement.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={people} alt="Device Auth" className="panel-icon" /></div>
                                            <h6>Role-Based Access</h6>
                                            <p>Least-privilege RBAC mapped to CMMC AC controls.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={purse1} alt="B2B Trust" className="panel-icon" /></div>
                                            <h6>MFA & FIDO2</h6>
                                            <p>Phishing-resistant authentication for all users.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. DEFENDER TUNED GRID */}
                <section className="sec-light-section text-center border-top-gray">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>MICROSOFT DEFENDER
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3 block-size">Microsoft Defender deployed and tuned <br /> for CUI environments.</h2>
                        <p className="section-sub-heading mb-5">
                        Defender for Endpoint, Defender for Cloud Apps, and Intune work together to enforce
                        device compliance, isolate threats, and produce assessor-ready evidence.
                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pc} alt="Device Compliance" className="panel-icon" /></div>
                                    <h5>Device Compliance</h5>
                                    <p>Intune baselines aligned to CIS and DoD STIG
                                    references.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={shield} alt="EDR Monitoring" className="panel-icon" /></div>
                                    <h5>EDR & Threat Hunting</h5>
                                    <p>Defender for Endpoint with custom detections
                                    and response runbooks.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pulse} alt="Risk Governance" className="panel-icon" /></div>
                                    <h5>App Governance</h5>
                                    <p>
                                    Defender for Cloud Apps controlling shadow IT
                                    and OAuth risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. EXCHANGE ONLINE ASYMMETRIC GRID FEATURE */}
                <section className="sec-light-section1 border-top-gray">
                    <div className="custom-container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 content-column" >
                                <div className="section-tag-wrapper justify-content-start">
                                    <span className="section-mini-tag">
                                        <span className="fallback-red-dot"></span>EMAIL SECURTIY
                                    </span>
                                </div>
                                <h2 className="section-main-heading mt-3">Exchange Online locked down for regulated communication.</h2>
                                <p className="sec-body-text mt-3">
                                Email is the most-targeted channel in the DIB. Spartan deploys layered defenses - authentication, content inspection and impersonation protection - that hold up under assessor scrutiny.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={mail} alt="Anti Phishing" className="panel-icon" /></div>
                                            <h6>Defender for Office 365</h6>
                                            <p>
                                            Anti-phishing, Safe Links and Safe Attachments tuned to your tenant.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={purse1} alt="DKIM DMARC" className="panel-icon" /></div>
                                            <h6>Encryption</h6>
                                            <p>Message encryption and S/MIME for sensitive communications.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={security1} alt="Crypto Mail Paths" className="panel-icon" /></div>
                                            <h6>DMARC / SPF / DKIM</h6>
                                            <p>Domain authentication enforced and monitored.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={warning} alt="Data Outflow" className="panel-icon" /></div>
                                            <h6>Impersonation Defense</h6>
                                            <p>
                                            Executive and brand impersonation policies hardened.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. PURVIEW DLP (PREMIUM DARK SECTION) */}
                {/* <section className="sec-dark-section">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag dark-theme-tag">
                                <span className="fallback-red-dot"></span>DATA PROTECTION
                            </span>
                        </div>
                        <h2 className="dark-section-title text-center">Purview DLP and sensitivity labels protecting CUI everywhere.</h2>
                        <p className="dark-section-subtitle text-center mb-5">
                            Track, tag, and lock sensitive data artifacts continuously regardless of storage environments.
                        </p>

                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={envIcon3} alt="Sensitivity Labels" className="panel-icon" /></div>
                                    <h5>Sensitivity Labels</h5>
                                    <p>Automated classification injection tracking documents across filesystems.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Automatic encryption filters</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Visual marking enforcement</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={security} alt="DLP Profiles" className="panel-icon" /></div>
                                    <h5>DLP Profiles</h5>
                                    <p>Mitigating exfiltration actions across endpoints and shared workspaces.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Blocking unsanctioned external sharing</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Strict file export filtering</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={purse} alt="In-depth Audits" className="panel-icon" /></div>
                                    <h5>In-depth Audits</h5>
                                    <p>Comprehensive tracking of interaction paths for forensic compliance reviews.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Complete tracking matrix</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Retain activity indexing records</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* 7. CONTINUOUS VISIBILITY (DARK LIST WITH ICONS) */}
                {/* <section className="sec-dark-section black-bg-accent border-top-dark">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag dark-theme-tag">
                                <span className="fallback-red-dot"></span>MONITORING POSTURE
                            </span>
                        </div>
                        <h2 className="dark-section-title text-center">Continuous visibility across the Microsoft 365 Security estate.</h2>
                        <p className="dark-section-subtitle text-center mb-5">
                            Our automated architecture ensures continuous compliance health tracking to eliminate drift.
                        </p>

                        <div className="row g-4 row-cols-md-2 row-cols-1 max-width-800 mx-auto">
                            <div className="col">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper"><img src={iconTracking} alt="Tracking" /></div>
                                    <div>
                                        <h6>Unified Tracking</h6>
                                        <p>Aggregating tenant infrastructure health data into a centralized overview profile.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper"><img src={iconAlerts} alt="Alerts" /></div>
                                    <div>
                                        <h6>Anomaly Alerts</h6>
                                        <p>Instant containment workflows trigger the moment anomalous access attempts occur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper"><img src={iconDrift} alt="Drift" /></div>
                                    <div>
                                        <h6>Drift Controls</h6>
                                        <p>Automated policy resets correct drift deviations when settings are changed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper"><img src={iconReadiness} alt="Readiness" /></div>
                                    <div>
                                        <h6>Audit Readiness</h6>
                                        <p>Continuous evidence aggregation ensures systems remain prepared for immediate inspection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* 6. PURVIEW DLP & SENSITIVITY LABELS */}
                <section className="sec-dark-section separation-top-glow">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag dark-theme-tag">
                                <span className="fallback-red-dot"></span>DATA PROTECTION (DLP)
                            </span>
                        </div>
                        <h2 className="dark-section-title text-center">Purview DLP and sensitivity labels protecting CUI<br/> everywhere.</h2>
                        <p className="dark-section-subtitle text-center mb-5">
                            Classify, label, and protect controlled data across Exchange, SharePoint, OneDrive, Teams, and endpoints. Built to satisfy DFARS 7012 marking and handling requirements.
                        </p>

                        <div className="row g-4 mb-5 pb-4">
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={envIcon3} alt="Sensitivity Labels" className="panel-icon" /></div>
                                    <h5>Sensitivity Labels</h5>
                                    <p>Automatic and manual labeling tied to CUI categories.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Mapped to NIST 800-171</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Documented in your SSP</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={security} alt="DLP Policies" className="panel-icon" /></div>
                                    <h5>DLP Policies</h5>
                                    <p>Block, warn and audit policies across all M365 workloads.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Mapped to NIST 800-171</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Documented in your SSP</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dark-panel-card">
                                    <div className="panel-icon-box dark-box"><img src={purse} alt="Information Barriers" className="panel-icon" /></div>
                                    <h5>Information Barriers</h5>
                                    <p>Segmentation between programs, contracts and customer data.</p>
                                    <ul className="dark-card-list">
                                        <li><img src={checkBulletRed} alt="bullet" /> Mapped to NIST 800-171</li>
                                        <li><img src={checkBulletRed} alt="bullet" /> Documented in your SSP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 7. CONTINUOUS VISIBILITY (INTEGRATED SUB-SECTION WIHOUT BREAKING THE BACKGROUND) */}
                        <div className="pt-5">
                            <div className="section-tag-wrapper">
                                <span className="section-mini-tag dark-theme-tag">
                                    <span className="fallback-red-dot"></span>LOGGING & MONITORING
                                </span>
                            </div>
                            <h2 className="dark-section-title text-center">Continuous visibility across the Microsoft 365 <br /> Security estate.</h2>
                            <p className="dark-section-subtitle text-center mb-5">
                                Unified audit logs, Sentinel integration and retention aligned to federal requirements - so you can prove what happened, when and to which data.
                            </p>

                            {/* Figma Layout: 2x2 Clean Row with Bottom-Border Line Dividers */}
                            <div className="row g-0 figma-monitoring-grid">
                                <div className="col-md-6 grid-item border-bottom">
                                    <div className="dark-list-item-with-icon">
                                        <div className="dark-list-icon-wrapper"><img src={pulse} alt="Unified Audit Log" /></div>
                                        <div>
                                            <h6>Unified Audit Log</h6>
                                            <p>Tenant-wide audit enabled, exported and retained per policy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 grid-item border-bottom">
                                    <div className="dark-list-item-with-icon">
                                        <div className="dark-list-icon-wrapper"><img src={pulse} alt="Microsoft Sentinel" /></div>
                                        <div>
                                            <h6>Microsoft Sentinel</h6>
                                            <p>SIEM integration with custom analytics and workbooks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 grid-item">
                                    <div className="dark-list-item-with-icon">
                                        <div className="dark-list-icon-wrapper"><img src={pulse} alt="Defender XDR" /></div>
                                        <div>
                                            <h6>Defender XDR</h6>
                                            <p>Cross-product correlation across identity, endpoint and email.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 grid-item">
                                    <div className="dark-list-item-with-icon">
                                        <div className="dark-list-icon-wrapper"><img src={pulse} alt="Long-Term Retention" /></div>
                                        <div>
                                            <h6>Long-Term Retention</h6>
                                            <p>Log retention windows aligned to DFARS and contract terms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. AZURE WORKLOADS HARDENED SECTION */}
                <section className="sec-light-section">
                    <div className="custom-container">
                        <div className="section-tag-wrapper1 mb-3">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>AZURE SECURITY
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3">Azure Workloads Hardened for Sovereign, <br />Regulated Environments.</h2>
                        {/* <p className="section-sub-heading mb-5">
                            Extending security protections to application infrastructures, databases, and microservice arrays across federal spaces.
                        </p> */}

                        <p className="sec-body-text2 mt-3 mb-5">
                            Spartan extends the same federal-grade discipline into Azure - Azure Government and Azure Commercial — covering identity, network, workload and data-plane security. Every control is mapped to NIST 800-171, FedRAMP Moderate/High baselines and CMMC 2.0 evidence requirements.
                        </p>

                        <div className="row g-4">
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="Sovereign Landings" className="panel-icon" /></div>
                                    <h5>Azure Government Landing Zones
                                    </h5>
                                    <p>Sovereign-cloud landing zones architected to FedRAMP High and DoD IL4/IL5 reference patterns.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={security} alt="Zero Trust" className="panel-icon" /></div>
                                    <h5>Defender for Cloud
                                    </h5>
                                    <p>CSPM and CWPP across subscriptions with regulatory compliance dashboards for NIST 800-171 and CMMC.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={key} alt="Key Vault Isolation" className="panel-icon" /></div>
                                    <h5>Key Vault & HSM
                                    </h5>
                                    <p>Customer-managed keys, Managed HSM and BYOK for CUI encryption at rest and in transit.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={purse} alt="Vulnerability Scans" className="panel-icon" /></div>
                                    <h5>Network Isolation
                                    </h5>
                                    <p>Hub-and-spoke topology, Private Endpoints, Azure Firewall and NSG baselines enforcing zero-trust segmentation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={envIcon3} alt="Telemetry" className="panel-icon" /></div>
                                    <h5>Storage & Database Hardening</h5>
                                    <p>
                                    Encryption, private access, immutable storage and SQL/Cosmos auditing aligned to DFARS 7012.

                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pulse} alt="Backup Resiliency" className="panel-icon" /></div>
                                    <h5>Sentinel & Monitor</h5>
                                    <p>
                                    Centralized SIEM, Azure Monitor, Log Analytics and diagnostic settings producing assessor-ready evidence.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. DOD REPORTABLE CARD SECTION */}
                <section className="sec-light-section bg-light-gray-panel border-top-gray">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>INCIDENT RESPONSE
                            </span>
                        </div>
                        <h2 className="section-main-heading text-center mb-3">Prepared, rehearsed & DoD-reportable.</h2>
                        <p className="section-sub-heading text-center mb-5 section-sub-heading1">
                        When an incident occurs, Spartan provides the playbooks, the technical response and the regulatory reporting required under DFARS 252.204-7012 — including 72-hour DoD Cyber Crime Center notification.


                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="72-Hour Timelines" className="panel-icon" /></div>
                                    <h5>IR Playbooks</h5>
                                    <p>
                                    Tenant-specific runbooks for the most common attack patterns.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={purse} alt="Forensic Integrity" className="panel-icon" /></div>
                                    <h5>24/7 Response
                                    </h5>
                                    <p>
                                    Senior responders engaged from triage through containment.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={email} alt="Response Readiness" className="panel-icon" /></div>
                                    <h5>DoD Reporting
                                    </h5>
                                    <p>
                                    DIBNet submission, evidence packaging and post-incident review.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. BOTTOM BANNER METRIC */}
                <section className="security-cta-section2">
                    <div className="custom-container">
                        <div className="security-cta-banner">
                            <span className="section-mini-tag dark-theme-tag mb-3">
                                <span className="fallback-red-dot"></span>GET STARTED
                            </span>
                            <h2 className="cta-banner-title">
                                Audit your Microsoft 365 security <br /> tenant in 2 weeks.
                            </h2>
                            <p className="cta-banner-desc">
                                A focused tenant review with a senior architect - gap report and remediation plan delivered.                            </p>
                            <div className="cta-buttons-group">
                                <Link to="/contact-us" className="cta-btn-white" style={{ textDecoration: "none" }}>Schedule M365 Security Review <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span></Link>
                                <Link to="/compliance" className="cta-btn-outline" style={{ textDecoration: "none" }}>Explore Compliance</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default SecurityScreen;