import React, { useEffect, useState } from "react";
import "../assets/css/faqScreen.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getFaqScreenData } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";
import { Link } from "react-router-dom";

const AllBlogs = () => {

  const dispatch = useDispatch();
  const { newFaqData } = useSelector((state) => state.second);

  useEffect(() => {
    dispatch(getFaqScreenData());
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = newFaqData?.filter((item) =>
    item?.question?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <>

    <SEO 
    title=""
    description=""
    url="https://spartan-cs.com/blogs"
    />
      <Header />

      <main className="faq-main-wrapper">
        {/* HERO SECTION */}
        <div className="blog-hero-fullwidth faq-hero-banner">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{textDecoration: "none"}}><span style={{ color: "#FFFFFF" }}>HOME</span></Link>{" "}
                <span className="separator">|</span>{" "}
                <span style={{ color: "#E62E2D" }}>BLOGS</span>
              </div>
              <h1 className="blog-hero-title">Frequently Asked Questions</h1>
              <p className="blog-hero-subtitle">
                Find clear answers to the most common questions about our
                cybersecurity services, compliance solutions and managed
                security offerings all in one place.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ CONTENT SECTION */}
        <section className="faq-content-section">
          <div className="custom-container">
            {newFaqData?.length > 0 ? (
              <>
                <div className="faq-search-wrapper">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for answers..."
                    className="faq-search-input"
                  />
                  <button className="faq-search-btn" type="button">
                    Search
                  </button>
                </div>

                {filteredFaqs.length > 0 ? (
                  <div className="faq-accordion-container">
                    {filteredFaqs.map((faq, index) => {
                      const isOpen = openIndex === index;

                      return (
                        <div
                          key={index}
                          className={`faq-accordion-item ${
                            isOpen ? "active" : ""
                          }`}
                        >
                          <button
                            className="faq-accordion-header"
                            onClick={() => toggleAccordion(index)}
                            type="button"
                          >
                            <span className="faq-question-text">
                              {faq.question}
                            </span>
                            <span className="faq-icon-circle">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="faq-accordion-body">
                              <p className="faq-answer-text">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="no-faq-wrapper">
                    <h3>No matching FAQs found</h3>
                    <p>Try searching for a different keyword or topic.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="no-faq-wrapper">
                <h3>No FAQ found</h3>
                <p>
                  There are currently no frequently asked questions available.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AllBlogs;
