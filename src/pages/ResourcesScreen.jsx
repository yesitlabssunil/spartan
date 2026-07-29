import React, { useEffect, useState, useRef } from 'react';
import "../assets/css/resourceScreen.css";
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useDispatch, useSelector } from 'react-redux';
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

import Content from '../assets/images/resourceScreen/Content.jpg';
import puzzle from '../assets/images/resourceScreen/puzzle.png';
import starShield from '../assets/images/resourceScreen/starShield.png';
import image1 from '../assets/images/resourceScreen/image1.png';
import image2 from '../assets/images/resourceScreen/image2.png';
import image3 from '../assets/images/resourceScreen/image3.png';
import tv from '../assets/images/resourceScreen/tv.png';
import key from '../assets/images/resourceScreen/key.png';
import hotspot from '../assets/images/resourceScreen/hotspot.png';
import doc from '../assets/images/resourceScreen/doc.png';
import medal from '../assets/images/resourceScreen/medal.png';
import people from '../assets/images/resourceScreen/people.png';
import relatedImg1 from "../assets/images/blogScreen/BlogThumbnail1.jpg";
import relatedImg2 from "../assets/images/blogScreen/BlogThumbnail.jpg";
import relatedImg3 from "../assets/images/blogScreen/BlogThumbnail2.jpg";
import security from "../assets/images/complianceScreen/icon1.png";
import warning from "../assets/images/securityScreen/warning.png";
import envIcon1 from "../assets/images/industryScreen/env-icon1.png";
import icon6 from "../assets/images/complianceScreen/icon6.png"
import downloadIcon from "../assets/images/resourceScreen/download-icon.png"
import cerBack from "../assets/images/resourceScreen/Vector1.png"
import fortBack from "../assets/images/resourceScreen/Vector2.png"
import shieldBack from "../assets/images/resourceScreen/Vector3.png"
// import cerBack from "../assets/images/resourceScreen/fort-background.png"
// import fortBack from "../assets/images/resourceScreen/cer-background.png"
// import shieldBack from "../assets/images/resourceScreen/shield-background.png"
// import faqData from "../assets/faqData.json";
import resourceJsonData from "../assets/jsonData/resourceScreen.json";
import { Link } from 'react-router-dom';

// import cmmcPdf from "../assets/pdfs/cmmc-2.0-explained.pdf";
// import resourcesPdf from "../assets/pdfs/free-templates-resources.pdf";
import { getFaqData, resourceScreenData } from '../redux/slices/homeSlice';
// import nistExcel from "/files/NIST-800-171-Security-Requirements-2.xlsx";

