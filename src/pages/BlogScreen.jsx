import React, { useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/blog.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Hero image – replace with your exported path
import heroImage from "../assets/images/blogScreen/BlogThumbnail.jpg";

// Images for "You also might like" cards – replace with your exported paths
import relatedImg1 from "../assets/images/blogScreen/BlogThumbnail1.jpg";
import relatedImg2 from "../assets/images/blogScreen/BlogThumbnail.jpg";
import relatedImg3 from "../assets/images/blogScreen/BlogThumbnail2.jpg";
import { getBlogDetails } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";
import BlogHorizontalScroll from "../component/BlogHorizontalScroll";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const BlogScreen = () => {
  // const location = useLocation();
  // const id = location.state?.id;
  const { slug } = useParams();

  console.log("BLOG SLUG:", slug);

  const dispatch = useDispatch();
  const { blogDetails, loading } = useSelector((state) => state.second);


  useEffect(() => {
    if (slug) {
      dispatch(getBlogDetails(slug));
    }
  }, [dispatch, slug]);

  return (
    <>
      <Header />
      <main className="blog-main">
        {/* Hero Section */}

        {/* NEW FULL-WIDTH HERO WRAPPER */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              {/* Breadcrumb */}
              <div className="blog-breadcrumb">
                <Link to="/" style={{textDecoration: "none"}}><span style={{ color: "white" }}>Home</span> </Link> <span className="separator">|</span>{" "}
               <Link to="/resources" style={{textDecoration: "none", color: "red"}}> <span>Resources</span></Link> <span className="separator">|</span>{" "}
                <span>Blogs</span>
              </div>

              <h1 className="blog-hero-title blog-hero-title3">
                {blogDetails?.title}
              </h1>
              <p className="blog-hero-subtitle">
                {blogDetails?.sub_title}
                {/* {blogDetails?.["sub-title"]} */}
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container">
          {/* Article Content */}
          <article className="blog-article">
            <div className="article-meta">
              <div className="blog-hero-image">
                <img
                  src={blogDetails?.currentArticle?.image}
                  alt={blogDetails?.currentArticle?.title}
                />
              </div>
              <span className="article-date">
                {blogDetails?.currentArticle?.date}
              </span>
            </div>
            <h5 style={{ marginTop: "1.5rem" }}>
              {blogDetails?.currentArticle?.title}
            </h5>
            <div className="article-content">
              {blogDetails?.currentArticle?.paragraphs?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}

            </div>
          </article>

          {/* "You also might like" Section with images */}
          <section className="blog-related">
            <h2 className="related-title">You also might like</h2>

            <BlogHorizontalScroll items={blogDetails?.relatedArticles || []} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogScreen;
