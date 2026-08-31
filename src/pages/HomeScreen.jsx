import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/home.css";
import { initHomeScripts } from "../homeInteractions";
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

import { getFaqData, homeScreenData } from "../redux/slices/homeSlice";
import BlogHorizontalScroll from "../component/BlogHorizontalScroll";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { AllFaq, homeData, loading } = useSelector((state) => state.home);

    const safeArray = (value) => Array.isArray(value) ? value : [];

    //   useEffect(() => {
    //     const cleanup = initHomeScripts();

    //     return () => {
    //       cleanup();
    //     };
    //   }, []);

    useEffect(() => {
        try {
            const cleanup = initHomeScripts();
            return cleanup;
        } catch (e) {
            console.error('initHomeScripts error:', e);
        }
    }, []);

    useEffect(() => {
        dispatch(getFaqData());
        dispatch(homeScreenData());
    }, [dispatch]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const solutionIcons = [
        "/images/compliance-training.svg",
        "/images/security-awareness.svg",
        "/images/audit-preparation.svg",
        "/images/certification.svg",
    ];

    const fallbackImages = [
        "/images/built-1.png",
        "/images/built-2.png",
        "/images/built-3.png",
    ];

    // if (loading) {
    //     return <div className="text-center py-5">Loading...</div>;
    // }
    const professionalServiceSchema = {
        "@type": "ProfessionalService",
        "@id": "https://spartan-cs.com/#professional-service",
        "name": "Spartan Cyber Security",
        "url": "https://spartan-cs.com/",
        "logo": "https://spartan-cs.com/assets/logo-DH4HSouC.png",
        "description":
            "Executive advisory firm specializing in CMMC 2.0, NIST 800-171 compliance, and cybersecurity for federal contractors.",

        "founder": {
            "@type": "Person",
            "name": "Raphael Warren",
            "jobTitle": "Founder & CEO",
            "honorificPrefix": "Brigadier General (Ret.)"
        },

        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-505-639-3883",
            "contactType": "customer service",
            "email": "rwarren@spartan-cs.com",
            "availableLanguage": "English"
        },

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Albuquerque",
            "addressRegion": "NM",
            "postalCode": "87113",
            "addressCountry": "US"
        },

        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },

        "openingHours": "Mo-Fr 09:00-17:00",
        "priceRange": "$$$",

        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cybersecurity & Compliance Services",
            "itemListElement": [
                {
                    "@type": "Service",
                    "name": "CMMC 2.0 Readiness",
                    "description":
                        "Gap assessments, readiness roadmaps, SSP creation, POAM development, security controls implementation, audit preparation",
                    "serviceOutput":
                        "Audit-ready CMMC 2.0 compliance certification"
                },
                {
                    "@type": "Service",
                    "name": "NIST SP 800-171 Compliance",
                    "description":
                        "Security control alignment, governance support and operational readiness built around NIST SP 800-171 standards",
                    "serviceOutput":
                        "Compliant security posture for federal contracts"
                },
                {
                    "@type": "Service",
                    "name": "Audit Readiness & Evidence Preparation",
                    "description":
                        "Documentation, evidence and operational validation designed to withstand formal assessment scrutiny",
                    "serviceOutput":
                        "Validated audit evidence and assessment support"
                },
                {
                    "@type": "Service",
                    "name": "Microsoft 365 Security",
                    "description":
                        "Identity management, conditional access, endpoint protection, secure cloud configuration, data governance, compliance controls",
                    "serviceOutput":
                        "Hardened M365 environment for regulated workloads"
                }
            ]
        },

        "sameAs": [
            "https://www.linkedin.com/company/spartan-cyber-security",
            "https://twitter.com/spartan_cs"
        ]
    };

    const faqSchema = {
        "@type": "FAQPage",
        "@id": "https://spartan-cs.com/#faq",
        "mainEntity": safeArray(AllFaq)?.map((faq) => ({
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
                title="CMMC Compliance Consultant | Spartan Cyber Security"
                description="CMMC compliance consultant helping defense contractors achieve CMMC 2.0 and NIST 800-171 certification with audit-ready, evidence-driven security programs."
                url="https://spartan-cs.com"
                schema={[
                    professionalServiceSchema,
                    faqSchema
                ]}

            />
            <Header />

            <section
                className="hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.5), rgba(5, 10, 20, 0.6)), url(${homeData?.hero?.backgroundImage
                        ? `${IMAGE_URL}/${homeData.hero.backgroundImage}`
                        : "/images/hero-banner-bg.png"
                        })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content fade-in visible">
                    <div className="badge-tag">
                        <span className="dot-black"></span> {homeData?.hero?.badgeTag || "Executive Advisory & Compliance"}
                    </div>
                    <h1>{homeData?.hero?.title || "CMMC 2.0 & NIST Compliance Consulting for Federal Contractors"}</h1>
                    <p className="hero-subtext">{homeData?.hero?.subtext || "Helping defense contractors achieve CMMC 2.0 and NIST 800-171 certification with audit-ready, evidence-driven security programs."}</p>

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
                    <div className="level-card fade-in visible">
                        <span className="level-badge">LEVEL 1</span>
                        <h3>Foundational</h3>
                        <p>
                            Basic safeguarding practices focused on protecting Federal
                            Contract Information (FCI).
                        </p>
                    </div>
                    <div className="level-card fade-in visible">
                        <span className="level-badge">LEVEL 2</span>
                        <h3>Advanced</h3>
                        <p>
                            Implementation of NIST SP 800-171 security controls required for
                            handling Controlled Unclassified Information (CUI).
                        </p>
                    </div>
                    <div className="level-card fade-in visible">
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
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src="images/document-img-h.svg" alt="Documentation without execution" />
                        </div>
                        <div className="prob-text">Documentation without execution</div>
                    </div>
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src="images/weak-cloud.svg" alt="Weak cloud security" />
                        </div>
                        <div className="prob-text">Weak cloud security</div>
                    </div>
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src="images/governance-gaps.svg" alt="Governance gaps" />
                        </div>
                        <div className="prob-text">Governance gaps</div>
                    </div>
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src="images/poor-enforcement.svg" alt="Poor policy enforcement" />
                        </div>
                        <div className="prob-text">Poor policy enforcement</div>
                    </div>
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src={icon1} alt="Missing evidence" />
                        </div>
                        <div className="prob-text">Missing evidence</div>
                    </div>
                    <div className="problem-item fade-in visible">
                        <div className="prob-icon">
                            <img src="images/audit-exposure.svg" alt="Audit failure exposure" />
                        </div>
                        <div className="prob-text">Audit failure exposure</div>
                    </div>
                </div>
            </section>

            <section className="risk-section">
                <div className="risk-left-panel">
                    <span className="badge-red-tag">
                        {" "}
                        <span className="dot-red"></span> TIME-SENSITIVE
                    </span>
                    <h2>{homeData?.timeSection?.title || "CMMC 2.0 Enforcement is Active"}</h2>
                    <p>{homeData?.timeSection?.subtitle || "Rulemaking is finalized. DoD contracting officers are inserting CMMC requirements into active solicitations."}</p>
                    <Link to="/compliance-systems" className="btn-red-action">
                        Get Compliance Ready Now <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>

                <div className="risk-right-grid">
                    {(homeData?.timeSection?.content && homeData.timeSection.content.length > 0
                        ? homeData.timeSection.content
                        : [
                            { title: "01", description: "DoD Solicitations Requiring CMMC 2.0 Clauses" },
                            { title: "02", description: "Mandatory NIST SP 800-171 SPRS Score Submission" },
                            { title: "03", description: "C3PAO Assessment Backlog & Lead Time Demands" },
                            { title: "04", description: "Prime Contractor Supply Chain Flow-Down Mandates" }
                        ]
                    ).map((item, index) => (
                        <div className="risk-card" key={index}>
                            <span className="risk-num">{item?.title}</span>
                            <h4>{item?.description}</h4>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats-banner">
                <div className="stats-banner-overlay"></div>
                <div className="stats-banner-content">
                    <h3>{homeData?.statsBanner?.heading || "Built for Defense Supply Chain Contractors Pursuing CMMC 2.0 Compliance"}</h3>

                    <div className="stats-counter-row">
                        {(homeData?.statsBanner?.stats && homeData.statsBanner.stats.length > 0
                            ? homeData.statsBanner.stats
                            : [
                                { value: "110+", label: "NIST SP 800-171 Security Controls Managed" },
                                { value: "100%", label: "Focus on CMMC 2.0 Audit Readiness" },
                                { value: "20+", label: "Years of Executive Security Leadership" }
                            ]
                        ).map((item, index) => (
                            <div className="stat-box" key={index}>
                                <h2>{item?.value}</h2>
                                <p>{item?.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="solution-section">
                <div className="solution-header text-center">
                    <span className="solution-pill">
                        {" "}
                        <span className="dot-white"></span> THE SOLUTION
                    </span>
                    <h2>{homeData?.solution?.title || "Governance-First Compliance Systems Built for Audit Readiness"}</h2>
                </div>

                <div className="solution-cards-grid">
                    {(homeData?.solution?.cards && homeData.solution.cards.length > 0
                        ? homeData.solution.cards
                        : [
                            { title: "Gap Analysis & Readiness", description: "Comprehensive NIST SP 800-171 gap assessments and actionable roadmaps." },
                            { title: "M365 GCC High Hardening", description: "Secure cloud configuration, access controls, and data governance." },
                            { title: "SSP & POAM Development", description: "Audit-ready System Security Plans and Plan of Action & Milestones." },
                            { title: "C3PAO Assessment Prep", description: "End-to-end evidence collection and assessment rehearsal." }
                        ]
                    ).map((item, index) => (
                        <div className="sol-card" key={index}>
                            <div className="sol-card-icon">
                                <img src={solutionIcons[index] || solutionIcons[0]} alt={item.title} />
                            </div>
                            <h3>{item?.title}</h3>
                            <p>{item?.description}</p>
                        </div>
                    ))}
                </div>

                <div className="solution-footer-action text-center">
                    <a
                        href="https://lms.spartan-cs.com/"
                        className="btn-white-secondary"
                        target="_blank"
                    >
                        Start with an Assessment <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            <section className="services-section">
                <div className="text-center section-header-margin">
                    <span className="service-pill">
                        <span className="dot-red"></span> OUR SERVICES{" "}
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
                    <div className="service-image-card fade-in visible">
                        <span className="card-number">01</span>
                        <h3>CMMC 2.0 Readiness</h3>
                        <p>
                            Structured implementation guidance and assessment preparation
                            aligned to CMMC 2.0 institutional requirements.
                        </p>
                    </div>
                    <div className="service-image-card fade-in visible">
                        <span className="card-number">02</span>
                        <h3>NIST SP 800-171 Compliance</h3>
                        <p>
                            Security control alignment, governance support and operational
                            readiness built around NIST SP 800-171 standards.
                        </p>
                    </div>
                    <div className="service-image-card fade-in visible">
                        <span className="card-number">03</span>
                        <h3>Audit Readiness & Evidence Preparation</h3>
                        <p>
                            Preparation of documentation, evidence and operational validation
                            designed to withstand formal assessment scrutiny.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pillars-section">
                <div className="pillars-header-split">
                    <div className="pillars-left-title">
                        <span className="pillars-pill">
                            {" "}
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
                    <div className="pillar-column-card fade-in visible">
                        <div className="pillar-card-head">
                            <div className="pillar-icon-red">
                                <img src={icon3} alt="" />
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

                    <div className="pillar-column-card fade-in visible">
                        <div className="pillar-card-head">
                            <div className="pillar-icon-red">
                                <img src={icon2} alt="" />
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

                    <div className="pillar-column-card fade-in visible">
                        <div className="pillar-card-head">
                            <div className="pillar-icon-red">
                                <img src={icon4} alt="" />
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
                    <div className="trust-box-card fade-in visible">
                        <div className="trust-box-icon">
                            <img src={icon5} alt="" />
                        </div>
                        <h4>Military Leadership</h4>
                        <p>
                            Led by Brigadier General (Ret.) Raphael Warren with two decades of
                            executive security leadership.
                        </p>
                    </div>
                    <div className="trust-box-card fade-in visible">
                        <div className="trust-box-icon">
                            <img src={icon6} alt="" />
                        </div>
                        <h4>Audit-Ready Systems</h4>
                        <p>
                            Compliance programs designed to produce measurable evidence that
                            withstands federal audits.
                        </p>
                    </div>
                    <div className="trust-box-card fade-in visible">
                        <div className="trust-box-icon">
                            <img src={icon7} alt="" />
                        </div>
                        <h4>Specialized Expertise</h4>
                        <p>
                            Focused on CMMC 2.0, Microsoft 365 security and sustainable
                            compliance systems.
                        </p>
                    </div>
                    <div className="trust-box-card fade-in visible">
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

            <section className="who-we-are-section">
                <div className="who-left-col">
                    <span className="section-tag-red no-mar">
                        <span className="dot-red"></span> WHO WE ARE
                    </span>
                    <h2>{homeData?.whoWeAre?.title || "Military Leadership Meets Operational Cybersecurity"}</h2>

                    <div className="strategic-checklist-box">
                        {(homeData?.whoWeAre?.checklist && homeData.whoWeAre.checklist.length > 0
                            ? homeData.whoWeAre.checklist
                            : [
                                { title: "Executive Military Governance & Command Rigor" },
                                { title: "Audit-Ready Documentation & Operational Evidence" },
                                { title: "NIST 800-171 & CMMC 2.0 Deep Subject-Matter Expertise" }
                            ]
                        ).map((item, index) => (
                            <div className="checklist-row" key={index}>
                                <span className="chk-icon">
                                    <img src="images/check-icon-militry.svg" alt="" />
                                </span>
                                <span className="chk-text">{item?.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="who-right-col">
                    <div className="built-text">
                        <p className="who-top-intro-text">
                            {homeData?.whoWeAre?.topIntroText || "Founded by Brigadier General (Ret.) Raphael Warren, Spartan Cyber Security brings executive military leadership and operational rigor to federal compliance."}
                        </p>
                    </div>

                    <div className="founder-card-container">
                        <div className="founder-main-img">
                            <img
                                src={`${IMAGE_URL}/${homeData?.whoWeAre?.founderCard?.image}`}
                                // src={homeData?.whoWeAre?.founderCard?.image || "/images/leaderImg1.png"}
                                alt={homeData?.whoWeAre?.founderCard?.name || "Raphael Warren"}
                            />
                        </div>

                        <div className="founder-quote-content">
                            <p className="quote-paragraph">
                                “{homeData?.whoWeAre?.founderCard?.quote || "Compliance is not a paperwork exercise; it is an operational security posture designed to protect contracts and defend the supply chain."}”
                            </p>
                            <div className="founder-meta">
                                <span className="meta-name">
                                    {homeData?.whoWeAre?.founderCard?.name || "Raphael Warren"}
                                </span>
                                <span className="meta-title">
                                    {homeData?.whoWeAre?.founderCard?.title || "Founder & CEO, Brigadier General (Ret.)"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="focus-section">
                <div className="text-center section-header-margin">
                    <span className="section-tag-red">
                        <span className="dot-red"></span>OUTCOMES
                    </span>
                    <h2>Protect Revenue. Preserve Contracts. Strengthen Security.</h2>
                </div>

                <div className="focus-grid">
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon17} alt="" />
                        </div>
                        <div>
                            <h4>Audit Readiness</h4>
                            <p>Walk into assessment with evidence organized, current and defensible.</p>
                            <Link to="/resource/audit-readiness-and-assessment-preparation" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon16} alt="" />
                        </div>
                        <div>
                            <h4>Contract Protection</h4>
                            <p>Protect the federal revenue you've already won.</p>
                            <Link to="/resource/vendor-oversight-and-third-party-governance" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon9} alt="" />
                        </div>
                        <div>
                            <h4>Reduced Risk</h4>
                            <p>identify and reduce the security gaps that put contracts and reputation at risk.</p>

                            <Link to="/resource/organizational-risk-assessment-policy" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>

                        </div>
                    </div>
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon10} alt="" />
                        </div>
                        <div>
                            <h4>Security Resilience</h4>
                            <p>Build and sustain defenses that perform under real-world adversarial pressure.</p>
                            <Link to="/resource/operational-cyber-resilience-and-business-continuity" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon15} alt="" />
                        </div>
                        <div>
                            <h4>Leadership Confidence</h4>
                            <p>Give executive clear visibility into security posture, risk, and readiness.</p>
                            <Link to="/resource/executive-accountability-in-cybersecurity-governance" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>
                        </div>
                    </div>
                    <div className="focus-card fade-in visible new-up">
                        <div className="focus-icon trust-box-icon">
                            <img src={icon11} alt="" />
                        </div>
                        <div>
                            <h4>Competitive Positioning</h4>
                            <p>Turn security maturity into a differentiator when competing for federal work.</p>
                            <Link to="/resource/evidence-discipline-as-a-competitive-advantage" style={{ textDecoration: "none" }}>
                                <p style={{ color: "red" }}>Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="industries-section conpad">
                <div className="text-center section-header-margin">
                    <span className="section-tag-red">
                        <span className="dot-red"></span>INDUSTRIES
                    </span>
                    <h2>{homeData?.industries?.title || "CMMC 2.0 Compliance by Industry"}</h2>
                    <p className="industries-top-desc">
                        {homeData?.industries?.description || "Sector-specific compliance guidance tailored for defense contractors, manufacturing, aerospace, and technology vendors."}
                    </p>
                </div>

                <div className="industry-cards-row">
                    {(homeData?.industries?.cards && homeData.industries.cards.length > 0
                        ? homeData.industries.cards
                        : [
                            { title: "Defense & Aerospace", description: "Comprehensive CMMC readiness for primes and subcontractors." },
                            { title: "Manufacturing & Engineering", description: "Securing shop-floor CUI and supply chain communications." },
                            { title: "Technology & IT Services", description: "GCC High cloud configurations and access control frameworks." }
                        ]
                    ).map((item, index) => (
                        <div
                            className="industry-image-box"
                            style={{
                                backgroundImage: `url(${item?.image && (
                                    item.image.endsWith('.png') ||
                                    item.image.endsWith('.jpg') ||
                                    item.image.endsWith('.jpeg') ||
                                    item.image.endsWith('.webp')
                                )
                                    ? `${IMAGE_URL}/${item?.image}`
                                    : fallbackImages[index] || fallbackImages[0]
                                    })`,
                            }}
                            key={index}
                        >
                            <span className="ind-num">0{index + 1}</span>
                            <h3>{item?.title}</h3>
                            <p>{item?.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="resources-section conpad">
                <div className="text-center section-header-margin">
                    <span className="badge-red-pill">
                        <span className="dot-red"></span>RESOURCES
                    </span>
                    <h2>{homeData?.resources?.title || "CMMC 2.0 Compliance Resources"}</h2>
                    <p className="resources-subtext">
                        {homeData?.resources?.description || "Actionable policy guides, audit readiness playbooks, and governance frameworks for defense contractors."}
                    </p>
                </div>

                <BlogHorizontalScroll items={safeArray(homeData?.resources?.cards)} />
            </section>

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
                    {safeArray(AllFaq).map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={faq?.id}
                                className={`accordion-item ${isOpen ? "active" : ""}`}
                            >
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleFAQ(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h4>{faq?.question}</h4>
                                    <span className="accordion-icon"></span>
                                </div>

                                <div
                                    className="accordion-body"
                                    style={{
                                        // Dynamically calculates the exact pixel height required by the text
                                        maxHeight: isOpen
                                            ? `${document.getElementById(`faq-content-${index}`)
                                                ?.scrollHeight
                                            }px`
                                            : "0px",
                                        overflow: "hidden",
                                        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                >
                                    <div
                                        id={`faq-content-${index}`}
                                        className="accordion-body-content"
                                    >
                                        {faq?.answer}
                                    </div>
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