export default function ResourceScreen() {

    const dispatch = useDispatch();
    const { resourceData, loading } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getFaqData());
        dispatch(resourceScreenData());
    }, [dispatch])

    const [activeFaqId, setActiveFaqId] = useState();

    const toggleFaq = (id) => {
        setActiveFaqId(activeFaqId === id ? null : id);
    };

    const downloadFile = (fileUrl) => {
        window.open(fileUrl, "_blank");
    };

    const engagements = [tv, hotspot, key, doc, medal, people];

    const data = resourceJsonData?.nistReferenceSection
    const libraryData = resourceJsonData?.resourceLibrary

    const [activeCategory, setActiveCategory] = useState("All Resources");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCards = libraryData?.cards.filter((card) => {
        if (activeCategory === "All Resources") return true;
        return card.category === activeCategory;
    });

    const handleTabClick = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    }

    const itemsPerPage = 12;
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedCards = filteredCards.slice(startIndex, endIndex);

    const cardsContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (cardsContainerRef.current) {
            const scrollAmount = 380; // Roughly one card width + gap
            cardsContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Header />

            {/* =========================================================================
          SECTION 1: HERO HEADER
          ========================================================================= */}
            <section className="resource-hero-section">
                <div className="hero-ambient-glow" />

                <div className="section-inner-content">
                    <div className="resource-badge-pill">
                        <span className="tag-red-primary">Resources & Media</span>
                        <span className="tag-separator">|</span>
                        <span className="tag-home-link">Home</span>
                    </div>

                    <h1 className="hero-display-title">
                        Guides, checklists, case studies <br className="hide-on-mobile" /> and coverage.
                    </h1>

                    <p className="hero-display-subtitle">
                        Compliance intelligence drawn from real CMMC and NIST engagements - plus press, recognition and speaking from Spartan leadership.
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
                            <span className="res-lib-badge-text">
                                {libraryData?.sectionBadge || "RESOURCE LIBRARY"}
                            </span>
                        </div>
                        <h2 className="res-lib-title">
                            {libraryData?.sectionTitle}
                        </h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="res-lib-tabs-wrapper">
                        {libraryData?.categories.map((cat, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`res-lib-tab-btn ${activeCategory === cat ? "active" : ""}`}
                                onClick={() => handleTabClick(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="res-lib-cards-grid">
                        {paginatedCards.length > 0 ? (
                            paginatedCards.map((card) => (
                                <div
                                    key={card.id}
                                    className="res-lib-card"
                                >
                                    <div className="res-lib-card-top">
                                        <span className="res-lib-card-badge">
                                            {card.badge}
                                        </span>
                                        <h3 className="res-lib-card-title">{card.title}</h3>
                                        <p className="res-lib-card-desc">{card.description}</p>
                                    </div>

                                    <div className="res-lib-card-bottom">
                                        <Link to="/resource-detail-screen" className="res-lib-learn-more">
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
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#888' }}>
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
                                style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6667 8H3.33334M3.33334 8L8 12.6667M3.33334 8L8 3.33334" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    type="button"
                                    className={`res-lib-pg-num ${currentPage === page ? "active" : ""}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                type="button"
                                className="res-lib-pg-arrow"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
                                style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                            <span className="nist-badge-text">{data?.badge || "CONTROLS STATISTICS, CHECKLIST & DISTRIBUTION"}</span>
                        </div>
                        <h2 className="nist-ref-title">{data?.title}</h2>
                    </div>

                    {/* Top Metrics / Statistics Counter Bar */}
                    <div className="nist-stats-grid">
                        {data?.stats?.map((stat, idx) => (
                            <div key={idx} className="nist-stat-item">
                                <h3 className="nist-stat-value">{stat.value}</h3>
                                <p className="nist-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Horizontal Card Carousel Wrapper with Manual Arrows */}
                    <div className="nist-cards-carousel-wrapper">
                        <button
                            type="button"
                            className="nist-nav-arrow left"
                            onClick={() => handleScroll('left')}
                            aria-label="Scroll left"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <div className="nist-cards-scroll-container" ref={cardsContainerRef}>
                            {data?.cards?.map((card) => (
                                <div className="nist-card" key={card.id}>
                                    <div className="nist-card-badge">{card.badge}</div>
                                    <h3 className="nist-card-title">{card.title}</h3>
                                    <p className="nist-card-subtitle">{card.subtitle}</p>

                                    <div className="nist-card-divider" />

                                    {/* Points List Container (Sized for ~4 items, auto-scrolls for more) */}
                                    <div className="nist-card-list-wrapper">
                                        <ul className="nist-card-points-list">
                                            {card.items?.map((item, i) => (
                                                <li key={i} className="nist-point-item">
                                                    {/* Four-pointed Red Star SVG Icon */}
                                                    <svg className="nist-star-icon" width="18" height="18" viewBox="0 0 24 24" fill="#E11D48">
                                                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                                                    </svg>
                                                    <span style={{ color: '#000000B2', fontSize: "15px" }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="nist-nav-arrow right"
                            onClick={() => handleScroll('right')}
                            aria-label="Scroll right"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Bottom Distribution Table Box */}
                    <div className="nist-distribution-box">
                        <div className="nist-dist-grid">
                            {data?.distribution?.map((item, idx) => (
                                <div className="nist-dist-row" key={idx}>
                                    <span className="nist-dist-label">{item.label}</span>
                                    <div className="nist-dist-bar-bg">
                                        <div
                                            className="nist-dist-bar-fill"
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                    <span className="nist-dist-count">{item.count}</span>
                                </div>
                            ))}
                        </div>
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

                    {/* 3-Column Grid Container */}
                    <div className="insights-cards-grid">
                        {(resourceData?.resources?.cards)?.map((item, index) => (
                            <div className="insight-grid-card" key={index}>
                                <div className="insight-image-wrapper">
                                    <img src={item?.image} alt="Microsoft 365 Security Checklist" />
                                </div>
                                <h3 className="insight-card-title">{item?.title}</h3>
                                <div className="insight-card-meta">
                                    <span className="meta-date">{item?.date}</span>
                                    <span className="meta-divider">—</span>
                                    <Link to={`/blog/${item?.id}`} className="meta-link">Read More</Link>
                                </div>
                            </div>
                        ))}


                    </div>

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
                            {resourceJsonData?.awardSection?.mainTitle || "Awards, Certifications & Public Recognition"}
                        </h2>
                        <p className="recognition-main-subtitle">
                            {resourceJsonData?.awardSection?.mainSubtitle || "A snapshot of the certifications, congressional recognitions and industry honors Spartan has received."}
                        </p>
                    </div>

                    {/* 3-Column Award Cards Grid */}
                    <div className="recognition-cards-grid">
                        {(resourceJsonData?.awardSection?.cards || []).map((item, index) => {
                            // 1. Store icons array
                            const icons = [cerBack, fortBack, shieldBack];
                            // 2. Select specific icon by index
                            const cardIcon = icons[index % icons.length];

                            return (
                                <div className="recognition-item-card" key={item.id || index}>
                                    {/* Circular Icon Container */}
                                    <div className="recognition-icon-circle">
                                        <img src={cardIcon} alt={item.title} />
                                    </div>

                                    {/* Badge with Horizontal Divider Lines */}
                                    <div className="recognition-badge-divider">
                                        <span className="divider-line" />
                                        <span className="badge-text">{item?.badge}</span>
                                        <span className="divider-line" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="recognition-card-title">
                                        {item?.title}
                                    </h3>

                                    {/* Subtitle & Highlight */}
                                    <div className="recognition-card-subtitle-group">
                                        <span className="sub-text">{item?.subtitle}</span>
                                        {item?.highlight && (
                                            <span className="sub-highlight">{item?.highlight}</span>
                                        )}
                                    </div>

                                    {/* Short Red Center Divider Line */}
                                    <div className="recognition-red-accent-line" />

                                    {/* Card Description */}
                                    <p className="recognition-card-desc">
                                        {item?.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

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
                            You Have Questions.<br />We Have Answers.
                        </h2>
                        <Link to="/faq" className="btn-red-action" style={{ marginTop: "15px" }}>Find More Answers <i className="fas fa-arrow-right"></i></Link>

                    </div>

                    {/* Right Column Interactive Accordion Stack */}
                    <div className="faq-right-accordion-panel">
                        {(resourceData?.faqSection?.items)?.map((item, index) => {
                            const isOpen = activeFaqId === item.id;
                            return (
                                <div
                                    key={item?.id}
                                    className={`faq-accordion-row ${isOpen ? 'is-expanded' : ''}`}
                                    onClick={() => toggleFaq(item?.id)}
                                >
                                    <div className="faq-row-trigger-line">
                                        <h3 className="faq-question-text">{item?.question}</h3>
                                        <div className={`faq-toggle-circle-indicator ${isOpen ? 'active-minus' : 'inactive-plus'}`}>
                                            {isOpen ? (
                                                /* Minus SVG Icon */
                                                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1H11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            ) : (
                                                /* Plus SVG Icon */
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 1V11M1 6H11" stroke="#27272A" strokeWidth="2" strokeLinecap="round" />
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

                            <Link to="/contact-us" className="cta-btn-primary" type="button" style={{ textDecoration: "none" }}>
                                <span>Schedule Consultation</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>

                            <Link to="/compliance" className="cta-btn-secondary" type="button" style={{ textDecoration: "none" }}>
                                Explore Compliance
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}