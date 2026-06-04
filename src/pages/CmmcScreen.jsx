import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/cmmcScreen.css";

// ==========================================================================
// ALL EXPORTED FIGMA IMAGE PATHS (MATCHING THE GRAPHICS DIRECTLY)
// ==========================================================================

// Global / Common Elements
import checkBulletRed from "../assets/images/approachScreen/startBullet.png";

// Section 3: Three Certification Levels Icons (Placeholders for upcoming steps)
import spartanLogo from "../assets/images/logo.png"; // Update to your real logo path
import iconPulseRed from "../assets/images/securityScreen/pulse.png"; // Replace with your actual red pulse graphic path
import envIcon1 from "../assets/images/industryScreen/env-icon1.png";
import envIcon2 from "../assets/images/industryScreen/env-icon2.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";
import envIcon4 from "../assets/images/industryScreen/env-icon4.png";
import security from "../assets/images/complianceScreen/icon1.png";
import box from "../assets/images/cmmcScreen/box.png";
import cap from "../assets/images/cmmcScreen/cap.png";
import file from "../assets/images/cmmcScreen/file.png";
import hammer from "../assets/images/cmmcScreen/hammer.png";

const CmmcScreen = () => {
    const [activeCard, setActiveCard] = useState(1);
    const [activeStep, setActiveStep] = useState(0);
    return (
        <>
            <Header />
            <main className="security-main">

                {/* 1. HERO SECTION (Dark Mode - Exact Typography Metrics) */}
                <div className="blog-hero-fullwidth standard-hero-gradient">
                    <div className="custom-container">
                        <div className="blog-hero-content text-start">
                            <div className="blog-breadcrumb">
                                <span className="red-bullet-indicator"></span>
                                <span>CMMC 2.0</span> <span className="separator">|</span> <span>HOME</span>
                            </div>
                            <h1 className="blog-hero-title custom-hero-lh">
                                CMMC 2.0 Executive Readiness<br />Without Noise
                            </h1>
                            <p className="blog-hero-subtitle max-w-780">
                                Principal-led advisory support for defense contractors preparing for CMMC 2.0 certification and NIST SP 800-171 compliance under Department of Defense enforcement requirements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. OVERVIEW BLOCK (Light Mode - Exact Text Alignment & Left Border Callout) */}
                <section className="sec-light-section text-start padding-y-90">
                    <div className="custom-container">
                        <div className="section-tag-wrapper justify-content-start">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>OVERVIEW
                            </span>
                        </div>

                        <h2 className="section-main-heading mb-4 text-dark font-weight-700 font-size-38">
                            A Contractual Obligation Tied Directly to Eligibility.
                        </h2>

                        <div className="row">
                            <div className="col-lg-12">
                                <p className="sec-body-text text-secondary mb-4 font-size-16 line-height-1-8">
                                    CMMC 2.0 is a contractual obligation tied directly to eligibility, Supplier Performance Risk System (SPRS) scoring and formal assessment by a Certified Third-Party Assessor Organization (C3PAO). Organizations handling Controlled Unclassified Information (CUI) must demonstrate implemented controls, structured System Security Plans (SSP) and operational discipline aligned to NIST SP 800-171.
                                </p>
                                <p className="sec-body-text text-secondary mb-5 font-size-16 line-height-1-8">
                                    While our current operational focus centers on CMMC 2.0 readiness within the Defense Industrial Base, Spartan's governance practice also supports ISO/IEC 27001 information security management systems and ISO/IEC 42001 artificial intelligence governance frameworks for regulated environments.
                                </p>

                                {/* Figma Callout Quote Component */}
                                <div className="cmmc-callout-quote-box mt-4">
                                    <p className="cmmc-quote-text">
                                        We build defensible cybersecurity governance structures aligned to<br/> contractual and international standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CERTIFICATION LEVELS SECTION (Light Mode Framework Grid) */}
                <section className="cmmc-levels-section text-center">
                    <div className="custom-container">

                        {/* Header Content Group ... */}
                        <div className="section-tag-wrapper justify-content-center mb-3">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>LEVEL 2 REQUIREMENTS
                            </span>
                        </div>
                        <h2 className="section-main-heading text-dark font-weight-700 mb-3 max-w-900 mx-auto">
                            Three Certification Levels – Level 2 is where most DIB awards land.
                        </h2>
                        <p className="section-subtitle-text text-secondary mb-5 max-w-780 mx-auto">
                            Every DoD contract maps to a CMMC level based on the type of information it touches.<br />
                            Level 2 covers the full 110 NIST SP 800-171 controls for CUI.
                        </p>

                        {/* Dynamic Card Component Grid Tier */}
                        <div className="row g-4 justify-content-center mb-5">

                            {/* Level 1 Card */}
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className={`cmmc-level-card text-start ${activeCard === 0 ? 'active-focus-card' : ''}`}
                                    onMouseEnter={() => setActiveCard(0)}
                                >
                                    <div className="card-icon-wrapper mb-4">
                                        <img src={security} alt="Level 1 Shield" className="card-graphic-asset" />
                                    </div>
                                    <span className="card-level-label label-red">LEVEL 1</span>
                                    <h3 className="card-level-title">Foundational</h3>
                                    <p className="card-level-desc">
                                        17 basic safeguarding practices for FCI. Annual self-assessment.
                                    </p>
                                </div>
                            </div>

                            {/* Level 2 Card */}
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className={`cmmc-level-card text-start ${activeCard === 1 ? 'active-focus-card' : ''}`}
                                    onMouseEnter={() => setActiveCard(1)}
                                >
                                    <div className="card-icon-wrapper mb-4">
                                        <img src={file} alt="Level 2 Document" className="card-graphic-asset" />
                                    </div>
                                    <span className="card-level-label label-red">LEVEL 2</span>
                                    <h3 className="card-level-title">Advanced (Focus)</h3>
                                    <p className="card-level-desc">
                                        110 NIST SP 800-171 controls for CUI. Triennial C3PAO assessment.
                                    </p>
                                </div>
                            </div>

                            {/* Level 3 Card */}
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className={`cmmc-level-card text-start ${activeCard === 2 ? 'active-focus-card' : ''}`}
                                    onMouseEnter={() => setActiveCard(2)}
                                >
                                    <div className="card-icon-wrapper mb-4">
                                        <img src={cap} alt="Level 3 Layers" className="card-graphic-asset" />
                                    </div>
                                    <span className="card-level-label label-red">LEVEL 3</span>
                                    <h3 className="card-level-title">Expert</h3>
                                    <p className="card-level-desc">
                                        NIST SP 800-172 enhanced protections. DIBCAC-led government assessment.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* ... The rest of your 14 Domain Framework code stays exactly the same ... */}

