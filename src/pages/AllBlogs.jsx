import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SEO from "../component/SEO";
import "../assets/css/allBlogs.css";

// Import or pass your central blogs array here
// const BLOG_DATA = [
//   {
//     id: 1,
//     slug: "cmmc-2-compliance-guide",
//     title: "Understanding CMMC 2.0 Compliance: A Complete Roadmap",
//     date: "August 10, 2026",
//     image: "/assets/images/blog1.jpg",
//   },
//   {
//     id: 2,
//     slug: "nist-800-171-key-controls",
//     title: "Top 10 NIST SP 800-171 Controls Federal Contractors Miss",
//     date: "July 28, 2026",
//     image: "/assets/images/blog2.jpg",
//   },
//   {
//     id: 3,
//     slug: "microsoft-365-gcc-high-setup",
//     title: "Hardening Microsoft 365 GCC High for CMMC Audit Readiness",
//     date: "July 15, 2026",
//     image: "/assets/images/blog3.jpg",
//   },
//   {
//     id: 4,
//     slug: "c3pao-assessment-preparation",
//     title: "How to Prepare Your Security Team for a C3PAO Assessment",
//     date: "June 30, 2026",
//     image: "/assets/images/blog4.jpg",
//   },
//   {
//     id: 5,
//     slug: "ssp-and-poam-best-practices",
//     title: "Best Practices for Writing System Security Plans (SSP)",
//     date: "June 12, 2026",
//     image: "/assets/images/blog5.jpg",
//   },
//   {
//     id: 6,
//     slug: "zero-trust-architecture-dod",
//     title: "Implementing Zero Trust Architecture in the Defense Base",
//     date: "May 22, 2026",
//     image: "/assets/images/blog6.jpg",
//   },
//   {
//     id: 1,
//     slug: "cmmc-2-compliance-guide",
//     title: "Understanding CMMC 2.0 Compliance: A Complete Roadmap",
//     date: "August 10, 2026",
//     image: "/assets/images/blog1.jpg",
//   },
//   {
//     id: 2,
//     slug: "nist-800-171-key-controls",
//     title: "Top 10 NIST SP 800-171 Controls Federal Contractors Miss",
//     date: "July 28, 2026",
//     image: "/assets/images/blog2.jpg",
//   },
//   {
//     id: 3,
//     slug: "microsoft-365-gcc-high-setup",
//     title: "Hardening Microsoft 365 GCC High for CMMC Audit Readiness",
//     date: "July 15, 2026",
//     image: "/assets/images/blog3.jpg",
//   },
//   {
//     id: 4,
//     slug: "c3pao-assessment-preparation",
//     title: "How to Prepare Your Security Team for a C3PAO Assessment",
//     date: "June 30, 2026",
//     image: "/assets/images/blog4.jpg",
//   },
//   {
//     id: 5,
//     slug: "ssp-and-poam-best-practices",
//     title: "Best Practices for Writing System Security Plans (SSP)",
//     date: "June 12, 2026",
//     image: "/assets/images/blog5.jpg",
//   },
//   {
//     id: 6,
//     slug: "zero-trust-architecture-dod",
//     title: "Implementing Zero Trust Architecture in the Defense Base",
//     date: "May 22, 2026",
//     image: "/assets/images/blog6.jpg",
//   },
//   {
//     id: 1,
//     slug: "cmmc-2-compliance-guide",
//     title: "Understanding CMMC 2.0 Compliance: A Complete Roadmap",
//     date: "August 10, 2026",
//     image: "/assets/images/blog1.jpg",
//   },
//   {
//     id: 2,
//     slug: "nist-800-171-key-controls",
//     title: "Top 10 NIST SP 800-171 Controls Federal Contractors Miss",
//     date: "July 28, 2026",
//     image: "/assets/images/blog2.jpg",
//   },
//   {
//     id: 3,
//     slug: "microsoft-365-gcc-high-setup",
//     title: "Hardening Microsoft 365 GCC High for CMMC Audit Readiness",
//     date: "July 15, 2026",
//     image: "/assets/images/blog3.jpg",
//   },
//   {
//     id: 4,
//     slug: "c3pao-assessment-preparation",
//     title: "How to Prepare Your Security Team for a C3PAO Assessment",
//     date: "June 30, 2026",
//     image: "/assets/images/blog4.jpg",
//   },
//   {
//     id: 5,
//     slug: "ssp-and-poam-best-practices",
//     title: "Best Practices for Writing System Security Plans (SSP)",
//     date: "June 12, 2026",
//     image: "/assets/images/blog5.jpg",
//   },
//   {
//     id: 6,
//     slug: "zero-trust-architecture-dod",
//     title: "Implementing Zero Trust Architecture in the Defense Base",
//     date: "May 22, 2026",
//     image: "/assets/images/blog6.jpg",
//   },
// ];

const AllBlogs = () => {

  const location = useLocation();
  const blogs = location.state?.blogs || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Search Filter
  const filteredBlogs = blogs.filter((item) =>
    item?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  return (
    <>
      <SEO
        title="Cybersecurity Insights & Compliance Blogs | Spartan Cyber Security"
        description="Explore articles and guides on CMMC 2.0, NIST 800-171, Microsoft 365 security, and DoD compliance strategies."
        url="https://spartan-cs.com/blogs"
      />
      <Header />

      <main className="blogs-main-wrapper">
        {/* HERO SECTION */}
        <div className="blog-hero-fullwidth blogs-hero-banner">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#FFFFFF" }}>HOME</span>
                </Link>{" "}
                <span className="separator">|</span>{" "}
                <span style={{ color: "#E62E2D" }}>BLOGS</span>
              </div>
              <h1 className="blog-hero-title">Insights & Articles</h1>
              <p className="blog-hero-subtitle">
                Practical intelligence for cybersecurity, compliance, and defense.
              </p>
              <p className="blog-hero-subtitle">
                Expert analysis, compliance guidance, and actionable insights for federal contractors and organizations navigating CMMC 2.0, NIST SP 800-171, cybersecurity governance, audit readiness, and evolving federal security requirements.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT SECTION */}
        <section className="blogs-content-section">
          <div className="custom-container">
            {/* SEARCH BAR */}
            <div className="blogs-search-wrapper">
              <input
                type="text"
                className="blogs-search-input"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* BLOGS GRID */}
            {currentBlogs.length > 0 ? (
              <div className="blogs-grid-container">
                {currentBlogs.map((item, index) => (
                  <div
                    className="insight-grid-card"
                    key={item?.id || index}
                  >
                    <Link
                      to={`/blog/${item?.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="insight-image-wrapper">
                        <img
                          src={item?.image}
                          alt={item?.title || "Blog Post"}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="insight-card-title">{item?.title}</h3>
                      <div className="insight-card-meta meta-link">
                        <span className="meta-date">{item?.date}</span>
                        <span className="meta-divider">—</span>
                        Read More
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-blogs-wrapper">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or topic.</p>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="blogs-pagination-wrapper">
                <button
                  className="pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`pagination-number ${currentPage === index + 1 ? "active" : ""
                        }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  className="pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
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
