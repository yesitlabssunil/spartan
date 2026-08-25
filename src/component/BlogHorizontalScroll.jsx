import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BlogHorizontalScroll({ items = [], getBlogUrl }) {
    // const scrollContainerRef = useRef(null);

    // const handleScroll = (direction) => {
    //     if (scrollContainerRef.current) {
    //         const scrollAmount = scrollContainerRef.current.clientWidth / 3;
    //         scrollContainerRef.current.scrollBy({
    //             left: direction === "left" ? -scrollAmount : scrollAmount,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    if (!items || items.length === 0) {
        return <div className="no-blogs-found">No blog insights available.</div>;
    }

    const displayedBlogs = items.slice(0, 3);

    return (
        <div className="blog-scroll-wrapper">
            {/* Left Red Arrow Button */}
            {/* {items.length > 3 && (
                <button
                    type="button"
                    className="blog-scroll-arrow left-arrow"
                    onClick={() => handleScroll("left")}
                    aria-label="Scroll left"
                >
                    <FaChevronLeft size={14} />
                </button>
            )} */}

            {/* Track Container */}
            {/* <div className="blog-scroll-track" ref={scrollContainerRef}>
                {items.map((item, index) => (
                    <div className="insight-grid-card" key={item?.id || index}>
                        <div className="insight-image-wrapper">
                            <img
                                src={item?.image}
                                alt={item?.title || "Blog Post"}
                                loading="lazy"
                            />
                        </div>
                        <h3 className="insight-card-title">{item?.title}</h3>
                        <div className="insight-card-meta">
                            <Link
                                
                                to={`/blog/${item?.slug}`}
                                state={{ id: item?.id }}
                                className="meta-link"
                            >
                                <span className="meta-date">{item?.date}</span>
                                <span className="meta-divider">—</span>

                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* <div className="blog-scroll-track" ref={scrollContainerRef}> */}
            <div className="blog-scroll-track" >
                {displayedBlogs.map((item, index) => (
                    <div className="insight-grid-card" key={item?.id || index}>
                        <Link
                            // to={getBlogUrl ? getBlogUrl(item) : `/blog/${item?.slug}`}
                            to={`/blog/${item?.slug}`}
                            // state={{ id: item?.id }}
                            // className="meta-link"
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

            {/* See More */}
            {items.length > 3 && (
                <div className="text-center mt-4">
                    <Link
                        to="/blogs"
                        // state={{blogs: items}}
                        className="btn-red-action"
                        style={{ textDecoration: "none" }}
                    >
                        See More <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )}

            {/* Right Red Arrow Button */}
            {/* {items.length > 3 && (

                <button
                    type="button"
                    className="blog-scroll-arrow right-arrow"
                    onClick={() => handleScroll("right")}
                    aria-label="Scroll right"
                >
                    <FaChevronRight size={14} />
                </button>
            )} */}
        </div>
    );
}