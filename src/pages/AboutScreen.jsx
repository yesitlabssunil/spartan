import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/aboutScreen.css";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

// --- FIGMA EXPORT IMAGE PATH PLACEHOLDERS ---
import leaderImg1 from "../assets/images/aboutScreen/leaderImg1.png";
import leaderImg2 from "../assets/images/aboutScreen/leaderImg2.png";
import leaderImg3 from "../assets/images/aboutScreen/leaderImg3.png";
import rings from "../assets/images/aboutScreen/rings.png";

import hammer from "../assets/images/cmmcScreen/hammer.png";
import purse from "../assets/images/securityScreen/purse.png";
import people from "../assets/images/securityScreen/people.png";
import security from "../assets/images/complianceScreen/icon1.png";
import icon6 from "../assets/images/complianceScreen/icon6.png";
import { Link } from "react-router-dom";
import { aboutScreenData } from "../redux/slices/homeSlice";
import SEO from "../component/SEO";
const AboutScreen = () => {
  const dispatch = useDispatch();
  const { aboutData, loading } = useSelector((state) => state.home);
  // console.log("first111", aboutData);

  useEffect(() => {
    dispatch(aboutScreenData());
  }, [dispatch]);

  const highlights = [security, hammer, icon6, purse];
  const advantages = [rings, security, hammer, people, purse, icon6];

  return (
    <>
      <SEO
        title="About Spartan Cyber Security | CMMC & Cybersecurity Experts"
        description="Learn about Spartan Cyber Security, an executive advisory firm helping federal contractors and regulated organizations strengthen cybersecurity, compliance, and audit readiness."
        url="https://spartan-cs.com/about"
      />
      <Header />
      <main className="about-main">
        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
               <Link to="/" style={{textDecoration: "none"}}> <span style={{ color: "white" }}>Home</span> </Link> <span className="separator">|</span>{" "}
                <span>About</span>
              </div>
              <h1 className="blog-hero-title blog-hero-title1">
                {aboutData?.about?.heading}
              </h1>
              <p className="blog-hero-subtitle">
                {aboutData?.about?.paragraph}
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
                  {aboutData?.company?.heading}
                </h2>
              </div>

              <div className="col-xl-12 col-lg-10">
                {aboutData?.company?.paragraph?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}


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

            <h2 className="dark-section-heading text-center custom-container2">
              {aboutData?.leadership?.heading}
            </h2>

            <p className="dark-section-subheading text-center">
              {aboutData?.leadership?.paragraph}{" "}
            </p>

            {/* 4-Column Horizontal Stat Highlights Grid Array */}
            <div className="highlights-stats-matrix-grid">
              {aboutData?.leadership?.content?.map((item, idx) => (
                <div className="highlight-stat-card" key={idx}>
                  <div className="highlight-bullet-box">
                    <img
                      src={highlights[idx]}
                      alt=""
                      className="highlight-card-vector-icon"
                    />
                  </div>
                  <h5 className="highlight-card-title">{item.title}</h5>
                  <p className="highlight-card-desc">{item.description}</p>
                </div>
              ))}
            </div>

            {/* 3-Column Profile Grid with Seamless Bottom Photo Merging Effect */}
            <div className="leader-profiles-canvas-grid">
              {aboutData?.leadership?.cards?.map((member, idx) => (
                <div className="leader-profile-card" key={idx}>
                  {/* Photo Frame Container with Absolute Bottom Gradient Blend Overlay */}
                  <div className="leader-image-container">
                    <img
                      src={`${IMAGE_URL}/${member?.image}`}
                      alt={member?.title}
                      className="leader-photo"
                    />
                    {/* The crucial blending element layer */}
                    <div className="leader-fade-overlay" />
                  </div>

                  {/* Grounded Typography Content Metadata Panel */}
                  <div className="leader-info-block">
                    <span className="leader-rank-tag">
                      <span
                        className="fallback-red-dot"
                        style={{ marginRight: "4px" }}
                      ></span>
                      {member?.rank}
                    </span>
                    <h4 className="leader-name">{member?.title}</h4>
                    <p className="leader-bio">{member?.description}</p>
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
            <h2 className="section-main-heading text-center mb-2">
              {aboutData?.spartan?.heading}
            </h2>
            <p className="section-sub-heading text-center mb-5">
              {aboutData?.spartan?.paragraph}
            </p>

            <div className="row g-4 mt-2">
              {aboutData?.spartan?.data?.map((adv, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="advantage-grid-card">
                    <div className="advantage-icon-wrapper">
                      <img
                        src={advantages[idx]}
                        alt=""
                        className="advantage-figma-icon"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h4 className="advantage-card-title">{adv.title}</h4>
                    <p className="advantage-card-desc">{adv.description}</p>
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
                {/* Engage Spartan's principal-led <br /> advisory team. */}
                {aboutData?.work?.heading}
              </h2>
              <p className="cta-banner-desc">{aboutData?.work?.paragraph} </p>

              <div className="cta-buttons-group">
                <Link to="/contact-us" className="cta-btn-white linknav">
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
                <Link to="/compliance-systems" className="cta-btn-outline linknav">
                  Explore Compliance
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

export default AboutScreen;
