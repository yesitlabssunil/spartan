import React, { useEffect, useState, useRef } from "react";
import "../assets/css/resourceScreen.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
import SEO from "../component/SEO";

import Content from "../assets/images/resourceScreen/Content.jpg";
import puzzle from "../assets/images/resourceScreen/puzzle.png";
import starShield from "../assets/images/resourceScreen/starShield.png";
import image1 from "../assets/images/resourceScreen/image1.png";
import image2 from "../assets/images/resourceScreen/image2.png";
import image3 from "../assets/images/resourceScreen/image3.png";
import tv from "../assets/images/resourceScreen/tv.png";
import key from "../assets/images/resourceScreen/key.png";
import hotspot from "../assets/images/resourceScreen/hotspot.png";
import doc from "../assets/images/resourceScreen/doc.png";
import medal from "../assets/images/resourceScreen/medal.png";
import people from "../assets/images/resourceScreen/people.png";
import relatedImg1 from "../assets/images/blogScreen/BlogThumbnail1.jpg";
import relatedImg2 from "../assets/images/blogScreen/BlogThumbnail.jpg";
import relatedImg3 from "../assets/images/blogScreen/BlogThumbnail2.jpg";
import security from "../assets/images/complianceScreen/icon1.png";
import warning from "../assets/images/securityScreen/warning.png";
import envIcon1 from "../assets/images/industryScreen/env-icon1.png";
import icon6 from "../assets/images/complianceScreen/icon6.png";
import downloadIcon from "../assets/images/resourceScreen/download-icon.png";
import cerBack from "../assets/images/resourceScreen/Vector1.png";
import fortBack from "../assets/images/resourceScreen/Vector2.png";
import shieldBack from "../assets/images/resourceScreen/Vector3.png";

import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import {
  // getFaqData,
  resourceScreenData,
  getContactScreenData,
} from "../redux/slices/homeSlice";
import BlogHorizontalScroll from "../component/BlogHorizontalScroll";

