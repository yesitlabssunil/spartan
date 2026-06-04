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
import email from "../assets/images/securityScreen/email.png";
import key from "../assets/images/securityScreen/key.png";
import pulse from "../assets/images/securityScreen/pulse.png";
import pc from "../assets/images/securityScreen/pc.png";
import shield from "../assets/images/securityScreen/shield.png";
import people from "../assets/images/securityScreen/people.png";
import warning from "../assets/images/securityScreen/warning.png";
import security from "../assets/images/complianceScreen/icon1.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";


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
                                <span>MICROSOFT 365 SECURITY</span> <span className="separator">|</span> <span>Home</span>
                            </div>
                            <h1 className="blog-hero-title">Hardened Microsoft 365 Security <br />for Federal Contractors.</h1>
                            <p className="blog-hero-subtitle">
                                NIST SP 800-171 and CMMC 2.0 aligned systems acceleration and tenant hardening architecture for defense suppliers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. TENANT IN SCOPE SECTION */}
                <section className="sec-light-section text-center">
                    <div className="custom-container">
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>GOV CLOUD & COMPLIANCE BOUNDARY
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3">Your Tenant is in scope. Your Assessor will look here first.</h2>
                        <p className="section-sub-heading mb-5">
                            Federal assessors inspect Microsoft 365 configurations directly. We harden the infrastructure profiles to secure a clear passing posture.
                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="Configuration Control" className="panel-icon" /></div>
                                    <h5>M365 Configuration Control</h5>
                                    <p>Restricting global admin overhead and configuring unified organizational retention rules.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={purse} alt="Boundary Isolation" className="panel-icon" /></div>
                                    <h5>CUI Boundary Isolation</h5>
                                    <p>Establishing clear data isolation barriers across shared commercial infrastructures or GCC environments.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card">
                                    <div className="panel-icon-box"><img src={email} alt="Shared Matrix" className="panel-icon" /></div>
                                    <h5>Shared Matrix Assertions</h5>
                                    <p>Mapping shared operational responsibilities accurately back into system security plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. ENTRA ID ASYMMETRIC GRID FEATURE */}
                <section className="sec-light-section1 border-top-gray">
                    <div className="custom-container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-5">
                                <div className="section-tag-wrapper justify-content-start">
                                    <span className="section-mini-tag">
                                        <span className="fallback-red-dot"></span>IDENTITY & ACCESS MANAGEMENT
                                    </span>
                                </div>
                                <h2 className="section-main-heading mt-3">Entra ID hardened to federal access standards.</h2>
                                <p className="sec-body-text mt-3">
                                    Identity controls form the frontline perimeter of modern networks. We structure access mechanisms to satisfy NIST multi-factor parameters and adaptive boundary protections seamlessly.
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={key} alt="MFA" className="panel-icon" /></div>
                                            <h6>Adaptive MFA</h6>
                                            <p>Enforcing context-aware hardware tokens across organizational elements.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={security} alt="Privileged" className="panel-icon" /></div>
                                            <h6>Privileged Access</h6>
                                            <p>Limiting root configurations using automated break-glass parameters.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={people} alt="Device Auth" className="panel-icon" /></div>
                                            <h6>Device Authentication</h6>
                                            <p>Ensuring only validated physical assets interact with data nodes.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={purse} alt="B2B Trust" className="panel-icon" /></div>
                                            <h6>B2B Trust Filters</h6>
                                            <p>Restricting cross-tenant access parameters to certified supply chain entities.</p>
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
                                <span className="fallback-red-dot"></span>THREAT PROTECTION
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3">Microsoft Defender deployed and tuned for CUI environments.</h2>
                        <p className="section-sub-heading mb-5">
                            Continuous optimization of security parameters ensuring zero blindspots across dynamic endpoints.
                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pc} alt="Device Compliance" className="panel-icon" /></div>
                                    <h5>Device Compliance</h5>
                                    <p>Blocking asset interaction vectors until security baseline health is verified.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={shield} alt="EDR Monitoring" className="panel-icon" /></div>
                                    <h5>EDR Active Monitoring</h5>
                                    <p>Continuous behavior telemetry monitoring to catch live threat vectors early.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pulse} alt="Risk Governance" className="panel-icon" /></div>
                                    <h5>Risk Governance</h5>
                                    <p>Automated software patch assessment matching strict federal vulnerability constraints.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. EXCHANGE ONLINE ASYMMETRIC GRID FEATURE */}
                <section className="sec-light-section1 border-top-gray">
                    <div className="custom-container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-5">
                                <div className="section-tag-wrapper justify-content-start">
                                    <span className="section-mini-tag">
                                        <span className="fallback-red-dot"></span>SECURE TELEMETRY FLOW
                                    </span>
                                </div>
                                <h2 className="section-main-heading mt-3">Exchange Online locked down for regulated communication.</h2>
                                <p className="sec-body-text mt-3">
                                    Email vectors represent high risk. We deploy robust tracking matrices and strict transport parameters to shield transmission streams completely.
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={email} alt="Anti Phishing" className="panel-icon" /></div>
                                            <h6>Advanced Anti-Phishing</h6>
                                            <p>Deploying predictive payload sandboxing models on incoming mail routes.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={purse} alt="DKIM DMARC" className="panel-icon" /></div>
                                            <h6>DKIM & DMARC</h6>
                                            <p>Establishing proper DNS signing blocks to combat spoofing threats.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={security} alt="Crypto Mail Paths" className="panel-icon" /></div>
                                            <h6>Crypto Mail Paths</h6>
                                            <p>Enforcing strong TLS parameters across critical peer-to-peer pipelines.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="security-panel-card micro-feature">
                                            <div className="micro-box"><img src={warning} alt="Data Outflow" className="panel-icon" /></div>
                                            <h6>Data Outflow Filters</h6>
                                            <p>Blocking the exfiltration of programmatic assets outside validated networks.</p>
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
                        <h2 className="dark-section-title text-center">Purview DLP and sensitivity labels protecting CUI everywhere.</h2>
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
                            <h2 className="dark-section-title text-center">Continuous visibility across the Microsoft 365 Security estate.</h2>
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
                        <div className="section-tag-wrapper1">
                            <span className="section-mini-tag">
                                <span className="fallback-red-dot"></span>AZURE SECURITY
                            </span>
                        </div>
                        <h2 className="section-main-heading mb-3">Azure Workloads Hardened for Sovereign, <br />Regulated Environments.</h2>
                        {/* <p className="section-sub-heading mb-5">
                            Extending security protections to application infrastructures, databases, and microservice arrays across federal spaces.
                        </p> */}

                        <p className="sec-body-text mt-3 mb-5">
                        Spartan extends the same federal-grade discipline into Azure - Azure Government and Azure Commercial — covering identity, network, workload and data-plane security. Every control is mapped to NIST 800-171, FedRAMP Moderate/High baselines and CMMC 2.0 evidence requirements.
                        </p>

                        <div className="row g-4">
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="Sovereign Landings" className="panel-icon" /></div>
                                    <h5>Sovereign Landings</h5>
                                    <p>Deploying infrastructure baselines that conform strictly with federal data handling requirements.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={security} alt="Zero Trust" className="panel-icon" /></div>
                                    <h5>Zero Trust Network Layers</h5>
                                    <p>Segmenting internal microservice pools via policy-driven network boundaries.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={key} alt="Key Vault Isolation" className="panel-icon" /></div>
                                    <h5>Key Vault Isolation</h5>
                                    <p>Securing enterprise secrets and certificates within cryptographic storage modules.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={purse} alt="Vulnerability Scans" className="panel-icon" /></div>
                                    <h5>Vulnerability Scans</h5>
                                    <p>Automated discovery pipelines identifying flaws inside active software code structures.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={envIcon3} alt="Telemetry" className="panel-icon" /></div>
                                    <h5>Integrated Telemetry</h5>
                                    <p>Centralizing cloud log infrastructure with system monitoring centers.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="security-panel-card1">
                                    <div className="panel-icon-box"><img src={pulse} alt="Backup Resiliency" className="panel-icon" /></div>
                                    <h5>Backup Resiliency</h5>
                                    <p>Configuring isolated, encrypted fallback images to withstand ransomware events.</p>
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
                                <span className="fallback-red-dot"></span>INCIDENT MANAGEMENT
                            </span>
                        </div>
                        <h2 className="section-main-heading text-center mb-3">Prepared, rehearsed & DoD-reportable.</h2>
                        <p className="section-sub-heading text-center mb-5">
                            Meeting strict federal incident response windows with validated containment and tracking pipelines.
                        </p>

                        <div className="row g-4 text-start">
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={cloudIcon} alt="72-Hour Timelines" className="panel-icon" /></div>
                                    <h5>72-Hour Timelines</h5>
                                    <p>Pre-configured frameworks ensure security incidents are detected and documented inside strict federal notification windows.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={purse} alt="Forensic Integrity" className="panel-icon" /></div>
                                    <h5>Forensic Integrity</h5>
                                    <p>Securing immutable system activity telemetry snapshots to preserve chain-of-custody requirements during audits.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="security-panel-card white-bg-card">
                                    <div className="panel-icon-box"><img src={email} alt="Response Readiness" className="panel-icon" /></div>
                                    <h5>Response Readiness</h5>
                                    <p>Regular operational simulations ensure technical response units operate efficiently under actual threat scenarios.</p>
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
                                <button className="cta-btn-white">Schedule M365 Security Audit <span>→</span></button>
                                <button className="cta-btn-outline">System Standards</button>
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