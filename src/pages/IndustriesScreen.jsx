import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/industryScreen.css";

// --- PLACEHOLDER IMAGE PATHS (Replace these with your actual figma exports) ---
import envIcon1 from "../assets/images/industryScreen/env-icon1.png";
import envIcon2 from "../assets/images/industryScreen/env-icon2.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";
import envIcon4 from "../assets/images/industryScreen/env-icon4.png";
import startBullet from "../assets/images/approachScreen/startBullet.png";

import industryImg1 from "../assets/images/industryScreen/construction.jpg";
import industryImg2 from "../assets/images/industryScreen/defense.jpg";
import industryImg3 from "../assets/images/industryScreen/aviation.jpg";
import industryImg4 from "../assets/images/industryScreen/engineering.jpg";
import industryImg5 from "../assets/images/industryScreen/manufacturing.jpg";
import { Link } from "react-router-dom";

const IndustriesScreen = () => {
  
  const environments = [
    { icon: envIcon1, title: "DOD Prime Contractors", desc: "Direct contract holders managing CUI." },
    { icon: envIcon2, title: "Subcontractors", desc: "Tier-2 and Tier-3 supply chain partners." },
    { icon: envIcon3, title: "Cloud & MSP Providers", desc: "Service providers in the DIB." },
    { icon: envIcon4, title: "Federal Civilian Agencies", desc: "NIST 800-53 and FISMA aligned." }
  ];

  const sectors = [
    {
      title: "Construction & Federal Infrastructure",
      desc: "General contractors, design-build firms, and A&E teams delivering federal, MILCON, and classified infrastructure projects.",
      points: [
        "CUI protection for site plans, CAD files, and project schedules",
        "Subcontractor and base-partner flowdown management",
        "Field offices and mobile workforce hardening (SCCA / RPDC)"
      ],
      image: industryImg1,
      imageRight: true // Image on the right side
    },
    {
      title: "Defense & Aerospace",
      desc: "Prime and subcontractor support across DoD weapon systems and platforms.",
      points: [
        "CUI segmentation across engineering data",
        "ITAR aligned access controls",
        "Subcontractor flowdown management"
      ],
      image: industryImg2,
      imageRight: false // Image on the left side (Alternating)
    },
    {
      title: "Aviation & Logistics",
      desc: "Supply chain and logistics partners moving CUI across the DIB.",
      points: [
        "Logistics data protection",
        "Multi-site compliance posture",
        "Vendor risk management"
      ],
      image: industryImg3,
      imageRight: true
    },
    {
      title: "Engineering & R&D",
      desc: "Research Organizations handling sensitive controlled technical data.",
      points: [
        "Research intellectual property",
        "Lab and SCADA device control",
        "Project controlled data handling"
      ],
      image: industryImg4,
      imageRight: false
    },
    {
      title: "Advanced Manufacturing",
      desc: "Precision manufacturers producing components for DoD and Federal supply chains.",
      points: [
        "CMMC segmentation for shop floors",
        "CAD and CAM data protection",
        "Supplier portal hardening"
      ],
      image: industryImg5,
      imageRight: true
    }
  ];

  return (
    <>
      <Header />
      <main className="industries-main">

        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content blog-hero-content1">
              <div className="blog-breadcrumb">
                <span>Industries</span> <span className="separator">|</span> <span>Home</span>
              </div>
              <h1 className="blog-hero-title">Built for Federal Contractors across critical industries.</h1>
              <p className="blog-hero-subtitle">
              From prime defense contractors to specialized R&D labs - our compliance program<br/>
              adapts to your contract portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* 2. ENVIRONMENTS SECTION */}
        <section className="environments-section">
          <div className="custom-container">
            <div className="section-tag-wrapper justify-content-start">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>WHO WE SERVE
              </span>
            </div>
            <h2 className="section-main-heading mb-5">Federal compliance environments, end to end.</h2>

            <div className="row g-4">
              {environments.map((env, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="env-card">
                    <div className="env-icon-box">
                      <img src={env.icon} alt="" className="env-figma-icon" onError={(e)=>{e.target.style.display='none'}} />
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h5 className="env-title">{env.title}</h5>
                    <p className="env-desc">{env.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SECTOR DETAILS (ALTERNATING LAYOUTS) */}
        <section className="sectors-detail-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>VERTICALS
              </span>
            </div>
            <h2 className="section-main-heading text-center mb-5">Tailored to your sector's specific demands.</h2>

            <div className="sectors-stack">
              {sectors.map((sec, idx) => (
                <div className={`row sector-row align-items-stretch g-0 ${sec.imageRight ? "" : "flex-row-reverse"}`} key={idx}>
                  
                  {/* Text Column */}
                  <div className="col-lg-6">
                    <div className="sector-text-block">
                      <h3 className="sector-title">{sec.title}</h3>
                      <p className="sector-desc">{sec.desc}</p>
                      <ul className="sector-points-list">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <span className="red-arrow"><img src={startBullet} alt="" /></span> 
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="col-lg-6">
                    <div className="sector-image-block">
                      <img src={sec.image} alt={sec.title} className="sector-display-img" />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION SECTION */}
        <section className="industries-cta-section">
          <div className="custom-container">
            <div className="industries-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                See how we'd structure compliance <br /> for your industry.
              </h2>
              <p className="cta-banner-desc">
                A 45-minute working session tailored to your contract portfolio.
              </p>
              <div className="cta-buttons-group">
                <Link to="/contact-us" className="cta-btn-white" style={{textDecoration:"none"}}>Schedule Consultation <span>→</span></Link>
                <Link to="/compliance" className="cta-btn-outline" style={{textDecoration:"none"}}>Explore Compliance</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default IndustriesScreen;