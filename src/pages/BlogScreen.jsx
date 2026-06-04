import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/blog.css";

// Hero image – replace with your exported path
import heroImage from "../assets/images/blogScreen/BlogThumbnail.jpg";

// Images for "You also might like" cards – replace with your exported paths
import relatedImg1 from "../assets/images/blogScreen/BlogThumbnail1.jpg";
import relatedImg2 from "../assets/images/blogScreen/BlogThumbnail.jpg";
import relatedImg3 from "../assets/images/blogScreen/BlogThumbnail2.jpg";

const BlogScreen = () => {
    const relatedArticles = [
        {
            title: "CMMC 2.0 Readiness Guide",
            date: "JUL 5, 2025",
            link: "/",
            image: relatedImg1,
        },
        {
            title: "Microsoft 365 Security Checklist",
            date: "MAR 12, 2025",
            link: "/",
            image: relatedImg2,
        },
        {
            title: "Federal Compliance Updates",
            date: "MAR 05, 2025",
            link: "/",
            image: relatedImg3,
        },
    ];

    return (
        <>
            <Header />
            <main className="blog-main">
                
                    {/* Hero Section */}
                    {/* <div className="blog-hero">
                    <div className="hero-gradient-bg">
             
                        <div className="blog-breadcrumb">
                            <span>RESOURCES</span> <span className="separator">|</span>{" "}
                            <span>BLOGS</span> <span className="separator">|</span>{" "}
                            <span>HOME</span>
                        </div>


                        <h1 className="blog-hero-title">Microsoft 365 Security Checklist</h1>
                        <p className="blog-hero-subtitle">
                            A practical security roadmap to assess your Microsoft 365 environment,
                            identify hidden vulnerabilities, reduce attack risks, and build a stronger
                            security posture in under 45 minutes.
                        </p>

                        </div>

                    </div> */}

                                {/* NEW FULL-WIDTH HERO WRAPPER */}
            <div className="blog-hero-fullwidth">
                <div className="custom-container">
                    <div className="blog-hero-content">
                        {/* Breadcrumb */}
                        <div className="blog-breadcrumb">
                            <span>Resources</span> <span className="separator">|</span>{" "}
                            <span>Blogs</span> <span className="separator">|</span>{" "}
                            <span>Home</span>
                        </div>

                        <h1 className="blog-hero-title">Microsoft 365 Security Checklist</h1>
                        <p className="blog-hero-subtitle">
                            A practical security roadmap to assess your Microsoft 365 environment,
                            identify hidden vulnerabilities, reduce attack risks, and build a stronger
                            security posture in under 45 minutes.
                        </p>
                    </div>
                </div>
            </div>

                    <div className="custom-container">

                    {/* Article Content */}
                    <article className="blog-article">
                        <div className="article-meta">
                            <div className="blog-hero-image">
                                <img src={heroImage} alt="Microsoft 365 Security" />
                            </div>
                            <span className="article-date">MAR 12, 2025</span>
                        </div>
                        <h5>Microsoft 365 Security Checklist</h5>
                        <div className="article-content">
                            <p>
                                Microsoft 365 has become the foundation of modern business operations,
                                powering communication, collaboration, cloud storage, and productivity
                                across organizations of every size. While the platform offers powerful
                                built-in security capabilities, many businesses operate with default
                                settings or incomplete configurations that can leave critical gaps
                                unnoticed. Cybercriminals increasingly target cloud environments
                                through phishing attacks, credential theft, unauthorized access
                                attempts, and configuration weaknesses that often go undetected until
                                damage has already occurred. Maintaining a secure Microsoft 365
                                environment requires more than simply enabling features—it demands
                                regular reviews, proactive monitoring, and a structured approach to
                                security.
                            </p>
                            <p>
                                As organizations continue adopting remote work and cloud-first
                                strategies, the attack surface expands significantly. Employees
                                connect from multiple devices, access data from different locations,
                                and collaborate with internal teams as well as external partners.
                                While these capabilities improve efficiency and productivity, they can
                                also introduce security risks if controls are not properly configured.
                                Small oversights such as weak access policies, inactive user accounts,
                                or unrestricted sharing settings may create opportunities for attackers
                                to gain access to sensitive systems and business data.
                            </p>
                            <p>
                                A comprehensive Microsoft 365 security assessment helps organizations
                                identify hidden vulnerabilities before they become serious threats.
                                Reviewing user access, authentication methods, email protection
                                settings, collaboration permissions, and monitoring tools provides
                                visibility into areas that may require immediate attention. Security
                                is not a one-time setup process—it evolves continuously alongside
                                emerging threats and changing business requirements.
                            </p>
                            <p>
                                Many organizations assume Microsoft 365 is fully secure by default;
                                however, effective protection depends heavily on how the environment
                                is configured and maintained. Regular security reviews can help
                                strengthen defenses, improve compliance readiness, reduce operational
                                risk, and ensure business continuity. Taking a proactive approach
                                today can prevent costly incidents tomorrow and create a stronger,
                                more resilient cloud security posture for the future.
                            </p>
                        </div>
                    </article>

                    {/* "You also might like" Section with images */}
                    <section className="blog-related">
                        <h2 className="related-title">You also might like</h2>
                        <div className="related-grid">
                            {relatedArticles.map((item, index) => (
                                <a href={item.link} key={index} className="related-card">
                                    <div className="related-card-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="related-card-content">
                                        <h3 className="related-card-title">{item.title}</h3>
                                        <span className="related-card-meta">
                                            {item.date} — READ MORE
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogScreen;