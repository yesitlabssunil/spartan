import React, { useEffect, useState, useMemo } from "react";
import "../assets/css/resourceDetailScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { resourceDetailScreen } from "../redux/slices/homeSlice";
import { Link, useParams, useLocation } from "react-router-dom";
import SEO from "../component/SEO";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

// 1. DIRECT JSON IMPORT
// import resourceDetailData from "../assets/jsonData/resourceDetailScreen.json";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ResourceScreen from "./ResourcesScreen";
import BlogHorizontalScroll from "../component/BlogHorizontalScroll";

const ResourceDetailScreen = () => {
  // const location = useLocation();
  // const resource_id = location.state?.id;
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { resourceStatus, resourceDetailScreenData, loading } = useSelector((state) => state.home);

  useEffect(() => {
    // dispatch(resourceScreenData());
    dispatch(resourceDetailScreen(slug));
  }, [dispatch, slug]);

  const getRandomItems = (items = [], count = 5) => {
    return [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  };

  // State for Accordion FAQ (default first FAQ open as per Figma)
  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  // Fallback check
  // if (!resourceStatus) {
  //   return (
  //     <div className="error-state">No data found.</div>
  //   );
  // }

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `https://spartan-cs.com/resource/${slug}#faq`,
    "mainEntity": resourceDetailScreenData?.faqSection?.items?.map((faq) => ({
      "@type": "Question",
      "name": faq?.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq?.answer
      }
    }))
  };

  // const relatedResources = getRandomItems(
  //   resourceDetailScreenData?.sidebarRelatedResources?.items,
  // );

  const relatedResourceItems =
    resourceDetailScreenData?.sidebarRelatedResources?.items || [];

  const relatedResources = useMemo(() => {
    return getRandomItems(relatedResourceItems);
  }, [relatedResourceItems]);

  return (
    <>
      <SEO
        title={resourceDetailScreen?.heroSection?.mainTitle ||
          "CMMC & Cybersecurity Resources for Federal Contractors"}
        description={resourceDetailScreen?.heroSection?.subTitle ||
          "Access practical CMMC 2.0 guides, cybersecurity insights, compliance updates, and resources designed to help federal contractors prepare for audits and strengthen security."}
        url={`https://spartan-cs.com/resource/${slug}`}
        schema={[
          faqSchema
        ]}
      />
      <Header />
      <div className="resource-detail-page">
        {/* 1. HERO SECTION */}
        {/* HERO SECTION */}
        <section className="resource-detail-hero-section">
          <div className="detail-hero-ambient-glow" />

          <div className="detail-section-inner-content">
            {/* <div className="detail-resource-badge-pill">
             <Link to="/" style={{textDecoration: "none"}}> <span className="detail-tag-home-link">Home</span></Link>
              <span className="detail-tag-separator">|</span>
              <span className="detail-tag-red-primary">Resources & Media</span>
            </div> */}
            <div className="blog-breadcrumb">
              <Link to="/" style={{ textDecoration: "none" }}> <span style={{ color: "white" }}>Home</span></Link>
              <span className="separator">|</span>{" "}
              <span>Resources & Media</span>
            </div>

            <h1 className="detail-hero-display-title">
              {resourceDetailScreenData?.heroSection?.mainTitle}
            </h1>
            {
              resourceDetailScreenData?.heroSection?.subTitle && (

                <p className="blog-hero-subtitle">
                  {resourceDetailScreenData?.heroSection?.subTitle}
                </p>
              )
            }

          </div>
        </section>

        {/* MAIN CONTENT & SIDEBAR CONTAINER */}
        <div className="detail-container">
          {/* Main Article Body */}
          <main className="article-main">
            {/* Meta Label Top */}
            {resourceDetailScreenData?.articleContent?.sectionLabel && (
              <div className="section-meta-wrapper">
                <span className="section-meta-line" />
                <span className="section-meta-label">
                  {articleContent?.sectionLabel}
                </span>
              </div>
            )}

            {/* 1. OVERVIEW */}
            {resourceDetailScreenData?.articleContent?.overview && (
              <section className="article-section">
                <h2 className="section-title">
                  {resourceDetailScreenData?.articleContent.overview.title}
                </h2>
                {resourceDetailScreenData?.articleContent.overview.paragraphs?.map((paragraph, index) => (
                  <p key={index} className="article-paragraph">
                    {paragraph?.content}
                  </p>
                ))}
              </section>
            )}

            {/* 2. PURPOSE */}
            {resourceDetailScreenData?.articleContent?.purpose && (
              <section className="article-section">
                <h2 className="section-title">
                  {resourceDetailScreenData?.articleContent.purpose.title}
                </h2>
                {resourceDetailScreenData?.articleContent.purpose.introText && (
                  <p className="intro-text">
                    {resourceDetailScreenData?.articleContent.purpose.introText}
                  </p>
                )}
                <ul className="red-star-list">
                  {resourceDetailScreenData?.articleContent.purpose.items?.map((item, index) => (
                    <li key={index} className="star-list-item">
                      {/* <span className="red-star-icon">✦</span> */}
                      <svg
                        className="nist-star-icon"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="#E11D48"
                      >
                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      </svg>
                      <div className="list-text-content">
                        {/* {item.boldPrefix && <strong>{item.boldPrefix} </strong>} */}
                        {item?.content}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 3. KEY CONCEPTS */}
            {resourceDetailScreenData?.articleContent?.keyConcepts && (
              <section className="article-section">
                <h2 className="section-title">
                  {resourceDetailScreenData?.articleContent?.keyConcepts?.title}
                </h2>
                {resourceDetailScreenData?.articleContent?.keyConcepts?.subsections?.map((sub, index) => (
                  <div key={index} className="key-concept-block">
                    <h3 className="red-subheading">{sub.redTitle}</h3>
                    {sub.paragraphs?.map((p, pIndex) => (
                      <p key={pIndex} className="article-paragraph">
                        {p?.content}
                      </p>
                    ))}
                    {/* {sub?.points &&
                      (<ul className="red-star-list">
                        {sub?.points?.map((point, pIndex) => ( */}
                    {sub?.points?.some((point) => point?.content?.trim()) &&
                      (<ul className="red-star-list">
                        {sub?.points.filter((point) => point?.content?.trim())
                          .map((point, pIndex) => (
                            <li key={pIndex} className="star-list-item">
                              <svg
                                className="nist-star-icon"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="#E11D48"
                              >
                                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                              </svg>
                              <div className="list-text-content">
                                {/* {item.boldPrefix && <strong>{item.boldPrefix} </strong>} */}
                                {point?.content}
                              </div>
                            </li>
                          ))}
                      </ul>)
                    }

                  </div>
                ))}

              </section>
            )}

            {/* 4. HARDWARE CONSIDERATIONS / CALLOUT */}
            {resourceDetailScreenData?.articleContent?.businessImportance && (
              <section className="article-section">
                <h2 className="section-title">
                  {resourceDetailScreenData?.articleContent?.businessImportance?.title}
                </h2>

                {resourceDetailScreenData?.articleContent?.businessImportance?.calloutBox && (
                  <div className="pink-callout-box">
                    <p className="callout-text">
                      <strong className="red-callout-title">
                        {
                          resourceDetailScreenData?.articleContent?.businessImportance?.calloutBox
                            ?.boldTitle
                        }
                        {/* {
                          resourceDetailScreenData?.articleContent?.businessImportance?.calloutBox
                            ?.text
                        } */}

                      </strong>{" "}
                      {resourceDetailScreenData?.articleContent?.businessImportance?.calloutBox?.text}
                    </p>
                  </div>
                )}

                {resourceDetailScreenData?.articleContent?.businessImportance.paragraphs?.map(
                  (paragraph, index) => (
                    <p key={index} className="article-paragraph">
                      {paragraph?.content}
                    </p>
                  )
                )}
              </section>
            )}

            {/* 5. BEST PRACTICES */}
            {resourceDetailScreenData?.articleContent?.bestPractices && (
              <section className="article-section">
                <h2 className="section-title">
                  {resourceDetailScreenData?.articleContent.bestPractices.title}
                </h2>
                <ul className="red-star-list">
                  {resourceDetailScreenData?.articleContent.bestPractices.items?.map((item, index) => (
                    <li key={index} className="star-list-item">
                      <svg
                        className="nist-star-icon"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="#E11D48"
                      >
                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                      </svg>
                      <div className="list-text-content">
                        {item.boldPrefix && <strong>{item.boldPrefix} </strong>}
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          {/* SIDEBAR (FIXED / STICKY POSITIONED ON SCROLL) */}
          <aside className="article-sidebar">
            <div className="sticky-sidebar-card">
              <h3 className="sidebar-title">
                {resourceDetailScreenData?.sidebarRelatedResources?.title}
              </h3>
              <ul className="related-links-list">
                {relatedResources.map((link) => (
                  <li key={link?.id}>
                    <Link to={`/resource/${link?.slug}`} >{link?.hero_title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>


        {/* =========================================================================
                  SECTION 9: FAQ ASYMMETRIC ACCORDION LAYOUT (References: Section9.jpg)
                  ========================================================================= */}
        <section
          className="resource-faq-section"
          style={{ backgroundColor: "#FFFFFF" }}
        >
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
              {resourceDetailScreenData?.faqSection?.items?.map((item, index) => {
                const isOpen = activeFaqId === item.id;
                return (
                  <div
                    key={item?.id}
                    className={`faq-accordion-row ${isOpen ? "is-expanded" : ""
                      }`}
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



        <nav className="bottom-article-nav">
          {/* PREVIOUS LINK OR DISABLED DIV */}
          {resourceDetailScreenData?.bottomNavigation?.prev ? (
            <Link
              to={`/resource/${resourceDetailScreenData?.bottomNavigation?.prev?.slug}`}
              // state={{id: resourceDetailScreenData?.bottomNavigation?.prev?.id}}
              className="nav-item prev"
            >
              <div className="sublabel-wrapper">
                <svg
                  className="nav-arrow"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6H1M1 6L6 1M1 6L6 11"
                    stroke="#E62225"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="nav-sublabel">PREVIOUS</span>
              </div>
              <strong className="nav-title">{resourceDetailScreenData?.bottomNavigation?.prev.title}</strong>
            </Link>
          ) : (
            <div className="nav-item prev disabled">
              <div className="sublabel-wrapper">
                <svg
                  className="nav-arrow"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6H1M1 6L6 1M1 6L6 11"
                    stroke="#ccc"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="nav-sublabel">PREVIOUS</span>
              </div>
              {/* <strong className="nav-title">-</strong> */}
            </div>
          )}

          {/* CENTER LABEL */}
          <div className="nav-center-date">
            {resourceDetailScreenData?.bottomNavigation?.centerLabel}
          </div>

          {/* NEXT LINK OR DISABLED DIV */}
          {resourceDetailScreenData?.bottomNavigation?.next ? (
            <Link
              to={`/resource/${resourceDetailScreenData?.bottomNavigation?.next?.slug}`}
              // state={{id: resourceDetailScreenData?.bottomNavigation?.next?.id}}
              className="nav-item next"
            >
              <div className="sublabel-wrapper">
                <span className="nav-sublabel">NEXT</span>
                <svg
                  className="nav-arrow"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H19M19 6L14 1M19 6L14 11"
                    stroke="#E62225"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <strong className="nav-title">{resourceDetailScreenData?.bottomNavigation?.next.title}</strong>
            </Link>
          ) : (
            <div className="nav-item next disabled">
              <div className="sublabel-wrapper">
                <span className="nav-sublabel">NEXT</span>
                <svg
                  className="nav-arrow"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H19M19 6L14 1M19 6L14 11"
                    stroke="#ccc"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* <strong className="nav-title">-</strong> */}
            </div>
          )}
        </nav>

        <section className="resource-insights-section">
          <div className="section-inner-content">
            {/* Centered Section Header */}
            <h2
              className="insights-main-title"
              style={{ marginBottom: "30px" }}
            >
              {resourceDetailScreenData?.blogData?.mainTitle}
            </h2>
            {/* </div> */}


            <BlogHorizontalScroll items={resourceDetailScreenData?.blogData?.cards} />
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ResourceDetailScreen;
