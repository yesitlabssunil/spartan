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
    { tag: "DOD", title: "CMMC 2.0", desc: "Foundational, Advanced and Expert levels for the Defense Industrial Base." },
    { tag: "NIST", title: "NIST SP 800-171", desc: "All 110 controls implemented with traceable evidence and documented SSP." },
    { tag: "NIST", title: "NIST 800-53", desc: "Federal civilian baseline for high/moderate/low impact systems." },
    { tag: "DFARS", title: "DFARS 7012 / 7019 / 7020 / 7021", desc: "Contract clause compliance and SPRS scoring." },
    { tag: "FEDRAMP", title: "FedRAMP Readiness", desc: "Cloud service provider posture and 3PAO preparation." },
    { tag: "ITAR", title: "ITAR & Export Control", desc: "Technical data segmentation and access controls." }
  ];

  const services = [
    { title: "CMMC 2.0 Readiness", desc: "Gap analysis, scoping, and Level 2 preparation aligned to C3PAO assessment.", image: icon1 },
    { title: "NIST 800-171 Implementation", desc: "All 110 controls implemented with traceable evidence and SSP.", image: icon2 },
    { title: "POA&M Remediation", desc: "Prioritized remediation roadmap with measurable closure milestones.", image: icon3 },
    { title: "Security Operations", desc: "Continuous monitoring, IR planning, and assessor-ready reporting.", image: icon4 },
    { title: "Contract Risk Advisory", desc: "Pre-bid compliance posture review for DFARS and FedRAMP work.", image: icon5 },
    { title: "Audit Defense", desc: "On-site assessor support, evidence presentation, and finding response.", image: icon6 }
  ];

  const outcomes = [
    { title: "Protect Revenue", desc: "Maintain eligibility for active and pipeline contracts." },
    { title: "Preserve Contracts", desc: "Reduce risk of pause, recompete, or termination." },
    { title: "Strengthen Security", desc: "Move from documented controls to measurable posture." },
    { title: "Audit Readiness", desc: "Be ready for assessor visit any week of the year." },
    { title: "Executive Confidence", desc: "Board-grade visibility into compliance posture." },
    { title: "Team Capability", desc: "Knowledge transfer that lasts beyond engagement." }
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
                <span>Compliance</span> <span className="separator">|</span> <span style={{color: "white"}}>Home</span>
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
                <span className="fallback-red-dot"></span>SERVICE LINES
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
          <div className="custom-container custom-container1">
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