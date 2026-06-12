import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/aboutScreen.css";

// --- FIGMA EXPORT IMAGE PATH PLACEHOLDERS ---
import leaderImg1 from "../assets/images/aboutScreen/leaderImg1.png";
import leaderImg2 from "../assets/images/aboutScreen/leaderImg2.png";
import leaderImg3 from "../assets/images/aboutScreen/leaderImg3.png";
import rings from "../assets/images/aboutScreen/rings.png";

import hammer from "../assets/images/cmmcScreen/hammer.png";
import purse from "../assets/images/securityScreen/purse.png";
import people from "../assets/images/securityScreen/people.png";
import security from "../assets/images/complianceScreen/icon1.png";
import icon6 from "../assets/images/complianceScreen/icon6.png"
import { Link } from "react-router-dom";

const AboutScreen = () => {

  const highlights = [
    { title: "Cyber Operations", desc: "Decades of military and federal cyber defense leadership.", image: security },
    { title: "Federal Prosecution", desc: "Investigative and litigation experience across cybercrime and national security.", image: hammer },
    { title: "Executive Governance", desc: "Board-level advisory across regulated and high-risk industries.", image: icon6 },
    { title: "Compliance Execution", desc: "CMMC 2.0, NIST SP 800-171, and ISO/IEC 27001 readiness delivery.", image: purse }
  ];

  const team = [
    {
      image: leaderImg1,
      rank: "FOUNDER AND PRESIDENT",
      name: "Brigadier General (Ret.) Raphael Warren - MS, CIS",
      desc: "Brigadier General (Ret.) Raphael Warren is an executive cybersecurity governance advisor, retired senior military officer and former federal agent with more than three decades of experience in cybersecurity leadership, federal operations and executive risk management."
    },
    {
      image: leaderImg2,
      rank: "Vice President, Legal",
      name: "Colonel (Ret.) Joe M. Romero - JD",
      desc: "Colonel (Ret.) Joe M. Romero is a former federal prosecutor and legal strategist with extensive experience in cybersecurity law, federal investigations and executive risk exposure."
    },
    {
      image: leaderImg3,
      rank: "Vice President, Operations",
      name: "Lieutenant Colonel (Ret.) Tyrone Finch - BS",
      desc: "Lieutenant Colonel (Ret.) Tyrone Finch is a cybersecurity compliance and operational execution strategist specializing in CMMC 2.0, NIST SP 800-171, ISO/IEC 27001, and C3PAO readiness preparation."
    }
  ];

  const advantages = [
    { icon: rings, title: "Principal-Led Engagements", desc: "Every engagement is led directly by senior principals - not delegated to junior staff. Executives work with the people who own the outcome." },
    { icon: security, title: "Defensible by Design", desc: "Programs are built to withstand contracting officer review, third-party assessment, regulatory inquiry, and litigation discovery." },
    { icon: hammer, title: "Legal & Regulatory Fluency", desc: "Advisory recommendations are shaped by federal enforcement experience, not theoretical compliance posture." },
    { icon: people, title: "Mission-Aligned Execution", desc: "We translate regulatory frameworks into operational processes that match how your organization actually functions." },
    { icon: purse, title: "Confidential & Discreet", desc: "Sensitive engagements are handled with the operational discretion expected of senior military and federal practitioners." },
    { icon: icon6, title: "Senior-Only Bench", desc: "Retired flag officers, federal prosecutors and field-grade cyber leaders - no offshore handoffs or boilerplate deliverables." }
  ];

  return (
    <>
      <Header />
      <main className="about-main">

        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <span>About</span> <span className="separator">|</span> <span style={{color: "white"}}>Home</span>
              </div>
              <h1 className="blog-hero-title">About Spartan Cyber<br /> Security</h1>
              <p className="blog-hero-subtitle">
              An executive advisory firm specializing in cybersecurity governance, regulatory alignment and defensible operational execution for organizations operating in regulated and high-risk environments.
              </p>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW INTRO SECTION */}
        <section className="about-intro-section">
          <div className="custom-container">
            <div className="section-tag-wrapper justify-content-start">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>COMPANY OVERVIEW
              </span>
            </div>
            <div className="row mt-3">
              <div className="col-xl-8 col-lg-10">
                <h2 className="about-intro-heading">
                  A Senior Advisory Firm Built for Regulated, High-Risk Environments.
                </h2>

              </div>

              <div className="col-xl-12 col-lg-10">
              <p className="about-intro-text">
              Spartan Cyber Security LLC is an executive advisory firm led by senior leaders with backgrounds spanning military command, federal prosecution, cyber operations and enterprise compliance execution.<br />
                  {/* Our work centers on ensuring that cybersecurity programs are structured to withstand contractual, regulatory and third-party assessment scrutiny - from CMMC 2.0 certification to NIST SP 800-171 alignment, ISO/IEC 27001 readiness and board-level governance reporting.<br/>
                Spartan is headquartered to serve federal contractors, defense industrial base organizations and regulated enterprises navigating Department of Defense enforcement, executive risk exposure and evolving compliance obligations.                 */}
                </p>
                <p className="about-intro-text">
                Our work centers on ensuring that cybersecurity programs are structured to withstand contractual, regulatory and third-party assessment scrutiny - from CMMC 2.0 certification to NIST SP 800-171 alignment, ISO/IEC 27001 readiness and board-level governance reporting.
                </p>

                <p className="about-intro-text">
                Spartan is headquartered to serve federal contractors, defense industrial base organizations and regulated enterprises navigating Department of Defense enforcement, executive risk exposure and evolving compliance obligations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PRINCIPALS & LEADERSHIP (DARK SECTION) */}
        {/* 3. PRINCIPALS & LEADERSHIP (DARK SECTION) - Matches Section - Values.jpg */}
        <section className="about-leadership-section">
          <div className="custom-container">

            {/* Centered Top Header Badge Block */}
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag">
                <span className="fallback-red-dot"></span>LEADERSHIP & EXPERTISE
              </span>
            </div>

            <h2 className="dark-section-heading text-center">
              Principals from Military Command, Federal <br /> Prosecution & Cyber Operations.
            </h2>

            <p className="dark-section-subheading text-center">
            Spartan's bench is composed exclusively of senior practitioners with operational
            track records in the environments we advise.          </p>

            {/* 4-Column Horizontal Stat Highlights Grid Array */}
            <div className="highlights-stats-matrix-grid">
              {highlights.map((item, idx) => (
                <div className="highlight-stat-card" key={idx}>
                  <div className="highlight-bullet-box">
                    <img src={item.image} alt="" className="highlight-card-vector-icon" />
                  </div>
                  <h5 className="highlight-card-title">{item.title}</h5>
                  <p className="highlight-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3-Column Profile Grid with Seamless Bottom Photo Merging Effect */}
            <div className="leader-profiles-canvas-grid">
              {team.map((member, idx) => (
                <div className="leader-profile-card" key={idx}>

                  {/* Photo Frame Container with Absolute Bottom Gradient Blend Overlay */}
                  <div className="leader-image-container">
                    <img src={member.image} alt={member.name} className="leader-photo" />
                    {/* The crucial blending element layer */}
                    <div className="leader-fade-overlay" />
                  </div>

                  {/* Grounded Typography Content Metadata Panel */}
                  <div className="leader-info-block">
                    <span className="leader-rank-tag"><span className="fallback-red-dot" style={{ marginRight: "4px" }}></span>{member.rank}</span>
                    <h4 className="leader-name">{member.name}</h4>
                    <p className="leader-bio">{member.desc}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. WHY ORGANIZATIONS ENGAGE SPARTAN */}
        <section className="advantages-light-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>WHY SPARTAN
              </span>
            </div>
            <h2 className="section-main-heading text-center mb-2">Why organizations engage Spartan.</h2>
            <p className="section-sub-heading text-center mb-5">
            Spartan exists for executives who cannot afford a failed assessment, a regulatory referral
or a cybersecurity program that collapses under scrutiny.
            </p>

            <div className="row g-4 mt-2">
              {advantages.map((adv, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="advantage-grid-card">
                    <div className="advantage-icon-wrapper">
                      <img src={adv.icon} alt="" className="advantage-figma-icon" onError={(e) => { e.target.style.display = 'none' }} />
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h4 className="advantage-card-title">{adv.title}</h4>
                    <p className="advantage-card-desc">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section className="about-cta-section">
          <div className="custom-container">
            <div className="about-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>WORK WITH US
              </span>
              <h2 className="cta-banner-title">
                Engage Spartan's principal-led <br /> advisory team.
              </h2>
              <p className="cta-banner-desc">
              A confidential working session with senior leadership to scope your governance, compliance and assessment posture.              </p>
              {/* <div className="cta-buttons-group">
                <button className="cta-btn-white">Schedule Consultation <span>→</span></button>
                <button className="cta-btn-outline">Explore Compliance</button>
              </div> */}

              <div className="cta-buttons-group">
                <Link to="/contact-us" className="cta-btn-white linknav">Schedule Consultation <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  </span></Link>
                <Link to="/compliance" className="cta-btn-outline linknav">Explore Compliance</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AboutScreen;