export default function ResourceScreen() {
  const resourceCategories = [
    "All Resources",
    "Governance",
    "Risk & Compliance",
    "Risk Assessment",
    "Resilience",
    "Strategic Insight",
    "Documentation",
    "Identity Security",
    "System Security",
    "Risk Management",
    "Security Governance",
    "Security Operations",
    "Human Resources",
    "Physical Security",
    "Remote Security",
    "Network Security",
    "Access Control",
    "Asset Management",
    "Data Protection",
    "Network Security",
    "Compliance",
    "Change Management",
    "Configuration Management",
    "Business Continuity",
    "Operational Governance",
    "Evidence Management",
    "Supplier Risk",
    "Leadership",
    "Usage Policy",
    "Policy Framework",
    "Access Management",
    "Incident Management",
    "Training",
    "Cryptography",
    "Audit & Logging",
    "Systems & Operations",
    "Disaster Recovery",
    "Vendor Management",
    "Communications",
    "Data Management",
    // "Strategic Guidance",
    // "Government Systems",
    // "Policy Templates",
  ];

  const dispatch = useDispatch();
  const { resourceData, loading, contactData } = useSelector(
    (state) => state.home
  );

  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  const engagements = [tv, hotspot, key, doc, medal, people];

  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   dispatch(
  //     resourceScreenData({
  //       page: currentPage,
  //       category: activeCategory,
  //       itemsPerPage: 12,
  //     })
  //   );
  //   dispatch(getContactScreenData());
  // }, [currentPage, activeCategory]);

  const contactCalledRef = useRef(false);

  useEffect(() => {
    dispatch(
      resourceScreenData({
        page: currentPage,
        category: activeCategory,
        itemsPerPage: 12,
      })
    );
  }, [currentPage, activeCategory]);

  useEffect(() => {
    if (contactCalledRef.current) return;

    contactCalledRef.current = true;
    dispatch(getContactScreenData());
  }, []);


  const handleTabClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const totalPages = resourceData?.resourceLibrary?.pagination?.totalPages;

  const paginatedCards = resourceData?.resourceLibrary?.items || [];

  const cardsContainerRef = useRef(null);

  const tabsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (cardsContainerRef.current) {
      const scrollAmount = 380; // Roughly one card width + gap
      cardsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleTabsScroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll distance per click
      tabsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const maxControls = Math.max(
    ...(resourceData?.controlFamilies?.items?.map(
      (item) => item?.control_count || 0
    ) || [0])
  );

  const resourcesPageSchema = {
    "@type": "CollectionPage",
    "@id": "https://spartan-cs.com/resources#collectionpage",
    "name": "Resources",
    "url": "https://spartan-cs.com/resources",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://spartan-cs.com/#website",
      "name": "Spartan Cyber Security",
      "url": "https://spartan-cs.com/"
    },
    "about": {
      "@type": "Thing",
      "name": "CMMC 2.0, NIST 800-171, and federal contractor cybersecurity compliance"
    },
    "description": "Cybersecurity compliance resources covering CMMC 2.0, NIST 800-171, and federal contractor security requirements."
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://spartan-cs.com/resources#faq",
    "mainEntity": resourceData?.faqSection?.items?.map((faq) => ({
      "@type": "Question",
      "name": faq?.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq?.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="CMMC 2.0 Compliance Resources | Spartan Cyber Security"
        description="CMMC 2.0 compliance resources, including NIST 800-171 policy guides, audit readiness playbooks, and governance frameworks for defense contractors."
        url="https://spartan-cs.com/resources"
        schema={[
          resourcesPageSchema,
          faqSchema
        ]}
      />
      <Header />

      {/* =========================================================================
          SECTION 1: HERO HEADER
          ========================================================================= */}
      <section className="resource-hero-section">
        <div className="hero-ambient-glow" />

        <div className="section-inner-content">
          {/* <div className="resource-badge-pill">
            <Link to="/" style={{textDecoration: "none"}}><span className="tag-home-link">Home</span></Link>
            <span className="tag-separator">|</span>
            <span className="tag-red-primary">Resources & Media</span>
          </div> */}
          <div className="blog-breadcrumb">
            <Link to="/" style={{textDecoration: "none"}}><span style={{color: "white"}}>Home</span></Link>
            <span className="separator">|</span>{" "}
            <span>Resources & Media</span>
          </div>

          <h1 className="hero-display-title">
            Guides, checklists, case studies <br className="hide-on-mobile" />{" "}
            and coverage.
          </h1>

          <p className="hero-display-subtitle">
            Compliance intelligence drawn from real CMMC and NIST engagements -
            plus press, recognition and speaking from Spartan leadership.
          </p>
        </div>
      </section>

      {/* =========================================================================
          New SECTION 2:UPDATE
          ========================================================================= */}

      <section className="resource-library-section">
        <div className="res-lib-container">
          {/* Section Header */}
          <div className="res-lib-header">
            <div className="res-lib-badge-pill">
              <span className="res-lib-dot" />
              <span className="res-lib-badge-text">RESOURCE LIBRARY</span>
            </div>
            <h2 className="res-lib-title">
              {resourceData?.resourceLibrary?.section_heading}
            </h2>
          </div>

          {/* Category Filter Tabs */}

          <div className="res-lib-tabs-carousel-container">
            <button type="button" className="tabs-nav-arrow left" onClick={() => handleTabsScroll("left")} aria-label="Scroll Left">
              &#10094;
            </button>

            <div className="res-lib-tabs-wrapper"
              ref={tabsContainerRef}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
            >
              {resourceCategories?.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`res-lib-tab-btn ${activeCategory === cat ? "active" : ""
                    }`}
                  onClick={() => handleTabClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button type="button" className="tabs-nav-arrow right" onClick={() => handleTabsScroll("right")} aria-label="Scroll Right">
              &#10095;
            </button>

          </div>

          {/* Cards Grid */}
          <div className="res-lib-cards-grid">
            {paginatedCards?.length > 0 ? (
              paginatedCards.map((card) => (
                <Link key={card.id}
                  to={`/resource/${card?.slug}`}
                  // state={{ id: card?.id }}
                  className="res-lib-card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {/* <div key={card.id} className="res-lib-card"> */}
                  <div className="res-lib-card-top">
                    <span className="res-lib-card-badge">{card.badge}</span>
                    <h3 className="res-lib-card-title">{card.title}</h3>
                    <p className="res-lib-card-desc">{card.description}</p>
                  </div>

                  <div className="res-lib-card-bottom">
                 
                    <span style={{ fontFamily: "Geist" }}>Learn More</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"
                        stroke="#111111"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "40px",
                  color: "#888",
                }}
              >
                No resources available for this category.
              </div>
            )}
          </div>

          {/* Pagination Block */}
          {totalPages > 1 && (
            <div className="res-lib-pagination">
              <button
                type="button"
                className="res-lib-pg-arrow"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{
                  opacity: currentPage === 1 ? 0.5 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 8H3.33334M3.33334 8L8 12.6667M3.33334 8L8 3.33334"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    className={`res-lib-pg-num ${currentPage === page ? "active" : ""
                      }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                type="button"
                className="res-lib-pg-arrow"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                style={{
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          New SECTION: Updated
          ========================================================================= */}
      <section className="nist-ref-section">
        <div className="nist-ref-inner">
          {/* Section Header */}
          <div className="nist-ref-header">
            <div className="nist-ref-badge-pill">
              <span className="nist-badge-dot" />
              <span className="nist-badge-text">
                CONTROLS STATISTICS, CHECKLIST & DISTRIBUTION
              </span>
            </div>
            <h2 className="nist-ref-title">
              {resourceData?.statisticsSection?.title}
            </h2>
          </div>

          {/* Top Metrics / Statistics Counter Bar */}
          <div className="nist-stats-grid">
            {resourceData?.statisticsSection?.items?.map((stat, idx) => (
              <div key={idx} className="nist-stat-item">
                <h3 className="nist-stat-value">{stat?.value}</h3>
                <p className="nist-stat-label">{stat?.title}</p>
              </div>
            ))}
          </div>

          {/* Horizontal Card Carousel Wrapper with Manual Arrows */}
          <div className="nist-cards-carousel-wrapper">
            {resourceData?.controlFamilies?.items?.length > 3 && (

              <button
                type="button"
                className="nist-nav-arrow left"
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            <div
              className="nist-cards-scroll-container"
              ref={cardsContainerRef}
            >
              {resourceData?.controlFamilies?.items.map((card) => (
                <div className="nist-card" key={card?.id}>
                  <div className="nist-card-badge">{card?.code}</div>
                  <h3 className="nist-card-title">{card?.full_name}</h3>
                  {
                    (card?.description) && (

                      <p className="nist-card-subtitle">{card?.description}</p>
                    )
                  }

                  <div className="nist-card-divider" />

                  {/* Points List Container (Sized for ~4 items, auto-scrolls for more) */}
                  <div className="nist-card-list-wrapper">
                    <ul className="nist-card-points-list">
                      {card?.points?.map((item, i) => (
                        <li key={i} className="nist-point-item">
                          {/* Four-pointed Red Star SVG Icon */}
                          <svg
                            className="nist-star-icon"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#E11D48"
                          >
                            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                          </svg>
                          <span
                            style={{ color: "#000000B2", fontSize: "15px" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {resourceData?.controlFamilies?.items?.length > 3 && (
              <button
                type="button"
                className="nist-nav-arrow right"
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>

          {/* Bottom Distribution Table Box */}
          <div className="nist-distribution-box">
            <div className="nist-dist-grid">
              
              {resourceData?.controlFamilies?.items.map((item, idx) => {
                // const maxControls = 22;
                // const percentage = (item?.control_count / maxControls) * 100;

                const percentage = maxControls > 0 ? (item?.control_count / maxControls) * 100 : 0;

                return (
                  <div className="nist-dist-row" key={idx}>
                    <span className="nist-dist-label">{item?.full_name}</span>
                    <div className="nist-dist-bar-bg">
                      <div
                        className="nist-dist-bar-fill"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="nist-dist-count">{item?.control_count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "40px" }}>
            <a
              href={
                contactData?.[0]?.contact_sec_email
                  ? `mailto:${contactData?.[0]?.contact_sec_email}`
                  : "#"
              }
              className="btn-red-action"
            >
              Download Request <BsDownload />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ARTICLES / INSIGHTS GRID (References: Section3.jpg)
          ========================================================================= */}
      <section className="resource-insights-section">
        <div className="section-inner-content">
          {/* Centered Section Header */}
          <div className="insights-header-container">
            <div className="insights-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">Blog / Insights</span>
            </div>
            <h2 className="insights-main-title">
              {resourceData?.resources?.mainTitle}
            </h2>
          </div>

          <BlogHorizontalScroll items={resourceData?.resources?.cards || []} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: AWARDS & RECOGNITION GRID (References: Section7.jpg)
          ========================================================================= */}

      <section className="resource-recognition-section">
        <div className="section-inner-content">
          {/* Centered Section Header Block */}
          <div className="recognition-header-container">
            <div className="recognition-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">RECOGNITION</span>
            </div>
            <h2 className="recognition-main-title">
              {resourceData?.awardSection?.mainTitle ||
                "Awards, Certifications & Public Recognition"}
            </h2>
            <p className="recognition-main-subtitle">
              {resourceData?.awardSection?.mainSubtitle ||
                "A snapshot of the certifications, congressional recognitions and industry honors Spartan has received."}
            </p>
          </div>

          {/* 3-Column Award Cards Grid */}
          <div className="recognition-cards-grid">
            {(resourceData?.awardSection?.cards || []).map((item, index) => {

              return (
                <div className="recognition-item-card" key={item.id || index}>
                  {/* Circular Icon Container */}
                  <div className="recognition-icon-circle">
                    {/* <img src={cardIcon} alt={item.title} /> */}
                    <img src={`${IMAGE_URL}/${item?.image}`} alt={item.title} />
                  </div>

                  {/* Badge with Horizontal Divider Lines */}
                  <div className="recognition-badge-divider">
                    <span className="divider-line" />
                    <span className="badge-text">{item?.Heading}</span>
                    <span className="divider-line" />
                  </div>

                  {/* Card Title */}
                  <h3 className="recognition-card-title">{item?.title}</h3>

                  {/* Subtitle & Highlight */}
                  <div className="recognition-card-subtitle-group">
                    <span className="sub-text">{item?.sub_title}</span>
                    {item?.Organization && (
                      <span className="sub-highlight">
                        {item?.Organization}
                      </span>
                    )}
                  </div>

                  {/* Short Red Center Divider Line */}
                  <div className="recognition-red-accent-line" />

                  {/* Card Description */}
                  <p className="recognition-card-desc">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "40px" }}>
          <a
            href={
              contactData?.[0]?.contact_sec_email
                ? `mailto:${contactData?.[0]?.contact_sec_email}`
                : "#"
            }
            className="btn-red-action"
          >
            Get Guide
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FAQ ASYMMETRIC ACCORDION LAYOUT (References: Section9.jpg)
          ========================================================================= */}
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
              to="/contact-us"
              className="btn-red-action"
              style={{ marginTop: "15px" }}
            >
              Schedule a call <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          {/* Right Column Interactive Accordion Stack */}
          <div className="faq-right-accordion-panel">
            {resourceData?.faqSection?.items?.map((item, index) => {
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

      {/* =========================================================================
          SECTION 10: BOTTOM CALL-TO-ACTION BILLBOARD BLOCK (References: Section10.jpg)
          ========================================================================= */}
      <section className="resource-cta-billboard-section">
        <div className="section-inner-content">
          {/* Glowing Matte Black Banner Board Box */}
          <div className="cta-billboard-card-container">
            {/* Pill Badge Element */}
            <div className="cta-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">Apply These Resources</span>
            </div>

            {/* Central Text Messages Group */}
            <h2 className="cta-main-headline">
              Translate intelligence into audit &ndash; ready posture.
            </h2>
            <p className="cta-secondary-subtext">
              Bring our playbooks to your team in a 45-minute working session.
            </p>

            {/* Centered Dual-Action Button Rows */}
            <div className="cta-buttons-flex-group">
              <Link
                to="/contact-us"
                className="cta-btn-primary"
                type="button"
                style={{ textDecoration: "none" }}
              >
                <span>Schedule Consultation</span>
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
              </Link>

              <a
                href="https://lms.spartan-cs.com/"
                className="cta-btn-secondary"
                type="button"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Resource Request
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
