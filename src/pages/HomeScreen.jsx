import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import "../assets/css/home.css"
import { initHomeScripts } from '../homeInteractions';
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
import { Link } from 'react-router-dom';

const HomeScreen = () => {

  useEffect(() => {
    // Initialize all the vanilla JS listeners once the HTML structure is loaded
    const cleanup = initHomeScripts();

    // Clean up event listeners automatically when switching pages
    return () => {
      cleanup();
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is CMMC 2.0?",
      answer: "The Cybersecurity Maturity Model Certification (CMMC) 2.0 is the DoD's framework for safeguarding controlled unclassified information across the defense industrial base."
    },
    {
      question: "How does Microsoft 365 security impact compliance?",
      answer: "Proper configuration of Microsoft 365 ensures data governance, identity protection, and access logging, which align directly with federal compliance baselines."
    },
    {
      question: "How long does readiness take?",
      answer: "Depending on your current framework infrastructure and organization scope, readiness typically takes anywhere from 3 to 9 months of active implementation."
    },
    {
      question: "What documentation is required?",
      answer: "You need a comprehensive System Security Plan (SSP), Plan of Action and Milestones (POA&M), policy records, and consistent operation logs."
    },
    {
      question: "Can Spartan prepare us for audits?",
      answer: "Yes, Spartan engineers end-to-end operational readiness by simulating audits, mapping required evidence controls, and validating system integrity."
    }
  ];

  return (
    <>
      <Header />

      <section className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.5), rgba(5, 10, 20, 0.6)), url('../images/hero-banner-bg.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <div className="badge-tag"><span className="dot-black"></span> CMMC 2.0 • DFARS • NIST 800-171</div>
          <h1>Audit–Ready CMMC 2.0 & NIST Compliance <br /> in 8–12 Weeks</h1>
          <p className="hero-subtext">Helping Federal Contractors & Subcontractors secure systems, implement compliance controls and prepare for audit readiness.</p>

          <div className="hero-btns">
            <Link to="/contact-us" className="btn-white">Schedule Consultation <i className="fas fa-arrow-right"></i></Link>
            <Link to="/compliance" className="btn-transparent">Get Compliance Ready</Link>
          </div>
        </div>
      </section>

      <div className="clients-ribbon">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>DoD Contractors</span>
            <span>Defense Supply Chain Partners</span>
            <span>Small & Mid-Sized Businesses</span>
            <span>Government Vendors</span>
            <span>High-Compliance Entities</span>
          </div>
          <div className="marquee-group">
            <span>DoD Contractors</span>
            <span>Defense Supply Chain Partners</span>
            <span>Small & Mid-Sized Businesses</span>
            <span>Government Vendors</span>
            <span>High-Compliance Entities</span>
          </div>
          <div className="marquee-group">
            <span>DoD Contractors</span>
            <span>Defense Supply Chain Partners</span>
            <span>Small & Mid-Sized Businesses</span>
            <span>Government Vendors</span>
            <span>High-Compliance Entities</span>
          </div>
          <div className="marquee-group">
            <span>DoD Contractors</span>
            <span>Defense Supply Chain Partners</span>
            <span>Small & Mid-Sized Businesses</span>
            <span>Government Vendors</span>
            <span>High-Compliance Entities</span>
          </div>
        </div>
      </div>

      <section className="info-section">
        <div className="center-tag"><span className="dot-red"></span> WHAT IS IT</div>
        <h2 className="section-heading-center">CMMC 2.0 is the new standard for defending federal contracts.</h2>
        <p className="section-desc-center">The Cybersecurity Maturity Model Certification (CMMC) 2.0 is the Department of Defense framework designed to protect Controlled Unclassified Information (CUI) handled by federal contractors and subcontractors. Built around NIST SP 800-171 security standards, it establishes the cybersecurity controls organizations must implement to retain and win government contracts.</p>
        <p className="section-desc-center sub">Beyond the DoD, CMMC 2.0 also impacts organizations supporting agencies such as DOE, NASA, DHS and other federal entities that rely on contractors to protect sensitive information.</p>

        <div className="levels-grid">
          <div className="level-card fade-in">
            <span className="level-badge">LEVEL 1</span>
            <h3>Foundational</h3>
            <p>Basic safeguarding practices focused on protecting Federal Contract Information (FCI).</p>
          </div>
          <div className="level-card fade-in">
            <span className="level-badge">LEVEL 2</span>
            <h3>Advanced</h3>
            <p>Implementation of NIST SP 800-171 security controls required for handling Controlled Unclassified Information (CUI).</p>
          </div>
          <div className="level-card fade-in">
            <span className="level-badge">LEVEL 3</span>
            <h3>Expert</h3>
            <p>Enhanced protection requirements designed for organizations supporting critical national security programs and high-risk environments.</p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="problem-header-split">
          <div className="left-head">
            <span className="problem-tag"><span className="dot-red"></span> THE PROBLEM</span>
            <h2>Most Contractors are Underprepared for Modern Compliance Demands</h2>
          </div>
          <div className="right-desc">
            <p>Without structured systems, compliance becomes <br /> reactive, expensive and vulnerable. The gap <br /> between policy and operation is where contracts <br /> are lost.</p>
          </div>
        </div>

        <div className="problems-grid">
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src="images/document-img-h.svg" /></div>
            <div className="prob-text">Documentation without execution</div>
          </div>
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src="images/weak-cloud.svg" /></div>
            <div className="prob-text">Weak cloud security</div>
          </div>
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src="images/governance-gaps.svg" /></div>
            <div className="prob-text">Governance gaps</div>
          </div>
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src="images/poor-enforcement.svg" /></div>
            <div className="prob-text">Poor policy enforcement</div>
          </div>
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src={icon1} /></div>
            <div className="prob-text">Missing evidence</div>
          </div>
          <div className="problem-item fade-in">
            <div className="prob-icon"><img src="images/audit-exposure.svg" /></div>
            <div className="prob-text">Audit failure exposure</div>
          </div>
        </div>
      </section>

      <section className="risk-section">
        <div className="risk-left-panel">
          <span className="badge-red-tag"> <span className="dot-red"></span> TIME-SENSITIVE</span>
          <h2>Delayed Compliance can Cost You Contracts</h2>
          <p>Federal cybersecurity regulations continue to tighten. Contractors who fail to secure systems, implement controls and prepare for audits risk losing contract eligibility, revenue and market trust.</p>
          <Link to='/compliance' className="btn-red-action">Get Compliance Ready Now <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className="risk-right-grid">
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 01</span>
            <h4>Failed assessments</h4>
          </div>
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 02</span>
            <h4>Contract disqualification</h4>
          </div>
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 03</span>
            <h4>Revenue disruption</h4>
          </div>
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 04</span>
            <h4>Security vulnerabilities</h4>
          </div>
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 05</span>
            <h4>Weak Microsoft 365 configurations</h4>
          </div>
          <div className="risk-card fade-in">
            <span className="risk-num">Risk 06</span>
            <h4>Incomplete evidence systems</h4>
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="stats-banner-overlay"></div>
        <div className="stats-banner-content">
          <h3>From Strategic Assessments to full operational execution, Spartan transforms compliance requirements into measurable security systems that preserve revenue, contracts and competitive positioning.</h3>

          <div className="stats-counter-row">
            <div className="stat-box fade-in">
              <h2>30+</h2>
              <p>Years Experience</p>
            </div>
            <div className="stat-box fade-in">
              <h2>BG (Ret.)</h2>
              <p>Leadership</p>
            </div>
            <div className="stat-box fade-in">
              <h2>100%</h2>
              <p>Audit-Focused</p>
            </div>
            <div className="stat-box fade-in">
              <h2>CMMC 2.0</h2>
              <p>Specialists</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-header text-center">
          <span className="solution-pill"> <span className="dot-white"></span> THE SOLUTION</span>
          <h2>Spartan Builds Security Systems that Perform</h2>
        </div>

        <div className="solution-cards-grid">
          <div className="sol-card fade-in">
            <div className="sol-card-icon"><img src="images/compliance-training.svg" alt="" /></div>
            <h3>CMMC 2.0 Compliance Training</h3>
            <p>Structured cybersecurity learning programs designed to help organizations meet CMMC 2.0 compliance requirements through guided modules and assessments.</p>
          </div>
          <div className="sol-card fade-in">
            <div className="sol-card-icon"><img src="images/security-awareness.svg" alt="" /></div>
            <h3>Security Awareness & Workforce Readiness</h3>
            <p>Interactive LMS-based training that equips teams with practical cybersecurity knowledge, policy awareness, and secure operational practices.</p>
          </div>
          <div className="sol-card fade-in">
            <div className="sol-card-icon"><img src="images/audit-preparation.svg" alt="" /></div>
            <h3>Audit Preparation & Evidence Readiness</h3>
            <p>Training solutions focused on preparing organizations for federal audits with compliance-focused learning, documentation awareness, and readiness tracking.</p>
          </div>
          <div className="sol-card fade-in">
            <div className="sol-card-icon"><img src="images/certification.svg" alt="" /></div>
            <h3>Certification-Driven Learning Platform</h3>
            <p>Centralized LMS experience with role-based learning, progress tracking, quizzes, and certification workflows to validate cybersecurity training completion.</p>
          </div>
        </div>

        <div className="solution-footer-action text-center">
          <a href="https://lms.spartan-cs.com/" className="btn-white-secondary" target="_blank" >Start with an Assessment <i className="fas fa-arrow-right"></i></a>
        </div>
      </section>



      <section className="services-section">
        <div className="text-center section-header-margin">
          <span className="service-pill"><span className="dot-red"></span> OUR SERVICES </span>
          <h2>Strategic Cybersecurity & <br /> Compliance Services</h2>
          <p className="services-subtext">Structured compliance guidance and implementation support built for audit readiness and operational defensibility.</p>
        </div>

        <div className="services-cards-grid">
          <div className="service-image-card fade-in">
            <span className="card-number">01</span>
            <h3>CMMC 2.0 Readiness</h3>
            <p>Structured implementation guidance and assessment preparation aligned to CMMC 2.0 institutional requirements.</p>
          </div>
          <div className="service-image-card fade-in">
            <span className="card-number">02</span>
            <h3>NIST SP 800-171 Compliance</h3>
            <p>Security control alignment, governance support and operational readiness built around NIST SP 800-171 standards.</p>
          </div>
          <div className="service-image-card fade-in" >
            <span className="card-number">03</span>
            <h3>Audit Readiness & Evidence Preparation</h3>
            <p>Preparation of documentation, evidence and operational validation designed to withstand formal assessment scrutiny.</p>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="pillars-header-split">
          <div className="pillars-left-title">
            <span className="pillars-pill"> <span className="dot-red"></span> THE FRAMEWORK</span>
            <h2>Three Pillars of Operational Compliance</h2>
          </div>
          <div className="pillars-right-desc">
            <p>Each pillar is engineered to interlock - producing audit-ready evidence and sustainable security.</p>
          </div>
        </div>

        <div className="pillars-grid-row">
          <div className="pillar-column-card fade-in">
            <div className="pillar-card-head">
              <div className="pillar-icon-red"><img src={icon3} alt="" /></div>
              <h4>CMMC 2.0 Compliance</h4>
            </div>
            <ul className="pillar-list">
              <li><img src={checkBulletRed} alt="" /> Gap assessments</li>
              <li><img src={checkBulletRed} alt="" /> Readiness roadmaps</li>
              <li><img src={checkBulletRed} alt="" /> SSP creation</li>
              <li><img src={checkBulletRed} alt="" /> POAM development</li>
              <li><img src={checkBulletRed} alt="" /> Security controls implementation</li>
              <li><img src={checkBulletRed} alt="" /> Audit preparation</li>
            </ul>
          </div>

          <div className="pillar-column-card fade-in">
            <div className="pillar-card-head">
              <div className="pillar-icon-red"><img src={icon2} alt="" /></div>
              <h4>Microsoft 365 Security</h4>
            </div>
            <ul className="pillar-list">
              <li><img src={checkBulletRed} alt="" /> Identity management</li>
              <li><img src={checkBulletRed} alt="" /> Conditional access</li>
              <li><img src={checkBulletRed} alt="" /> Endpoint protection</li>
              <li><img src={checkBulletRed} alt="" /> Secure cloud configuration</li>
              <li><img src={checkBulletRed} alt="" /> Data governance</li>
              <li><img src={checkBulletRed} alt="" /> Compliance controls</li>
            </ul>
          </div>

          <div className="pillar-column-card fade-in">
            <div className="pillar-card-head">
              <div className="pillar-icon-red"><img src={icon4} alt="" /></div>
              <h4>Compliance Systems</h4>
            </div>
            <ul className="pillar-list">
              <li><img src={checkBulletRed} alt="" /> Governance frameworks</li>
              <li><img src={checkBulletRed} alt="" /> Policy architecture</li>
              <li><img src={checkBulletRed} alt="" /> Business systems</li>
              <li><img src={checkBulletRed} alt="" /> Documentation controls</li>
              <li><img src={checkBulletRed} alt="" /> Continuous monitoring</li>
              <li><img src={checkBulletRed} alt="" /> Executive accountability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="text-center section-header-margin">
          <span className="trust-pill"><span className="dot-red"></span> WHY SPARTAN</span>
          <h2>Why Federal Contractors Trust Spartan</h2>
          <p className="trust-subtext">Spartan combines military leadership, cybersecurity governance and real-world compliance execution to help organizations move beyond documentation into operational security.</p>
        </div>

        <div className="trust-boxes-grid">
          <div className="trust-box-card fade-in">
            <div className="trust-box-icon"><img src={icon5} alt="" /></div>
            <h4>Military Leadership</h4>
            <p>Led by Brigadier General (Ret.) Raphael Warren with two decades of executive security leadership.</p>
          </div>
          <div className="trust-box-card fade-in">
            <div className="trust-box-icon"><img src={icon6} alt="" /></div>
            <h4>Audit-Ready Systems</h4>
            <p>Compliance programs designed to produce measurable evidence that withstands federal audits.</p>
          </div>
          <div className="trust-box-card fade-in">
            <div className="trust-box-icon"><img src={icon7} alt="" /></div>
            <h4>Specialized Expertise</h4>
            <p>Focused on CMMC 2.0, Microsoft 365 security and sustainable compliance systems.</p>
          </div>
          <div className="trust-box-card fade-in">
            <div className="trust-box-icon"><img src={icon8} alt="" /></div>
            <h4>Contract Protection</h4>
            <p>Built to preserve eligibility, reduce risk and strengthen your competitive positioning.</p>
          </div>
        </div>
      </section>


      <section className="who-we-are-section">
        <div className="who-left-col">
          <span className="section-tag-red no-mar"><span className="dot-red"></span> WHO WE ARE</span>
          <h2>Compliance is not a Checklist. It's a Strategic Security System.</h2>

          <div className="strategic-checklist-box">
            <div className="checklist-row">
              <span className="chk-icon"><img src="images/check-icon-militry.svg" alt="" /></span>
              <span className="chk-text">Military precision to execution</span>
            </div>
            <div className="checklist-row">
              <span className="chk-icon"><img src="images/check-icon-militry.svg" alt="" /></span>
              <span className="chk-text">Governance-first strategy</span>
            </div>
            <div className="checklist-row">
              <span className="chk-icon"><img src="images/check-icon-militry.svg" alt="" /></span>
              <span className="chk-text">Operational compliance systems.</span>
            </div>
            <div className="checklist-row">
              <span className="chk-icon"><img src="images/check-icon-militry.svg" alt="" /></span>
              <span className="chk-text">Audit preparedness from day one</span>
            </div>
            <div className="checklist-row">
              <span className="chk-icon"><img src="images/check-icon-militry.svg" alt="" /></span>
              <span className="chk-text">Long-term resilience and oversight</span>
            </div>
          </div>
        </div>

        <div className="who-right-col">
          <div className="built-text">
            <p className="who-top-intro-text">
              Spartan was built to help federal contractors transform compliance requirements into operational security environments. Under Raphael Warren's leadership, Spartan delivers governance-first cybersecurity systems that align policy, execution and evidence.
            </p>
          </div>

          <div className="founder-card-container">
            <div className="founder-main-img">
              <img src="images/militory-man.svg" alt="Raphael Warren" />
            </div>

            <div className="founder-quote-content">
              <p className="quote-paragraph">"True compliance is operational. It produces evidence, withstands audits and protects the contracts our clients have fought to win."</p>
              <div className="founder-meta">
                <span className="meta-name">Raphael Warren</span>
                <span className="meta-title">Founder & CEO | Spartan Cyber Sec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="text-center section-header-margin">
          <span className="section-tag-red"><span className="dot-red"></span>OUR FOCUS</span>
          <h2>Protect Revenue. Preserve Contracts. Strengthen Security.</h2>
        </div>

        <div className="focus-grid">
          <div className="focus-card fade-in">
            <div className="focus-icon"><i className="fas fa-stamp"></i></div>
            <h4>Audit Readiness</h4>
            <p>Walk into any assessment with evidence in hand.</p>
          </div>
          <div className="focus-card fade-in">
            <div className="focus-icon"><i className="fas fa-file-signature"></i></div>
            <h4>Contract Protection</h4>
            <p>Protect the federal revenue you've already won.</p>
          </div>
          <div className="focus-card fade-in">
            <div className="focus-icon"><img src={icon9} alt="" /></div>
            <h4>Reduced Risk</h4>
            <p>Quantifiable reduction in compliance and breach exposure.</p>
          </div>
          <div className="focus-card fade-in">
            <div className="focus-icon"><img src={icon10} alt="" /></div>
            <h4>Security Resilience</h4>
            <p>Systems that perform under real-world adversarial pressure.</p>
          </div>
          <div className="focus-card fade-in">
            <div className="focus-icon"><i className="fas fa-user-tie"></i></div>
            <h4>Leadership Confidence</h4>
            <p>Executive oversight backed by clear governance.</p>
          </div>
          <div className="focus-card fade-in">
            <div className="focus-icon"><img src={icon11} alt="" /></div>
            <h4>Competitive Positioning</h4>
            <p>An operational advantage in federal procurement.</p>
          </div>
        </div>
      </section>

      <section className="process-flow-section">
        <div className="text-center process-header-block">
          <span className="section-tag-red"><span className="dot-red"></span>OUR PROCESS</span>
          <h2>From Assessment to Audit Readiness</h2>
          <p className="process-main-subtext">A predictable, evidence-driven engagement that moves your organization from uncertainty to operational compliance.</p>
        </div>

        <div className="process-linear-container">
          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Assess & Identify Gaps</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon red-tint"><img src={icon12} alt="" /></div>
              <p>We evaluate your current cybersecurity posture, identify compliance gaps, and deliver a blueprint of your organization status against CMMC 2.0 and NIST 800-171 requirements.</p>
            </div>
          </div>

          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Build Strategic Roadmap</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon"><img src={icon13} alt="" /></div>
              <p>We develop a clear, prioritized compliance strategy aligned with your business, outlining required controls, timelines, and implementation steps.</p>
            </div>
          </div>
          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Implement & Secure Systems</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon"><img src={icon1} alt="" /></div>
              <p>We design security controls, harden your Microsoft 365 environment, and establish governance systems to secure workflows & operational infrastructure.</p>
            </div>
          </div>

          <div className="process-linear-column">
            <div className="step-top-header">
              <h3>Validate & Prepare For Audit</h3>
            </div>
            <div className="step-bottom-card">
              <div className="step-card-icon"><img src={icon14} alt="" /></div>
              <p>We document evidence, validate control effectiveness, and prepare your organization for audit readiness with confidence and complete accountability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="text-center section-header-margin">
          <span className="section-tag-red"><span className="dot-red"></span>INDUSTRIES</span>
          <h2>Built for Federal Contractors Across Critical Industries</h2>
          <p className="industries-top-desc">Spartan partners with federal contractors and subcontractors across high-stakes industries where cybersecurity compliance, operational resilience, and contract eligibility are critical to long-term success.</p>
        </div>

        <div className="industry-cards-row">
          <div className="industry-image-box fade-in" style={{ backgroundImage: "url('../images/built-1.svg')" }}>
            <span className="ind-num">01</span>
            <h3>Defense Contractors</h3>
            <p>Secure pipeline and win subcontracts with CMMC 2.0 readiness, security controls, and advanced defenses.</p>
          </div>
          <div className="industry-image-box fade-in" style={{ backgroundImage: "url('../images/built-2.svg')" }}>
            <span className="ind-num">02</span>
            <h3>Aerospace & Aviation</h3>
            <p>Strengthening advanced system protection for organization operating within sensitive federal and defense ecosystems.</p>
          </div>
          <div className="industry-image-box fade-in" style={{ backgroundImage: "url('../images/built-3.svg')" }}>
            <span className="ind-num">03</span>
            <h3>Government Subcontractors</h3>
            <p>Providing seamless compliance tracking that ensures nesting within a supplier frameworks securely.</p>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="text-center section-header-margin">
          <span className="badge-red-pill"><span className="dot-red"></span>RESOURCES</span>
          <h2>Compliance Intelligence that Keeps You Ahead</h2>
          <p className="resources-subtext">Briefings, guides and tactical playbooks for federal contractors.</p>
        </div>

        <div className="resources-grid">
          <div className="resource-card fade-in">
            <div className="res-img-box">
              <img src="images/cmm-img-1.svg" alt="CMMC 2.0 Readiness Guide" />
            </div>
            <h3>CMMC 2.0 Readiness Guide</h3>
            <div className="res-meta">
              <span className="res-date">JUL 5, 2025</span>
              <span className="res-divider">—</span>
              <Link to="/blog" className="res-link">READ MORE</Link>
            </div>
          </div>
          <div className="resource-card fade-in">
            <div className="res-img-box">
              <img src="images/micro-soft.svg" />
            </div>
            <h3>Microsoft 365 Security Checklist</h3>
            <div className="res-meta">
              <span className="res-date">MAR 12, 2025</span>
              <span className="res-divider">—</span>
              <Link to="/blog" className="res-link">READ MORE</Link>
            </div>
          </div>
          <div className="resource-card fade-in">
            <div className="res-img-box">
              <img src="images/fedel.svg" alt="Federal Compliance Updates" />
            </div>
            <h3>Federal Compliance Updates</h3>
            <div className="res-meta">
              <span className="res-date">MAR 05, 2025</span>
              <span className="res-divider">—</span>
              <Link to="/blog" className="res-link">READ MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="faq-section">
        <div className="faq-left-block">
          <span className="badge-red-pill">FAQ</span>
          <h2>You Have Questions.<br />We Have Answers.</h2>
          <p>Not sure where to start? Book a free 30-minute discovery call and let's figure it out together.</p>
          <a href="#" className="btn-red-action">Schedule a Call <i className="fas fa-arrow-right"></i></a>
        </div>

        <div className="faq-accordion-container">
          <div className="accordion-item active">
            <div className="accordion-header">
              <h4>What is CMMC 2.0?</h4>
              <span className="accordion-icon"></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-body-content">
                The Cybersecurity Maturity Model Certification (CMMC) 2.0 is the DoD's framework for safeguarding controlled unclassified information across the defense industrial base.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <h4>How does Microsoft 365 security impact compliance?</h4>
              <span className="accordion-icon"></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-body-content">
                Proper configuration of Microsoft 365 ensures data governance, identity protection, and access logging, which align directly with federal compliance baselines.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <h4>How long does readiness take?</h4>
              <span className="accordion-icon"></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-body-content">
                Depending on your current framework infrastructure and organization scope, readiness typically takes anywhere from 3 to 9 months of active implementation.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <h4>What documentation is required?</h4>
              <span className="accordion-icon"></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-body-content">
                You need a comprehensive System Security Plan (SSP), Plan of Action and Milestones (POA&M), policy records, and consistent operation logs.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <h4>Can Spartan prepare us for audits?</h4>
              <span className="accordion-icon"></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-body-content">
                Yes, Spartan engineers end-to-end operational readiness by simulating audits, mapping required evidence controls, and validating system integrity.
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section className="faq-section">
        <div className="faq-left-block">
          <span className="badge-red-pill no-mar"><span className="dot-red"></span>FAQ</span>
          <h2>You Have Questions.<br />We Have Answers.</h2>
          <p>Not sure where to start? Book a free 30-minute discovery call and let's figure it out together.</p>
          <Link to="/contact-us" className="btn-red-action">Schedule a Call <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className="faq-accordion-container">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`accordion-item ${isOpen ? 'active' : ''}`}
              >
                <div 
                  className="accordion-header" 
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <h4>{faq.question}</h4>
                  <span className="accordion-icon"></span>
                </div>
                
                <div 
                  className="accordion-body"
                  style={{
                    // Dynamically calculates the exact pixel height required by the text
                    maxHeight: isOpen ? `${document.getElementById(`faq-content-${index}`)?.scrollHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Giving the inner element a matching ID allows our maxHeight calculation to read it perfectly */}
                  <div id={`faq-content-${index}`} className="accordion-body-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomeScreen