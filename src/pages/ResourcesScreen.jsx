import React, {useState} from 'react';
import "../assets/css/resourceScreen.css";
import Header from '../component/Header';
import Footer from '../component/Footer';
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
import faqData from "../assets/faqData.json";
import { Link } from 'react-router-dom';

export default function ResourceScreen() {

      const [activeFaqId, setActiveFaqId] = useState(1);

      const toggleFaq = (id) => {
        setActiveFaqId(activeFaqId === id ? null : id);
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
            Compliance intelligence drawn from real CMMC and NIST engagements – plus press, recognition and speaking from Spartan leadership.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED GUIDE CARD (Matches Section2_3.jpg Perfectly)
          ========================================================================= */}
      <section className="resource-featured-section">
        <div className="section-inner-content">
          
          {/* Main Card Container */}
          <div className="featured-card-container">
            
            {/* Left Side: Pinned hard to Top, Bottom, and Left borders */}
            <div className="card-image-block">
              <img src={Content} alt="CMMC Operations Control Room" />
            </div>

            {/* Right Side: Floating Text Block with localized inner spacing */}
            <div className="card-text-block">
              
              {/* Pill Tag */}
              <div className="featured-mini-badge">
                <span className="badge-dot-indicator" />
                <span className="badge-label-text">Featured Guide</span>
              </div>

              {/* Title */}
              <h2 className="card-display-headline">
                CMMC 2.0 readiness in 12 weeks:<br />a complete playbook
              </h2>

              {/* Paragraph Summary */}
              <p className="card-abstract-text">
                The exact 4-phase program we run with prime contractors - from scoping through C3PAO handoff. Includes evidence checklist and POA&M template.
              </p>

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
              Field notes from the compliance frontline.
            </h2>
          </div>

          {/* 3-Column Grid Container */}
          <div className="insights-cards-grid">
            
            {/* Card 1 */}
            <div className="insight-grid-card">
              <div className="insight-image-wrapper">
                {/* Replace with your image asset variable or path later */}
                <img src={relatedImg1} alt="CMMC 2.0 Readiness Guide" />
              </div>
              <h3 className="insight-card-title">CMMC 2.0 Readiness Guide</h3>
              <div className="insight-card-meta">
                <span className="meta-date">Jul 5, 2025</span>
                <span className="meta-divider">—</span>
                <Link to="/blog" className="meta-link">Read More</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="insight-grid-card">
              <div className="insight-image-wrapper">
                {/* Replace with your image asset variable or path later */}
                <img src={relatedImg2} alt="Microsoft 365 Security Checklist" />
              </div>
              <h3 className="insight-card-title">Microsoft 365 Security Checklist</h3>
              <div className="insight-card-meta">
                <span className="meta-date">Mar 12, 2025</span>
                <span className="meta-divider">—</span>
                <Link to="/blog" className="meta-link">Read More</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="insight-grid-card">
              <div className="insight-image-wrapper">
                {/* Replace with your image asset variable or path later */}
                <img src={relatedImg3} alt="Federal Compliance Updates" />
              </div>
              <h3 className="insight-card-title">Federal Compliance Updates</h3>
              <div className="insight-card-meta">
                <span className="meta-date">Mar 05, 2025</span>
                <span className="meta-divider">—</span>
                <Link to="/blog" className="meta-link">Read More</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PLAYBOOKS & GUIDES CARDS GRID (References: Section4.jpg)
          ========================================================================= */}
      <section className="resource-playbooks-section">
        <div className="section-inner-content">
          
          {/* Centered Section Header Block */}
          <div className="playbooks-header-container">
            <div className="playbooks-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">CMMC Guides</span>
            </div>
            <h2 className="playbooks-main-title">
              Deep-dive playbooks for Level 2 readiness.
            </h2>
          </div>

          {/* 3-Column Block Container */}
          <div className="playbooks-cards-grid">
            
            {/* Card 1 */}
            <div className="playbook-item-card">
              <div className="playbook-icon-box">
                {/* Clean, scalable red vector fallback layout badge */}
                {/* <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L0 3V9C0 13.97 3.41 16.63 8 18C12.59 16.63 16 13.97 16 9V3L8 0ZM6.4 13L3.2 9.8L4.32 8.68L6.4 10.76L11.68 5.48L12.8 6.6L6.4 13Z" fill="#E30613"/>
                </svg> */}
                <img src={security} alt="" />
              </div>
              <h3 className="playbook-card-title">CMMC 2.0 Readiness Playbook</h3>
              <p className="playbook-card-body">
                Step-by-step 12-week roadmap for Level 2 preparation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="playbook-item-card">
              <div className="playbook-icon-box">
              <img src={puzzle} alt="" />
              </div>
              <h3 className="playbook-card-title">Building a System Security Plan that holds up</h3>
              <p className="playbook-card-body">
                Structure, evidence and ownership patterns assessors expect.
              </p>
            </div>

            {/* Card 3 */}
            <div className="playbook-item-card">
              <div className="playbook-icon-box">
              <img src={warning} alt="" />
              </div>
              <h3 className="playbook-card-title">POA&M discipline for prime contractors</h3>
              <p className="playbook-card-body">
                Reduce remediation risk before the C3PAO arrives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FREE DOWNLOADABLE TEMPLATES DECK (References: Section5.jpg)
          ========================================================================= */}
      <section className="resource-templates-section">
        <div className="section-inner-content">
          
          {/* Centered Dark Section Header */}
          <div className="templates-header-container">
            <div className="templates-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">Logging & Monitoring</span>
            </div>
            <h2 className="templates-main-title">
              Free templates, ready to use.
            </h2>
          </div>

          {/* 3-Column Dark Card Grid Layout */}
          <div className="templates-cards-grid">
            
            {/* Template Card 1 */}
            <div className="template-item-card">
              <div className="template-download-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3 className="template-card-title">CMMC 2.0 Scoping Worksheet</h3>
              <p className="template-card-body">
                Define your assessment boundary in under an hour.
              </p>
              <button className="template-action-btn" type="button">
                <span>Download</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Template Card 2 */}
            <div className="template-item-card">
              <div className="template-download-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3 className="template-card-title">NIST 800–171 Evidence Checklist</h3>
              <p className="template-card-body">
                All 110 controls with required artifacts.
              </p>
              <button className="template-action-btn" type="button">
                <span>Download</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 10M11 5.5L6.5 1" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Template Card 3 */}
            <div className="template-item-card">
              <div className="template-download-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <h3 className="template-card-title">POA&M Template</h3>
              <p className="template-card-body">
                Risk-ranked closure plan in our exact format.
              </p>
              <button className="template-action-btn" type="button">
                <span>Download</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CASE STUDIES CARDS GRID (References: Section6.png)
          ========================================================================= */}
      <section className="resource-cases-section">
        <div className="section-inner-content">
          
          {/* Centered Section Header Block */}
          <div className="cases-header-container">
            <div className="cases-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">Case Studies</span>
            </div>
            <h2 className="cases-main-title">
              Real engagements. Measurable outcomes.
            </h2>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="cases-cards-grid">
            
            {/* Case Card 1 */}
            <div className="case-item-card">
              <div className="case-icon-box">
                {/* Custom Ribbon / Award SVG */}
                <img src={icon6} alt="" />
              </div>
              <h3 className="case-card-title">Prime Contractor – From SPRS 42 to Audit–Ready in 11 Weeks</h3>
              <p className="case-card-body">
                How a $180M aerospace prime closed 68 control gaps and passed mock C3PAO on first attempt.
              </p>
            </div>

            {/* Case Card 2 */}
            <div className="case-item-card">
              <div className="case-icon-box">
                {/* Custom Office Buildings SVG */}
                <img src={envIcon1} alt="" />
              </div>
              <h3 className="case-card-title">Mid–Sized MSP – Multi–Tenant CUI Boundary Redesign</h3>
              <p className="case-card-body">
                Network segmentation and identity architecture that protected 14 DIB clients under one program.
              </p>
            </div>

            {/* Case Card 3 */}
            <div className="case-item-card">
              <div className="case-icon-box">
                {/* Custom Shield with Gear SVG */}
                <img src={starShield} alt="" />
              </div>
              <h3 className="case-card-title">MILCON General Contractor – Field–First Hardening</h3>
              <p className="case-card-body">
                Mobile workforce, BIM/CAD protection and subcontractor flowdown across 9 active project sites.
              </p>
            </div>

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
              <span className="badge-label-text">Recognition</span>
            </div>
            <h2 className="recognition-main-title">
              Awards, certifications and public recognition.
            </h2>
            <p className="recognition-main-subtitle">
              A snapshot of the certifications, congressional recognitions and industry honors Spartan has received.
            </p>
          </div>

          {/* 3-Column White Card Media Grid Layout */}
          <div className="recognition-cards-grid">
            
            {/* Recognition Card 1 */}
            <div className="recognition-item-card">
              <div className="recognition-image-wrapper">
                {/* Replace src with your dynamic image asset reference path variable later */}
                <img src={image1} alt="Veterans Institute for Procurement - Certificate of Achievement" />
              </div>
              <h3 className="recognition-card-title">
                Veterans Institute for Procurement - Certificate of Achievement
              </h3>
            </div>

            {/* Recognition Card 2 */}
            <div className="recognition-item-card">
              <div className="recognition-image-wrapper">
                {/* Replace src with your dynamic image asset reference path variable later */}
                <img src={image2} alt="VIP Grow Program - Recognition Ceremony" />
              </div>
              <h3 className="recognition-card-title">
                VIP Grow Program - Recognition Ceremony
              </h3>
            </div>

            {/* Recognition Card 3 */}
            <div className="recognition-item-card">
              <div className="recognition-image-wrapper">
                {/* Replace src with your dynamic image asset reference path variable later */}
                <img src={image3} alt="Certificate of Special Congressional Recognition" />
              </div>
              <h3 className="recognition-card-title">
                Certificate of Special Congressional Recognition
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: MEDIA APPEARANCES & ENGAGEMENTS GRID (References: Section8.jpg)
          ========================================================================= */}
      <section className="resource-media-section">
        <div className="section-inner-content">
          
          {/* Centered Dark Header Block */}
          <div className="media-header-container">
            <div className="media-mini-badge">
              <span className="badge-dot-indicator" />
              <span className="badge-label-text">Media Appearances & Engagements</span>
            </div>
            <h2 className="media-main-title">
              Outlets, institutions and forums.
            </h2>
          </div>

          {/* 2-Column Responsive Row Grid Layout */}
          <div className="media-outlets-grid">
            
            {/* Card 1 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Television Icon Representation */}
                <img src={tv} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">KOAT Action 7 News</h3>
                <p className="media-card-body">
                  Cybersecurity incidents, ransomware activity and IT outage analysis
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Broadcast / Signal Icon Representation */}
                <img src={hotspot} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">KRQE News 13</h3>
                <p className="media-card-body">
                  Executive cyber risk, infrastructure disruption and response considerations
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Key / Labs Icon Representation */}
                <img src={key} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">Sandia National Laboratories</h3>
                <p className="media-card-body">
                  Cybersecurity and risk-related presentations
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Article / Podcast Document Icon Representation */}
                <img src={doc} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">Cybersecurity Podcasts & Forums</h3>
                <p className="media-card-body">
                  Affiliated with regional and national media organizations
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Award / Medal Icon Representation */}
                <img src={medal} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">Veterans Institute for Procurement</h3>
                <p className="media-card-body">
                  Recognized graduate of the VIP Grow training program
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="media-outlet-card">
              <div className="media-card-icon-box">
                {/* Users / Board Advisor Icon Representation */}
                <img src={people} alt="" />
              </div>
              <div className="media-card-text-box">
                <h3 className="media-card-title">Board Advisor – TAC Security</h3>
                <p className="media-card-body">
                  International cybersecurity firm - governance and executive risk
                </p>
              </div>
            </div>

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
          </div>

          {/* Right Column Interactive Accordion Stack */}
          <div className="faq-right-accordion-panel">
            {faqData.map((item) => {
              const isOpen = activeFaqId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`faq-accordion-row ${isOpen ? 'is-expanded' : ''}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <div className="faq-row-trigger-line">
                    <h3 className="faq-question-text">{item.question}</h3>
                    <div className={`faq-toggle-circle-indicator ${isOpen ? 'active-minus' : 'inactive-plus'}`}>
                      {isOpen ? (
                        /* Minus SVG Icon */
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1H11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        /* Plus SVG Icon */
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 1V11M1 6H11" stroke="#27272A" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Smooth height container breakdown space */}
                  <div className="faq-row-collapsible-content">
                    <div className="faq-answer-inner-wrapper">
                      <p className="faq-answer-paragraph">{item.answer}</p>
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
              
              <Link to="/contact-us" className="cta-btn-primary" type="button" style={{textDecoration: "none"}}>
                <span>Schedule Consultation</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link to="/compliance" className="cta-btn-secondary" type="button" style={{textDecoration: "none"}}>
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