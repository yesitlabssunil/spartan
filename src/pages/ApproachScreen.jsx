import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/approachScreen.css";

// Assuming you have a small red page icon exported for the 3 methodology cards
import docIcon from "../assets/images/approachScreen/doc-icon.png"; 
import startBullet from "../assets/images/approachScreen/startBullet.png"; 

const ApproachScreen = () => {
  
  const disciplines = [
    {
      title: "Execution – Driven Security",
      desc: "Controls are built into how your business operates – not bolted on for an audit.",
      points: [
        "Network segmentation & identity-firm access",
        "Endpoint hardening on day-one rollouts",
        "Change control wired into ticketing",
        "Operational runbooks owned by your team"
      ]
    },
    {
      title: "Evidence – Based Validation",
      desc: "Every control produces traceable evidence as a byproduct of execution - not a separate workstream.",
      points: [
        "Continuous control validation",
        "Endpoint hardening on day-one rollouts",
        "Auto-captured artifacts mapped to NIST 800-171",
        "Executive reporting from live evidence"
      ]
    },
    {
      title: "Audit – Ready Framework",
      desc: "A standing posture that withstands C3PAO scrutiny any week of the year - not just at assessment time.",
      points: [
        "SSP structured to assessor sampling logic",
        "SPRS score tied to operational reality",
        "Mock-assessment defense rehearsals",
        "On-site assessor support & finding response"
      ]
    }
  ];

  const weeks = [
    { num: "01", label: "Week", title: "Strategic Assessment", desc: "Scope, gap analysis and contract risk profile." },
    { num: "02", label: "Week", title: "Architecture & Plan", desc: "SSP, POAM and remediation roadmap signed off." },
    { num: "03", label: "Week", title: "Implementation", desc: "Controls deployed, evidence captured, operations stood up." },
    { num: "04", label: "Week", title: "Audit Readiness", desc: "Mock assessment, evidence package, executive sign-off." }
  ];

  const principles = [
    { title: "Senior-led", desc: "No junior handoffs. Senior advisors from kickoff to handoff." },
    { title: "Audit-first", desc: "Every control built to withstand assessor scrutiny on day one." },
    { title: "Evidence-based", desc: "Documentation is generated as a byproduct of execution." },
    { title: "Knowledge transfer", desc: "Your team owns the system after we leave - no lock-in." }
  ];

  return (
    <>
      <Header />
      <main className="approach-main">
        
        {/* 1. HERO SECTION (Matches your Blog/Contact background perfectly) */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <span>Approach</span> <span className="separator">|</span> <span>Home</span>
              </div>
              <h1 className="blog-hero-title">A method, not a checklist.</h1>
              <p className="blog-hero-subtitle">
                Three operating disciplines and a disciplined four-stage program - engineered to 
                assessor expectations and operated by your team after handoff.
              </p>
            </div>
          </div>
        </div>

        {/* 2. THREE DISCIPLINES SECTION */}
        <section className="disciplines-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag"><span className="fallback-red-dot"></span>METHODOLOGY</span>
            </div>
            <h2 className="section-main-heading text-center">Three disciplines of operational compliance.</h2>
            <p className="section-sub-heading text-center">
              Execution, evidence and audit-readiness engineered into one performance system.
            </p>

            <div className="row g-4 mt-4">
              {disciplines.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="discipline-card">
                    <div className="discipline-icon-container">
                      <img src={docIcon} alt="Icon" className="discipline-card-icon" onError={(e)=>{e.target.style.display='none'}} />
                      {/* Fallback micro fallback marker if image isn't loaded */}
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h4 className="discipline-card-title">{item.title}</h4>
                    <p className="discipline-card-desc">{item.desc}</p>
                    <hr className="discipline-divider" />
                    <ul className="discipline-points-list">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx}>
                          <span className="red-plus"><img src={startBullet} alt="" /></span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TIMELINE WEEKS SECTION */}
        <section className="timeline-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag"> <span className="fallback-red-dot"></span>ENGAGEMENT</span>
            </div>
            <h2 className="section-main-heading text-center">
              From assessment to audit readiness in <br className="d-none d-md-block" /> 8–12 weeks.
            </h2>
            <p className="section-sub-heading text-center">
              A four-stage program with weekly executive checkpoints.
            </p>

            <div className="row g-4 mt-5">
              {weeks.map((stage, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="timeline-week-card">
                    <div className="week-header-flex">
                      <span className="week-number">{stage.num}</span>
                      <span className="week-label">{stage.label}</span>
                    </div>
                    <h4 className="week-card-title">{stage.title}</h4>
                    <p className="week-card-desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OPERATING PRINCIPLES (DARK SECTION) */}
        <section className="principles-dark-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag"><span className="fallback-red-dot"></span>OPERATING PRINCIPLES</span>
            </div>
            <h2 className="dark-section-heading text-center">How we work, every engagement.</h2>
            
            <div className="row g-4 mt-5">
              {principles.map((item, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="principle-dark-card">
                    <div className="red-horizontal-bar"></div>
                    <h5 className="principle-card-title">{item.title}</h5>
                    <p className="principle-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section className="approach-cta-section">
          <div className="custom-container">
            <div className="approach-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3"><span className="fallback-red-dot"></span>GET STARTED</span>
              <h2 className="cta-banner-title">
                See the approach applied to <br /> your contracts.
              </h2>
              <p className="cta-banner-desc">
                A 45-minute working session that maps our method to your starting position.
              </p>
              <div className="cta-buttons-group">
                <button className="cta-btn-white">Schedule Consultation <span>→</span></button>
                <button className="cta-btn-outline">Explore Compliance</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ApproachScreen;