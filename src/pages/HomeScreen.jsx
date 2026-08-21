import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/home.css";
import checkBulletRed from "../assets/images/approachScreen/startBullet.png";
import icon1 from "../assets/images/home/icon1.png";
import icon2 from "../assets/images/home/icon2.png";
import icon3 from "../assets/images/home/icon3.png";
import icon4 from "../assets/images/home/icon4.png";
import icon5 from "../assets/images/home/icon5.png";
import icon6 from "../assets/images/home/icon6.png";
import icon7 from "../assets/images/home/icon7.png";
import icon8 from "../assets/images/home/icon8.png";
import icon9 from "../assets/images/home/icon9.png";
import icon10 from "../assets/images/home/icon10.png";
import icon11 from "../assets/images/home/icon11.png";
import icon12 from "../assets/images/home/icon12.png";
import icon13 from "../assets/images/home/icon13.png";
import icon14 from "../assets/images/home/icon14.png";
import { Link } from "react-router-dom";
import icon15 from "../assets/images/home/icon15.png";
import icon16 from "../assets/images/home/icon16.png";
import icon17 from "../assets/images/home/icon17.png";
import SEO from "../component/SEO";
import BlogHorizontalScroll from "../component/BlogHorizontalScroll";

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const solutionIcons = [
    "/images/compliance-training.svg",
    "/images/security-awareness.svg",
    "/images/audit-preparation.svg",
    "/images/certification.svg",
  ];

  const fallbackImages = [
    "/images/built-1.svg",
    "/images/built-2.svg",
    "/images/built-3.svg",
  ];

  const timeSectionItems = [
    {
      title: "8-12 Weeks",
      description:
        "Average implementation timeline to reach full audit readiness.",
    },
    {
      title: "110 Controls",
      description:
        "NIST SP 800-171 requirements verified with tangible evidence.",
    },
    {
      title: "100% Defensible",
      description:
        "Assessment protocols structured directly for C3PAO scrutiny.",
    },
  ];

  const solutionCards = [
    {
      title: "CMMC 2.0 Compliance",
      description:
        "End-to-end readiness roadmaps, SSP creation, and control deployment.",
    },
    {
      title: "Microsoft 365 Security",
      description:
        "Enforcing zero-trust architecture, conditional access, and GCC High baselines.",
    },
    {
      title: "Audit-Ready Systems",
      description:
        "Packaging verifiable operational evidence to defend federal contracts.",
    },
  ];

  const industryCards = [
    {
      title: "Defense Industrial Base",
      description:
        "Prime contractors and subcontractors managing critical Controlled Unclassified Information.",
    },
    {
      title: "Aerospace & Engineering",
      description:
        "Precision engineering suppliers requiring DFARS and NIST 800-171 compliance.",
    },
    {
      title: "GovTech & Cloud Services",
      description:
        "Software providers and technology vendors delivering secure systems to federal agencies.",
    },
  ];

  const faqList = [
    {
      id: "faq-1",
      question: "What is CMMC 2.0 and why is it required?",
      answer:
        "CMMC 2.0 is the Department of Defense framework requiring contractors to protect Controlled Unclassified Information (CUI) through validated NIST SP 800-171 security controls.",
    },
    {
      id: "faq-2",
      question: "How long does it take to reach audit readiness?",
      answer:
        "Typically between 8 to 12 weeks depending on your current cybersecurity baseline and Microsoft 365 environment setup.",
    },
    {
      id: "faq-3",
      question: "What happens if our organization fails a C3PAO audit?",
      answer:
        "Failing an assessment can result in losing active DoD contracts or being disqualified from bidding on future federal solicitations.",
    },
  ];

  return (
    <>
      <SEO
        title="CMMC 2.0 & NIST Compliance Consulting | Spartan Cyber Security"
        description="CMMC 2.0 and NIST 800-171 compliance consulting for federal contractors. Audit-ready cybersecurity programs built for C3PAO assessment and contract defense."
        url="https://spartan-cs.com"
      />
      <Header />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.5), rgba(5, 10, 20, 0.6)), url(/images/hero-banner-bg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay"></div>
        <div
          className="hero-content"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <div className="badge-tag">
            <span className="dot-black"></span> CMMC 2.0 • DFARS • NIST 800-171
          </div>

          <h1>Audit-Ready CMMC 2.0 & NIST Compliance in 8-12 Weeks</h1>

          <p className="hero-subtext">
            Helping Federal Contractors & Subcontractors secure systems,
            implement compliance controls and prepare for audit readiness.
          </p>

          <div className="hero-btns">
            <Link to="/contact-us" className="btn-white">
              Schedule Consultation <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/compliance-systems" className="btn-transparent">
              Get Compliance Ready
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Ribbon */}
      <div className="clients-ribbon">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <div className="marquee-group" key={i}>
              <span>DoD Contractors</span>
              <span>Defense Supply Chain Partners</span>
              <span>Small & Mid-Sized Businesses</span>
              <span>Government Vendors</span>
              <span>High-Compliance Entities</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="center-tag">
          <span className="dot-red"></span> WHAT IS IT
        </div>
        <h2 className="section-heading-center">
          CMMC 2.0 is the new standard for defending federal contracts.
        </h2>
        <p className="section-desc-center">
          The Cybersecurity Maturity Model Certification (CMMC) 2.0 is the
          Department of Defense framework designed to protect Controlled
          Unclassified Information (CUI) handled by federal contractors and
          subcontractors. Built around NIST SP 800-171 security standards, it
          establishes the cybersecurity controls organizations must implement to
          retain and win government contracts.
        </p>
        <p className="section-desc-center sub">
          Beyond the DoD, CMMC 2.0 also impacts organizations supporting
          agencies such as DOE, NASA, DHS and other federal entities that rely
          on contractors to protect sensitive information.
        </p>

        <div className="levels-grid">
          <div className="level-card">
            <span className="level-badge">LEVEL 1</span>
            <h3>Foundational</h3>
            <p>
              Basic safeguarding practices focused on protecting Federal
              Contract Information (FCI).
            </p>
          </div>
          <div className="level-card">
            <span className="level-badge">LEVEL 2</span>
            <h3>Advanced</h3>
            <p>
              Implementation of NIST SP 800-171 security controls required for
              handling Controlled Unclassified Information (CUI).
            </p>
          </div>
          <div className="level-card">
            <span className="level-badge">LEVEL 3</span>
            <h3>Expert</h3>
            <p>
              Enhanced protection requirements designed for organizations
              supporting critical national security programs and high-risk
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="problem-header-split">
          <div className="left-head">
            <span className="problem-tag">
              <span className="dot-red"></span> THE PROBLEM
            </span>
            <h2>
              Most Contractors are Underprepared for Modern Compliance Demands
            </h2>
          </div>
          <div className="right-desc">
            <p>
              Without structured systems, compliance becomes <br /> reactive,
              expensive and vulnerable. The gap <br /> between policy and
              operation is where contracts <br /> are lost.
            </p>
          </div>
        </div>

        <div className="problems-grid">
          <div className="problem-item">
            <div className="prob-icon">
              <img
                src="/images/document-img-h.svg"
                alt="Documentation without execution"
              />
            </div>
            <div className="prob-text">Documentation without execution</div>
          </div>
          <div className="problem-item">
            <div className="prob-icon">
              <img src="/images/weak-cloud.svg" alt="Weak cloud security" />
            </div>
            <div className="prob-text">Weak cloud security</div>
          </div>
          <div className="problem-item">
            <div className="prob-icon">
              <img src="/images/governance-gaps.svg" alt="Governance gaps" />
            </div>
            <div className="prob-text">Governance gaps</div>
          </div>
          <div className="problem-item">
            <div className="prob-icon">
              <img
                src="/images/poor-enforcement.svg"
                alt="Poor policy enforcement"
              />
            </div>
            <div className="prob-text">Poor policy enforcement</div>
          </div>
          <div className="problem-item">
            <div className="prob-icon">
              <img src={icon1} alt="Missing evidence" />
            </div>
            <div className="prob-text">Missing evidence</div>
          </div>
          <div className="problem-item">
            <div className="prob-icon">
              <img
                src="/images/audit-exposure.svg"
                alt="Audit failure exposure"
              />
            </div>
            <div className="prob-text">Audit failure exposure</div>
          </div>
        </div>
      </section>

      {/* Risk / Time-Sensitive Section */}
      <section className="risk-section">
        <div className="risk-left-panel">
          <span className="badge-red-tag">
            <span className="dot-red"></span> TIME-SENSITIVE
          </span>
          <h2>Contract Defense Requires Immediate Action</h2>
          <p>
            Federal compliance enforcement timelines leave no margin for
            reactive implementation.
          </p>
          <Link to="/compliance-systems" className="btn-red-action">
            Get Compliance Ready Now <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="risk-right-grid">
          {timeSectionItems.map((item, index) => (
            <div className="risk-card" key={index}>
              <span className="risk-num">{item.title}</span>
              <h4>{item.description}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="stats-banner-overlay"></div>
        <div className="stats-banner-content">
          <h3>Quantified Compliance Acceleration</h3>

          <div className="stats-counter-row">
            <div className="stat-box">
              <h2>100%</h2>
              <p>C3PAO Alignment</p>
            </div>
            <div className="stat-box">
              <h2>8-12</h2>
              <p>Weeks to Audit Ready</p>
            </div>
            <div className="stat-box">
              <h2>110</h2>
              <p>NIST Controls Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="solution-header text-center">
          <span className="solution-pill">
            <span className="dot-white"></span> THE SOLUTION
          </span>
          <h2>Engineered Compliance Systems</h2>
        </div>

        <div className="solution-cards-grid">
          {solutionCards.map((item, index) => (
            <div className="sol-card" key={index}>
              <div className="sol-card-icon">
                <img
                  src={solutionIcons[index] || solutionIcons[0]}
                  alt={item.title}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="solution-footer-action text-center">
          <a
            href="https://lms.spartan-cs.com/"
            className="btn-white-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start with an Assessment <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="text-center section-header-margin">
          <span className="service-pill">
            <span className="dot-red"></span> OUR SERVICES
          </span>
          <h2>
            Strategic Cybersecurity & <br /> Compliance Services
          </h2>
          <p className="services-subtext">
            Structured compliance guidance and implementation support built for
            audit readiness and operational defensibility.
          </p>
        </div>

        <div className="services-cards-grid">
          <div className="service-image-card">
            <span className="card-number">01</span>
            <h3>CMMC 2.0 Readiness</h3>
            <p>
              Structured implementation guidance and assessment preparation
              aligned to CMMC 2.0 institutional requirements.
            </p>
          </div>
          <div className="service-image-card">
            <span className="card-number">02</span>
            <h3>NIST SP 800-171 Compliance</h3>
            <p>
              Security control alignment, governance support and operational
              readiness built around NIST SP 800-171 standards.
            </p>
          </div>
          <div className="service-image-card">
            <span className="card-number">03</span>
            <h3>Audit Readiness & Evidence Preparation</h3>
            <p>
              Preparation of documentation, evidence and operational validation
              designed to withstand formal assessment scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="pillars-header-split">
          <div className="pillars-left-title">
            <span className="pillars-pill">
              <span className="dot-red"></span> Methodology
            </span>
            <h2>Three Pillars of Operational Compliance</h2>
          </div>
          <div className="pillars-right-desc">
            <p>
              Each pillar is engineered to interlock - producing audit-ready
              evidence and sustainable security.
            </p>
          </div>
        </div>

        <div className="pillars-grid-row">
          <div className="pillar-column-card">
            <div className="pillar-card-head">
              <div className="pillar-icon-red">
                <img src={icon3} alt="CMMC Icon" />
              </div>
              <h4>CMMC 2.0 Compliance</h4>
            </div>
            <ul className="pillar-list">
              <li>
                <img src={checkBulletRed} alt="" /> Gap assessments
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Readiness roadmaps
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> SSP creation
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> POAM development
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Security controls
                implementation
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Audit preparation
              </li>
            </ul>
          </div>

          <div className="pillar-column-card">
            <div className="pillar-card-head">
              <div className="pillar-icon-red">
                <img src={icon2} alt="M365 Icon" />
              </div>
              <h4>Microsoft 365 Security</h4>
            </div>
            <ul className="pillar-list">
              <li>
                <img src={checkBulletRed} alt="" /> Identity management
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Conditional access
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Endpoint protection
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Secure cloud configuration
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Data governance
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Compliance controls
              </li>
            </ul>
          </div>

          <div className="pillar-column-card">
            <div className="pillar-card-head">
              <div className="pillar-icon-red">
                <img src={icon4} alt="Systems Icon" />
              </div>
              <h4>Compliance Systems</h4>
            </div>
            <ul className="pillar-list">
              <li>
                <img src={checkBulletRed} alt="" /> Governance frameworks
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Policy architecture
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Business systems
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Documentation controls
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Continuous monitoring
              </li>
              <li>
                <img src={checkBulletRed} alt="" /> Executive accountability
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="text-center section-header-margin">
          <span className="trust-pill">
            <span className="dot-red"></span> WHY SPARTAN
          </span>
          <h2>Why Federal Contractors Trust Spartan</h2>
          <p className="trust-subtext">
            Spartan combines military leadership, cybersecurity governance and
            real-world compliance execution to help organizations move beyond
            documentation into operational security.
          </p>
        </div>

        <div className="trust-boxes-grid">
          <div className="trust-box-card">
            <div className="trust-box-icon">
              <img src={icon5} alt="" />
            </div>
            <h4>Military Leadership</h4>
            <p>
              Led by Brigadier General (Ret.) Raphael Warren with two decades of
              executive security leadership.
            </p>
          </div>
          <div className="trust-box-card">
            <div className="trust-box-icon">
              <img src={icon6} alt="" />
            </div>
            <h4>Audit-Ready Systems</h4>
            <p>
              Compliance programs designed to produce measurable evidence that
              withstands federal audits.
            </p>
          </div>
          <div className="trust-box-card">
            <div className="trust-box-icon">
              <img src={icon7} alt="" />
            </div>
            <h4>Specialized Expertise</h4>
            <p>
              Focused on CMMC 2.0, Microsoft 365 security and sustainable
              compliance systems.
            </p>
          </div>
          <div className="trust-box-card">
            <div className="trust-box-icon">
              <img src={icon8} alt="" />
            </div>
            <h4>Contract Protection</h4>
            <p>
              Built to preserve eligibility, reduce risk and strengthen your
              competitive positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-left-col">
          <span className="section-tag-red no-mar">
            <span className="dot-red"></span> WHO WE ARE
          </span>
          <h2>Built by Military & Cyber Security Leaders</h2>

          <div className="strategic-checklist-box">
            {[
              {
                title: "20+ Years Executive Military Cybersecurity Leadership",
              },
              { title: "Defense-Grade Framework Implementation" },
              { title: "Measurable, Defensible Audit Protocols" },
            ].map((item, index) => (
              <div className="checklist-row" key={index}>
                <span className="chk-icon">
                  <img src="/images/check-icon-militry.svg" alt="" />
                </span>
                <span className="chk-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="who-right-col">
          <div className="built-text">
            <p className="who-top-intro-text">
              Spartan delivers high-assurance cybersecurity architectures and
              compliance strategies for organizations navigating rigorous
              federal standards.
            </p>
          </div>

          <div className="founder-card-container">
            <div className="founder-main-img">
              <img src="/images/founder.png" alt="Raphael Warren" />
            </div>

            <div className="founder-quote-content">
              <p className="quote-paragraph">
                “Compliance is not a static checklist; it is an active
                operational defense of your federal contracts.”
              </p>
              <div className="founder-meta">
                <span className="meta-name">BG (Ret.) Raphael Warren</span>
                <span className="meta-title">
                  Founder & Principal Consultant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="focus-section">
        <div className="text-center section-header-margin">
          <span className="section-tag-red">
            <span className="dot-red"></span>OUTCOMES
          </span>
          <h2>Protect Revenue. Preserve Contracts. Strengthen Security.</h2>
        </div>

        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon17} alt="" />
            </div>
            <h4>Audit Readiness</h4>
            <p>Walk into any assessment with evidence in hand.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon16} alt="" />
            </div>
            <h4>Contract Protection</h4>
            <p>Protect the federal revenue you've already won.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon9} alt="" />
            </div>
            <h4>Reduced Risk</h4>
            <p>Quantifiable reduction in compliance and breach exposure.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon10} alt="" />
            </div>
            <h4>Security Resilience</h4>
            <p>Systems that perform under real-world adversarial pressure.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon15} alt="" />
            </div>
            <h4>Leadership Confidence</h4>
            <p>Executive oversight backed by clear governance.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon trust-box-icon">
              <img src={icon11} alt="" />
            </div>
            <h4>Competitive Positioning</h4>
            <p>An operational advantage in federal procurement.</p>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="process-flow-section">
        <div className="text-center process-header-block">
          <span className="section-tag-red">
            <span className="dot-red"></span>OUR PROCESS
          </span>
          <h2>From Assessment to Audit Readiness</h2>
          <p className="process-main-subtext">
            A repeatable, evidence-driven engagement that moves your
            organization from uncertainty to operational compliance.
          </p>
        </div>

        <div className="process-linear-container">
          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Assess & Identify Gaps</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon red-tint">
                <img src={icon12} alt="" />
              </div>
              <p>
                We evaluate your current cybersecurity environment, identify
                compliance gaps and determine where your organization stands
                against CMMC 2.0 and NIST 800-171 requirements.
              </p>
            </div>
          </div>

          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Build Strategic Roadmap</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon">
                <img src={icon13} alt="" />
              </div>
              <p>
                We develop a clear, prioritized compliance strategy aligned with
                your business, outlining required controls, timelines and
                implementation steps.
              </p>
            </div>
          </div>

          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Implement & Secure Systems</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon">
                <img src={icon3} alt="" />
              </div>
              <p>
                We deploy security controls, harden your Microsoft 365
                environment and establish governance systems to ensure
                compliance is operational, not theoretical.
              </p>
            </div>
          </div>

          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Validate & Prepare For Audit</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon">
                <img src={icon14} alt="" />
              </div>
              <p>
                We document evidence, validate control effectiveness and prepare
                your organization for audit readiness with confidence and
                accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section conpad">
        <div className="text-center section-header-margin">
          <span className="section-tag-red">
            <span className="dot-red"></span>INDUSTRIES
          </span>
          <h2>Industries We Protect</h2>
          <p className="industries-top-desc">
            Specialized compliance systems engineered for defense suppliers and
            federal contractors.
          </p>
        </div>

        <div className="industry-cards-row">
          {industryCards.map((item, index) => (
            <div
              className="industry-image-box"
              style={{
                backgroundImage: `url(${
                  fallbackImages[index] || fallbackImages[0]
                })`,
              }}
              key={index}
            >
              <span className="ind-num">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section conpad">
        <div className="text-center section-header-margin">
          <span className="badge-red-pill">
            <span className="dot-red"></span>RESOURCES
          </span>
          <h2>Compliance Insights & Guides</h2>
          <p className="resources-subtext">
            Practical resources to navigate CMMC 2.0, NIST 800-171, and federal
            cybersecurity standards.
          </p>
        </div>

        <BlogHorizontalScroll items={[]} />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-left-block">
          <span className="badge-red-pill no-mar">
            <span className="dot-red"></span>FAQ
          </span>
          <h2>
            You Have Questions.
            <br />
            We Have Answers.
          </h2>
          <p>
            Not sure where to start? Book a free 30-minute discovery call and
            let's figure it out together.
          </p>
          <Link to="/contact-us" className="btn-red-action">
            Schedule a Call <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="faq-accordion-container">
          {faqList.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.id}
                className={`accordion-item ${isOpen ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h4>{faq.question}</h4>
                  <span className="accordion-icon"></span>
                </div>

                <div
                  className="accordion-body"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="accordion-body-content">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeScreen;
