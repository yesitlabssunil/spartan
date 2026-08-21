import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  FaShieldAlt,
  FaFileContract,
  FaTools,
  FaEye,
  FaUserShield,
  FaGraduationCap,
} from "react-icons/fa";
import "../assets/css/complianceScreen.css";
import checkIcon from "../assets/images/complianceScreen/check-icon.png";
import icon1 from "../assets/images/complianceScreen/icon1.png";
import icon2 from "../assets/images/complianceScreen/icon2.png";
import icon3 from "../assets/images/complianceScreen/icon3.png";
import icon4 from "../assets/images/complianceScreen/icon4.png";
import icon5 from "../assets/images/complianceScreen/icon5.png";
import icon6 from "../assets/images/complianceScreen/icon6.png";
import { Link } from "react-router-dom";
import { complianceScreenData } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";

const ComplianceScreen = () => {
  const dispatch = useDispatch();
  const { complianceData, loading } = useSelector((state) => state.second);

  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };



  useEffect(() => {
    dispatch(complianceScreenData());
  }, [dispatch]);

  const frameworks = [
    {
      tag: "DOD",
      title: "CMMC 2.0",
      desc: "Foundational, Advanced and Expert levels for the Defense Industrial Base.",
    },
    {
      tag: "NIST",
      title: "NIST SP 800-171",
      desc: "All 110 controls implemented with traceable evidence and documented SSP.",
    },
    {
      tag: "NIST",
      title: "NIST 800-53",
      desc: "Federal civilian baseline for high/moderate/low impact systems.",
    },
    {
      tag: "DFARS",
      title: "DFARS 7012 / 7019 / 7020 / 7021",
      desc: "Contract clause compliance and SPRS scoring.",
    },
    {
      tag: "FEDRAMP",
      title: "FedRAMP Readiness",
      desc: "Cloud service provider posture and 3PAO preparation.",
    },
    {
      tag: "ITAR",
      title: "ITAR & Export Control",
      desc: "Technical data segmentation and access controls.",
    },
  ];

  const services = [icon1, icon2, icon3, icon4, icon5, icon6];

  const outcomes = [
    {
      title: "Protect Revenue",
      desc: "Maintain eligibility for active and pipeline contracts.",
    },
    {
      title: "Preserve Contracts",
      desc: "Reduce risk of pause, recompete, or termination.",
    },
    {
      title: "Strengthen Security",
      desc: "Move from documented controls to measurable posture.",
    },
    {
      title: "Audit Readiness",
      desc: "Be ready for assessor visit any week of the year.",
    },
    {
      title: "Executive Confidence",
      desc: "Board-grade visibility into compliance posture.",
    },
    {
      title: "Team Capability",
      desc: "Knowledge transfer that lasts beyond engagement.",
    },
  ];

  const complianceSystemsSchema = {
    "@type": "Service",
    "@id": "https://spartan-cs.com/compliance-systems#service",
    "name": "Compliance Systems Development",
    "serviceType": "GRC Program Design and Compliance System Implementation",
    "provider": {
      "@id": "https://spartan-cs.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Federal Contractors / Defense Industrial Base"
    },
    "description": "Cybersecurity compliance programs aligned to CMMC 2.0, NIST SP 800-171, NIST 800-53, DFARS, FedRAMP, and ITAR requirements for federal contractors.",
    "url": "https://spartan-cs.com/compliance-systems",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spartan-cs.com/compliance-systems"
    }
  };
  return (
    <>
      <SEO
        title="Cybersecurity Compliance Services for Defense Contractors | Spartan Cyber Security"
        description="Cybersecurity compliance services for defense contractors — governance, risk assessments, and continuous compliance support built for CMMC and NIST 800-171."
        url="https://spartan-cs.com/compliance-systems"
        schema={[
          complianceSystemsSchema,
        ]}
      />
      <Header />
      <main className="compliance-main">
        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}> <span style={{ color: "white" }}>Home</span></Link> <span className="separator">|</span>{" "}
                <span>Compliance Systems</span>
              </div>
              <h1 className="blog-hero-title">
                One Program Every Framework
                <br /> that Matters to Your Contracts.
              </h1>
              <p className="blog-hero-subtitle">
                From CMMC 2.0 to NIST 800-171, DFARS, and FedRAMP – We engineer
                <br /> a single compliance posture that maps to all of them.
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
            <h2 className="section-main-heading text-center">
              Built for the standards your contracts require.
            </h2>

            <div className="row g-4 mt-4">
              {frameworks?.map((fw, idx) => (
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
            <h2 className="section-main-heading text-center">
              {complianceData?.serviceline_sec_heading}
            </h2>
            <p className="section-sub-heading text-center">
              {complianceData?.serviceline_sec_paragraph}
            </p>

            <div className="row g-4 mt-4">
              {/* {services.map((svc, idx) => ( */}
              {complianceData?.serviceline_sec_content?.map((svc, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="service-feature-card">
                    <div className="service-feature-icon-box">
                      <img src={services[idx]} alt="" />
                    </div>
                    <h4 className="service-feature-title">{svc.title}</h4>
                    <p className="service-feature-desc">{svc.description}</p>
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
                <p className="midway-desc">
                  A 30-minute scoping call will pinpoint your gaps and the
                  fastest path forward.
                </p>
              </div>
              <div className="midway-right">
                <Link
                  to="/contact-us"
                  className="midway-btn-red"
                  style={{ textDecoration: "none" }}
                >
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
              Protect revenue. Preserve contracts.{" "}
              <br className="d-none d-md-block" /> Strengthen security.
            </h2>

            <div className="row g-4 mt-5">
              {outcomes?.map((item, idx) => (
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

        {/* ==========FAQ SECTION============ */}
        <section className="resource-faq-section">
          <div className="section-inner-content faq-layout-grid">
            {/* Left Column Sticky Header Block */}
            <div className="faq-left-header-panel">
              <div className="faq-mini-badge">
                <span className="badge-dot-indicator" />
                <span className="badge-label-text">FAQ</span>
              </div>
              <h2 className="faq-panel-title">
                You Have Questions.
                <br />
                We Have Answers.
              </h2>
              <Link
                to=""
                className="btn-red-action"
                style={{ marginTop: "15px" }}
              >
                Find More Answers <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Right Column Interactive Accordion Stack */}
            <div className="faq-right-accordion-panel">
              {complianceData?.compliance_faq_content.map((item, index) => {
                const isOpen = activeFaqId === item.id;
                return (
                  <div
                    key={item?.id}
                    className={`faq-accordion-row ${isOpen ? "is-expanded" : ""}`}
                    onClick={() => toggleFaq(item?.id)}
                  >
                    <div className="faq-row-trigger-line">
                      <h3 className="faq-question-text">{item?.question}</h3>
                      <div
                        className={`faq-toggle-circle-indicator ${isOpen ? "active-minus" : "inactive-plus"
                          }`}
                      >
                        {isOpen ? (
                          /* Minus SVG Icon */
                          <svg
                            width="12"
                            height="2"
                            viewBox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1H11"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          /* Plus SVG Icon */
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1V11M1 6H11"
                              stroke="#27272A"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Smooth height container breakdown space */}
                    <div className="faq-row-collapsible-content">
                      <div className="faq-answer-inner-wrapper">
                        <p className="faq-answer-paragraph">{item?.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* ========================================== */}

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
                A Senior Advisor will scope your starting position and the
                fastest route to audit readiness.
              </p>
              <div className="cta-buttons-group">
                <Link
                  to="/contact-us"
                  className="cta-btn-white"
                  style={{ textDecoration: "none" }}
                >
                  Schedule Consultation{" "}
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10"
                        stroke="#111111"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
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