{/* 14 Domain Requirement Grid Tier (Figma Specification) */}
<div className="row g-3 text-start mt-4">
                            
                            {/* Left Column Framework Requirements */}
                            <div className="col-md-6">
                                <div className="d-flex flex-column gap-3">
                                    
                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Access Control (AC) - identity, MFA, least privilege across 22 controls</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Configuration Management (CM) - baselines, change control, hardening</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Incident Response (IR) - detection, reporting and post-incident review</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Personnel Security (PS) - screening and access termination</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Risk Assessment (RA) - vulnerability scanning and risk tracking</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>System & Communications Protection (SC) - encryption, boundary controls</span>
                                    </div>

                                </div>
                            </div>

                            {/* Right Column Framework Requirements */}
                            <div className="col-md-6">
                                <div className="d-flex flex-column gap-3">

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Audit & Accountability (AU) - log capture, retention, and review</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Identification & Authentication (IA) - credential lifecycle and MFA</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Media Protection (MP) - sanitization and CUI handling discipline</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Physical Protection (PE) - facility and media controls</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>Security Assessment (CA) - SSP, POA&M and control assessment</span>
                                    </div>

                                    <div className="cmmc-gap-pill">
                                        <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                        <span>System & Information Integrity (SI) - flaw remediation and monitoring</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. ENFORCEMENT FRAMEWORK SECTION (Deep Dark Panel Group) */}
                <section className="cmmc-enforcement-section text-center">
                    <div className="custom-container">

                        {/* Dark Mode Mini Tag Pill */}
                        <div className="section-tag-wrapper justify-content-center mb-3">
                            <span className="section-mini-tag dark-red-pill-framework">
                                <span className="fallback-red-dot"></span>ENFORCEMENT FRAMEWORK
                            </span>
                        </div>

                        {/* Primary Deadline Header */}
                        <h2 className="section-main-heading text-white font-weight-700 mb-3 font-size-42">
                            Beginning November 10, 2025.
                        </h2>

                        {/* Regulatory Clauses Subhead */}
                        <p className="section-subtitle-text text-muted-gray mb-5 max-w-780 mx-auto font-size-15 line-height-1-7">
                            The Department of Defense enforces CMMC 2.0 requirements through DFARS 252.204-7021 and DFARS 252.204-7025 contract clauses.
                        </p>

                        {/* Dark Low-Contrast Card Row */}
                        <div className="row g-4 justify-content-center mb-5 text-start">

                            {/* Box 1: Structured SSP */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-dark-panel-card">
                                    <div className="dark-card-icon-wrapper mb-4">
                                        <img src={hammer} alt="Gavel/Contract Icon" className="dark-card-graphic-asset" />
                                    </div>
                                    <h4 className="dark-card-title">Structured SSP</h4>
                                    <p className="dark-card-desc">
                                        Alignment with NIST SP 800-171 security requirements through documented System Security Plans.
                                    </p>
                                </div>
                            </div>

                            {/* Box 2: Accurate SPRS Scoring */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-dark-panel-card">
                                    <div className="dark-card-icon-wrapper mb-4">
                                        <img src={box} alt="Clipboard Score Icon" className="dark-card-graphic-asset" />
                                    </div>
                                    <h4 className="dark-card-title">Accurate SPRS Scoring</h4>
                                    <p className="dark-card-desc">
                                        Supplier Performance Risk System scoring that matches operational reality and assessor expectations.
                                    </p>
                                </div>
                            </div>

                            {/* Box 3: C3PAO Assessment */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-dark-panel-card">
                                    <div className="dark-card-icon-wrapper mb-4">
                                        <img src={security} alt="Shield Evaluation Icon" className="dark-card-graphic-asset" />
                                    </div>
                                    <h4 className="dark-card-title">C3PAO Assessment</h4>
                                    <p className="dark-card-desc">
                                        Readiness for formal evaluation by a Certified Third-Party Assessor Organization.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Shift Definition Subhead */}
                        <p className="section-subtitle-text text-muted-gray max-w-900 mx-auto font-size-15 mb-5 mt-2 opacity-85">
                            This enforcement model shifts cybersecurity from self-attested documentation to independently evaluated operational capability.
                        </p>

                        {/* Bottom Dark-Boundary Callout Banner */}
                        <div className="row text-start mt-5 pt-2">
                            <div className="col-12">
                                <div className="cmmc-dark-warning-callout ps-4">
                                    <p className="dark-warning-text">
                                        CMMC 2.0 is not an advisory framework. It is a contractual condition of participation within the Defense Industrial Base.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 5. IMPLEMENTATION PROCESS SECTION (Light Mode Timeline Grid) */}
                <section className="cmmc-process-section text-center padding-y-90">
                    <div className="custom-container">

                        <div className="section-tag-wrapper justify-content-center mb-3">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>IMPLEMENTATION PROCESS
                            </span>
                        </div>

                        <h2 className="section-main-heading text-dark font-weight-700 mb-3 max-w-900 mx-auto font-size-38">
                            From Scoping through C3PAO Handoff in<br />8 to 12 weeks.
                        </h2>

                        <p className="section-subtitle-text text-secondary mb-5 max-w-780 mx-auto font-size-16">
                            A four-stage program with weekly executive checkpoints - documentation, control implementation and evidence preparation aligned to assessor evaluation standards.
                        </p>

                        {/* Four-Column Process Cards */}
                        <div className="row g-4 justify-content-center text-start">

                            {/* Stage 01 */}
                            <div className="col-xl-3 col-md-6">
                                <div
                                    className={`cmmc-process-card ${activeStep === 0 ? 'active-process-focus' : ''}`}
                                    onMouseEnter={() => setActiveStep(0)}
                                >
                                    <div className="process-meta mb-4">
                                        <span className="process-number">01</span>
                                        <span className="process-label">Week</span>
                                    </div>
                                    <h4 className="process-card-title">Scoping & Gap Analysis</h4>
                                    <p className="process-card-desc">
                                        CUI boundary, contract risk profile, baseline scoring.
                                    </p>
                                </div>
                            </div>

                            {/* Stage 02 */}
                            <div className="col-xl-3 col-md-6">
                                <div
                                    className={`cmmc-process-card ${activeStep === 1 ? 'active-process-focus' : ''}`}
                                    onMouseEnter={() => setActiveStep(1)}
                                >
                                    <div className="process-meta mb-4">
                                        <span className="process-number">02</span>
                                        <span className="process-label">Week</span>
                                    </div>
                                    <h4 className="process-card-title">Architecture & Plan</h4>
                                    <p className="process-card-desc">
                                        SSP, POA&M and remediation roadmap signed off.
                                    </p>
                                </div>
                            </div>

                            {/* Stage 03 */}
                            <div className="col-xl-3 col-md-6">
                                <div
                                    className={`cmmc-process-card ${activeStep === 2 ? 'active-process-focus' : ''}`}
                                    onMouseEnter={() => setActiveStep(2)}
                                >
                                    <div className="process-meta mb-4">
                                        <span className="process-number">03</span>
                                        <span className="process-label">Week</span>
                                    </div>
                                    <h4 className="process-card-title">Implementation</h4>
                                    <p className="process-card-desc">
                                        Controls deployed, evidence captured, operations stood up.
                                    </p>
                                </div>
                            </div>

                            {/* Stage 04 */}
                            <div className="col-xl-3 col-md-6">
                                <div
                                    className={`cmmc-process-card ${activeStep === 3 ? 'active-process-focus' : ''}`}
                                    onMouseEnter={() => setActiveStep(3)}
                                >
                                    <div className="process-meta mb-4">
                                        <span className="process-number">04</span>
                                        <span className="process-label">Week</span>
                                    </div>
                                    <h4 className="process-card-title">Audit Readiness</h4>
                                    <p className="process-card-desc">
                                        Mock assessment, evidence package, executive sign-off.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* 6. AUDIT READINESS & EVIDENCE SECTION (Off-White Dynamic Cards) */}
                <section className="cmmc-evidence-section text-center padding-y-90">
                    <div className="custom-container">

                        <div className="section-tag-wrapper justify-content-center mb-3">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>AUDIT READINESS & EVIDENCE
                            </span>
                        </div>

                        <h2 className="section-main-heading text-dark font-weight-700 mb-3 max-w-900 mx-auto font-size-38">
                            Defensible Posture, Assessor-grade Evidence.
                        </h2>

                        <p className="section-subtitle-text text-secondary mb-5 max-w-780 mx-auto font-size-16">
                            A standing evidence package ready for C3PAO sampling - not a last-minute scramble.
                        </p>

                        {/* Three Card Grid */}
                        <div className="row g-4 justify-content-center text-start mb-5">

                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-evidence-card">
                                    <div className="evidence-icon-box mb-4">
                                        <img src={envIcon1} alt="Evidence Library" className="evidence-card-graphic" />
                                    </div>
                                    <h4 className="evidence-card-title">Evidence Library</h4>
                                    <p className="evidence-card-desc">
                                        Live artifacts mapped to each of the 110 controls, refreshed continuously and version-controlled.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-evidence-card">
                                    <div className="evidence-icon-box mb-4">
                                        <img src={envIcon2} alt="Mock C3PAO" className="evidence-card-graphic" />
                                    </div>
                                    <h4 className="evidence-card-title">Mock C3PAO Assessment</h4>
                                    <p className="evidence-card-desc">
                                        Full dry-run with finding response strategy and remediation paths before the real assessor arrives.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-evidence-card">
                                    <div className="evidence-icon-box mb-4">
                                        <img src={envIcon3} alt="Cloud Providers" className="evidence-card-graphic" />
                                    </div>
                                    <h4 className="evidence-card-title">Cloud & MSP Providers</h4>
                                    <p className="evidence-card-desc">
                                        Senior advisor present during assessor visits - evidence presentation, finding response, post-audit closure.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Explanatory Paragraph and Callout */}
                        <div className="row text-start mt-5">
                            <div className="col-12">
                                <p className="sec-body-text text-secondary mb-4 font-size-16 line-height-1-8">
                                    We do not guarantee certification outcomes. Certification is determined by formal assessment under CMMC 2.0 rules. Our role is to ensure that systems, documentation and operational practices are synchronized and defensible under structured evaluation.
                                </p>

                                <div className="cmmc-callout-quote-box mt-4">
                                    <p className="cmmc-quote-text">
                                        CMMC 2.0 compliance is not a one-time event. It is an enforceable condition of participation within the Defense Industrial Base. Our approach is designed to withstand scrutiny, not simply to satisfy checklists.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 7. RISK ANALYSIS SECTION (Deep Dark Mode Grid aligned with your UI System) */}
                <section className="cmmc-risk-section text-center pt-5">
                    <div className="custom-container">

                        {/* Section Header Tag Block */}
                        <div className="section-tag-wrapper">
                            <span className="section-mini-tag dark-theme-tag">
                                <span className="fallback-red-dot"></span>THE RISK OF WAITING
                            </span>
                        </div>

                        {/* Header and Subtext Framework */}
                        <h2 className="dark-section-title text-center">
                            What happens if You Ignore CMMC 2.0?
                        </h2>
                        {/* Kept here for vertical layout balance matching your UI example */}
                        <p className="dark-section-subtitle text-center mb-5">
                            Neglecting framework deadlines introduces critical contractual obstacles across your defense pipeline.
                        </p>

                        {/* Figma Layout Matrix matching your existing screen */}
                        <div className="row g-0 figma-monitoring-grid text-start">

                            {/* Cell 1: Contract Disqualification */}
                            <div className="col-md-6 grid-item border-bottom">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper">
                                        <img src={iconPulseRed} alt="Contract Disqualification" />
                                    </div>
                                    <div>
                                        <h6>Contract Disqualification</h6>
                                        <p>Excluded from new DoD awards once the clause flows down.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cell 2: Existing Vehicle Risk */}
                            <div className="col-md-6 grid-item border-bottom">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper">
                                        <img src={iconPulseRed} alt="Existing Vehicle Risk" />
                                    </div>
                                    <div>
                                        <h6>Existing Vehicle Risk</h6>
                                        <p>Active contracts paused or recompeted mid-cycle.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cell 3: Supply-Chain Exposure */}
                            <div className="col-md-6 grid-item">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper">
                                        <img src={iconPulseRed} alt="Supply-Chain Exposure" />
                                    </div>
                                    <div>
                                        <h6>Supply-Chain Exposure</h6>
                                        <p>Primes drop subs that can't show certification.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cell 4: 10x Remediation Cost */}
                            <div className="col-md-6 grid-item">
                                <div className="dark-list-item-with-icon">
                                    <div className="dark-list-icon-wrapper">
                                        <img src={iconPulseRed} alt="10× Remediation Cost" />
                                    </div>
                                    <div>
                                        <h6>10× Remediation Cost</h6>
                                        <p>Post-failure remediation costs dwarf upfront investment.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* 8. GAP ASSESSMENT CAPABILITIES SECTION (Light Canvas Grid) */}
                <section className="cmmc-gap-section text-center padding-y-90">
                    <div className="custom-container">

                        <div className="section-tag-wrapper justify-content-center mb-3">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>GAP ASSESSMENT
                            </span>
                        </div>

                        <h2 className="section-main-heading text-dark font-weight-700 mb-3 max-w-900 mx-auto font-size-38">
                            Know Exactly Where you stand<br />Before Assessor day.
                        </h2>

                        <p className="section-subtitle-text text-secondary mb-5 max-w-780 mx-auto font-size-16">
                            A structured readiness assessment mapped to NIST SP 800-171 control families and C3PAO sampling logic.
                        </p>

                        {/* 3x2 Matrix Grid Layout */}
                        <div className="row g-3 text-start">

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>Structured readiness assessments aligned to NIST SP 800-171 control families</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>Boundary definition and CUI scoping discipline</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>SSP and POA&M development tied directly to scoring methodology</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>Implementation sequencing and control validation support</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>Evidence preparation aligned to C3PAO sampling expectations</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="cmmc-gap-pill">
                                    <img src={checkBulletRed} alt="bullet" className="gap-sparkle" />
                                    <span>Executive-level reporting and decision guidance</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* 9. EXECUTIVE PERSPECTIVE SECTION (Light Mode Risk Overview) */}
                <section className="cmmc-executive-section text-start bg-white" style={{paddingTop: "90px"}}>
                    <div className="custom-container">
                        
                        <div className="section-tag-wrapper1">
                            <span className="section-mini-tag light-red-pill">
                                <span className="fallback-red-dot"></span>EXECUTIVE PERSPECTIVE
                            </span>
                        </div>
                        
                        <h2 className="section-main-heading text-dark font-weight-700 mb-4 font-size-38">
                            A Board-level Risk Management Function.
                        </h2>

                        {/* Red Border Left Callout Box */}
                        <div className="cmmc-left-accent-callout mb-4">
                            <p className="accent-callout-text">
                                CMMC 2.0 is not a marketing cycle. It is an enforceable condition of participation within the Defense Industrial Base.
                            </p>
                        </div>

                        {/* Explanatory Body Copy */}
                        <div className="executive-body-content max-w-1100">
                            <p className="sec-body-text text-secondary mb-4 font-size-16 line-height-1-8">
                                Organizations that approach compliance as documentation alone often discover weaknesses during formal evaluation. Organizations that approach it as governance discipline strengthen contract eligibility, operational resilience and executive accountability.
                            </p>
                            <p className="sec-body-text text-secondary mb-5 font-size-16 line-height-1-8">
                                Cybersecurity under CMMC 2.0 is not an IT initiative. It is a board-level risk management function tied directly to revenue continuity and contractual survival.
                            </p>
                        </div>

                        {/* Brand Signature Line */}
                        <div className="spartan-signature-row d-flex align-items-center mt-2">
                            <img src={spartanLogo} alt="Spartan Cyber Security Logo" className="signature-logo me-3" />
                            <span className="signature-brand-text">operates at that level.</span>
                        </div>

                    </div>
                </section>


                {/* 10. FINAL BILLBOARD CTA SECTION (Deep Dark Radiant Card Container) */}
                <section className="cmmc-cta-section padding-y-90 bg-white">
                    <div className="custom-container">
                        <div className="cmmc-radiant-cta-card text-center position-relative overflow-hidden">
                            
                            {/* Accent Tag Pill */}
                            <div className="section-tag-wrapper justify-content-center mb-4">
                                <span className="section-mini-tag dark-red-pill-framework">
                                    <span className="fallback-red-dot"></span>GET STARTED
                                </span>
                            </div>

                            {/* Main CTA Header */}
                            <h2 className="cta-display-title text-white font-weight-700 mb-3">
                                Map your CMMC 2.0 path in a<br />Working Session.
                            </h2>

                            {/* Subtitle Description */}
                            <p className="cta-display-subtitle mx-auto mb-5 max-w-700">
                                A Senior Advisor will scope your starting position and the fastest defensible route to certification.
                            </p>

                            {/* Action Control Button Pair */}
                            <div className="cta-btn-group d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3">
                                <button className="btn btn-white-action d-flex align-items-center justify-content-center">
                                    <span>Schedule Compliance Review</span>
                                    <svg className="ms-2 button-arrow-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.3335 8H12.6668M12.6668 8L8.00016 3.33334M12.6668 8L8.00016 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className="btn btn-dark-outline-action">
                                    Explore Compliance
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CmmcScreen;