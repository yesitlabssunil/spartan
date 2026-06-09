import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FaShieldAlt, FaFileContract, FaTools, FaEye, FaUserShield, FaGraduationCap } from "react-icons/fa";
import "../assets/css/complianceScreen.css";
import checkIcon from "../assets/images/complianceScreen/check-icon.png"
import icon1 from "../assets/images/complianceScreen/icon1.png"
import icon2 from "../assets/images/complianceScreen/icon2.png"
import icon3 from "../assets/images/complianceScreen/icon3.png"
import icon4 from "../assets/images/complianceScreen/icon4.png"
import icon5 from "../assets/images/complianceScreen/icon5.png"
import icon6 from "../assets/images/complianceScreen/icon6.png"
import { Link } from "react-router-dom";

const ComplianceScreen = () => {

  const frameworks = [
    { tag: "DOD", title: "CMMC 2.0", desc: "Foundational, Advanced, and Expert Level compliance tailored for federal prime and sub teams." },
    { tag: "NIST", title: "NIST SP 800-171", desc: "110 security requirements across 14 families required for handling unclassified systems information." },
    { tag: "NIST", title: "NIST 800-53", desc: "Federal information security standards mandatory for information systems configuration." },
    { tag: "DFARS", title: "DFARS 252.204-7012/7019/7020", desc: "Mandatory clause governance requirements and SPRS scoring tracking submission parameters." },
    { tag: "FEDRAMP", title: "FedRAMP Readiness", desc: "Cloud deployment system preparation tailored to 3PAO assessment thresholds." },
    { tag: "FAR", title: "FAR Basic Safeguarding", desc: "Minimum safeguarding measures for general federal contract asset processing environments." }
  ];

  const services = [
    { title: "CMMC 2.0 Readiness", desc: "Gap analysis, boundary planning, and implementation preparation calibrated to C3PAO assessment.", image: icon1 },
    { title: "System Security Plans (SSP)", desc: "Comprehensive documentation engineered to reflect your architecture and processes.", image: icon2 },
    { title: "POAM Remediation", desc: "Prioritized engineering roadmaps engineered to address technical non-compliance items.", image: icon3 },
    { title: "Security Operations", desc: "Continuous monitoring, log management, and incident response operations.", image: icon4 },
    { title: "Contractor Advocacy", desc: "Strategic compliance representation throughout prime contract reviews and DIBCAC assessments.", image: icon5 },
    { title: "Audit Defense", desc: "Assessor documentation management, physical review rehearsals, and continuous control support.", image: icon6 }
  ];

  const outcomes = [
    { title: "Protect Revenue", desc: "Maintain your eligibility for critical contracts and handle protected systems data seamlessly." },
    { title: "Preserve Contracts", desc: "Prevent contract termination risks and compliance penalty exposures across active projects." },
    { title: "Strengthen Security", desc: "Move beyond check-box compliance with robust operational network defenses." },
    { title: "Audit Readiness", desc: "Maintain a persistent security architecture ready for sudden C3PAO or government inspections." },
    { title: "Executive Confidence", desc: "Provide leadership with clear metrics and visibility into true regulatory performance." },
    { title: "Team Capability", desc: "Equip your internal staff to confidently own and run security mechanisms over the long haul." }
  ];

  return (
    <>
      <Header />
      <main className="compliance-main">

        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <span>Compliance</span> <span className="separator">|</span> <span>Home</span>
              </div>
              <h1 className="blog-hero-title">One Program Every Framework<br/> that Matters to Your Contracts.</h1>
              <p className="blog-hero-subtitle">
                From CMMC 2.0 to NIST 800-171, DFARS, and FedRAMP – We engineer<br/> a single compliance posture that maps to all of them.
              </p>
            </div>
          </div>
        </div>

        {/* 2. STANDARDS REQ GRID */}
        <section className="standards-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>FRAMEWORKS
              </span>
            </div>
            <h2 className="section-main-heading text-center">Built for the standards your contracts require.</h2>

            <div className="row g-4 mt-4">
              {frameworks.map((fw, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="framework-card">
                    <span className="framework-mini-label">{fw.tag}</span>
                    <h4 className="framework-card-title">{fw.title}</h4>
                    <p className="framework-card-desc">{fw.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SIX SERVICES SECTION */}
        <section className="services-grid-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>SERVICES & ASSIST
              </span>
            </div>
            <h2 className="section-main-heading text-center">Six services. One delivery program.</h2>
            <p className="section-sub-heading text-center">
              Tailored support engineered directly to match your platform requirements.
            </p>

            <div className="row g-4 mt-4">
              {services.map((svc, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="service-feature-card">
                    <div className="service-feature-icon-box">
                      <img src={svc?.image} alt="" />
                    </div>
                    <h4 className="service-feature-title">{svc.title}</h4>
                    <p className="service-feature-desc">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MIDWAY SPLIT NOT SURE SECTION */}
        <section className="midway-split-section">
          <div className="custom-container">
            <div className="midway-split-wrapper">
              <div className="midway-left">
                <h3 className="midway-title">Not sure where you stand?</h3>
                <p className="midway-desc">A 30-minute scoping call will pinpoint your gaps and the fastest path forward.</p>
              </div>
              <div className="midway-right">
                <Link to="/contact-us" className="midway-btn-red" style={{textDecoration:"none"}}>
                Talk to a Senior Advisor <span className="ms-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUTCOMES (DARK SECTION) */}
        <section className="outcomes-dark-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag">
                <span className="fallback-red-dot"></span>OUTCOMES
              </span>
            </div>
            <h2 className="dark-section-heading text-center">
              Protect revenue. Preserve contracts. <br className="d-none d-md-block" /> Strengthen security.
            </h2>
            
            <div className="row g-4 mt-5">
              {outcomes.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="outcome-dark-card">
                    <div className="outcome-icon-bullet">
                      {/* <div className="outcome-inner-dot"></div> */}
                      <img src={checkIcon} alt="" />
                    </div>
                    <h5 className="outcome-card-title">{item.title}</h5>
                    <p className="outcome-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION SECTION */}
        <section className="compliance-cta-section">
          <div className="custom-container">
            <div className="compliance-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                Map your compliance program in a 45-minute working session.
              </h2>
              <p className="cta-banner-desc">
              A Senior Advisor will scope your starting position and the fastest route to audit readiness.
              </p>
              <div className="cta-buttons-group">
                <Link to="/contact-us" className="cta-btn-white" style={{textDecoration:"none"}}>Schedule Consultation <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  </span></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ComplianceScreen;