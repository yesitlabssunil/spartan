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
    { title: "Cyber Operations", desc: "Decades of military and federal cyber defense authority.", image: security },
    { title: "Federal Prosecution", desc: "In-depth processing of digital corporate fraud, espionage, and national security matters.", image: hammer },
    { title: "Executive Governance", desc: "Technical policy structuring and risk operations deployment across multi-tier structures.", image: icon6 },
    { title: "Compliance Execution", desc: "Standardized framework execution for NIST, CMMC, and federal compliance mandates.", image: purse }
  ];

  const team = [
    {
      image: leaderImg1,
      rank: "BRIGADIER GENERAL (RET.)",
      name: "Raphael Warren - MS, CIS",
      desc: "Directs high-level defense frameworks. Former commanding authority over critical national security networks, coordinating operations across multi-theater defense platforms."
    },
    {
      image: leaderImg2,
      rank: "COLONEL (RET.)",
      name: "Joe W. Romero - JD",
      desc: "Coordinates legal governance and security implementation strategies. Former federal advocate specializing in data systems liability and regulatory defense structures."
    },
    {
      image: leaderImg3,
      rank: "LIEUTENANT COLONEL (RET.)",
      name: "Tyrone Finch - BS",
      desc: "Manages systems operations and tactical technical verification. Expert in systems compliance automation and structural defense mechanics."
    }
  ];

  const advantages = [
    { icon: rings, title: "Principal-Led Engagements", desc: "Senior advisors drive your program implementation directly, eliminating gaps left by outsourced consulting hands." },
    { icon: security, title: "Defensible by Design", desc: "We deploy rigorous control infrastructure capable of withstanding strict validation audits and continuous inspection models." },
    { icon: hammer, title: "Legal & Regulatory Fluency", desc: "Aligning complex technical parameters with standard defense procurement clauses and contractual obligations." },
    { icon: people, title: "Mission-Aligned Performance", desc: "We configure security frameworks to act as operational enablers, securing contracts while maintaining workflow efficiency." },
    { icon: purse, title: "Confidential & Discrete", desc: "Operating under secure protocols to ensure your organizational vulnerabilities and proprietary designs remain isolated." },
    { icon: icon6, title: "Systemic Accountability", desc: "Providing structured operational dashboards that offer real-time health visibility to corporate executive boards." }
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
                <span>About</span> <span className="separator">|</span> <span>Home</span>
              </div>
              <h1 className="blog-hero-title">About Spartan Cyber Security</h1>
              <p className="blog-hero-subtitle">
                An expert compliance and engineering collective delivering advanced framework stabilization,
                risk reduction, and ironclad defense architectures for federal contractors.
              </p>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW INTRO SECTION */}
        <section className="about-intro-section">
          <div className="custom-container">
            <div className="section-tag-wrapper justify-content-start">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>OUR MISSION PROFILE
              </span>
            </div>
            <div className="row mt-3">
              <div className="col-xl-8 col-lg-10">
                <h2 className="about-intro-heading">
                  A Senior Advisory Firm Built for Regulated, High-Risk Environments.
                </h2>
                <p className="about-intro-text">
                  Spartan Cyber Security LLC is an executive advisory firm led by senior leaders with backgrounds spanning military command, federal prosecution, cyber operations and enterprise compliance execution.<br />
                  {/* Our work centers on ensuring that cybersecurity programs are structured to withstand contractual, regulatory and third-party assessment scrutiny - from CMMC 2.0 certification to NIST SP 800-171 alignment, ISO/IEC 27001 readiness and board-level governance reporting.<br/>
                Spartan is headquartered to serve federal contractors, defense industrial base organizations and regulated enterprises navigating Department of Defense enforcement, executive risk exposure and evolving compliance obligations.                 */}
                </p>
                <p className="about-intro-text">
                  Our methodologies translate complex legal data handling directives (NIST SP 800-171, CMMC 2.0, DFARS) into clean operational pathways that engineering teams can execute flawlessly.
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
                <span className="fallback-red-dot"></span>LEADERSHIP & EXPERIENCE
              </span>
            </div>

            <h2 className="dark-section-heading text-center">
              Principals from Military Command, Federal <br /> Prosecution & Cyber Operations.
            </h2>

            <p className="dark-section-subheading text-center">
              Our leadership team brings real-world defensive insights from high-stakes operational arenas.
            </p>

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
                <span className="fallback-red-dot"></span>SPARTAN ADVANTAGE
              </span>
            </div>
            <h2 className="section-main-heading text-center mb-2">Why organizations engage Spartan.</h2>
            <p className="section-sub-heading text-center mb-5">
              Strategic execution designed for enterprises that cannot afford operational interruption.
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
                <span className="fallback-red-dot"></span>Work With Us
              </span>
              <h2 className="cta-banner-title">
                Engage Spartan's principal-led <br /> advisory team.
              </h2>
              <p className="cta-banner-desc">
                Review your active contract parameters and configure a defensible lifecycle compliance architecture.
              </p>
              {/* <div className="cta-buttons-group">
                <button className="cta-btn-white">Schedule Consultation <span>→</span></button>
                <button className="cta-btn-outline">Explore Compliance</button>
              </div> */}

              <div className="cta-buttons-group">
                <Link to="/contact-us" className="cta-btn-white linknav">Schedule Consultation <span>→</span></Link>
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