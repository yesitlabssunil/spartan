import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../assets/css/contact.css";
import icon from "../assets/images/contactUs/ICON.png";
import icon1 from "../assets/images/contactUs/icon1.png";
import icon2 from "../assets/images/contactUs/icon2.png";
import icon3 from "../assets/images/contactUs/icon3.png";
import icon4 from "../assets/images/contactUs/icon4.png";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    organization: "",
    industryType: "",
    companySize: "",
    currentComplianceStatus: "",
    servicesInterestedIn: "",
    contractVehicle: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Consultation Request:", formData);
  };

  const valueProps = [
    { text: "Senior cybersecurity advisors only - no outsourced handoffs", image: icon },
    { text: "CMMC 2.0 readiness assessment & compliance guidance", image: icon1 },
    { text: "Secure and confidential consultation process", image: icon2 },
    { text: "Training & LMS onboarding support", image: icon3 },
    { text: "Audit preparation and implementation roadmap", image: icon4 },
  ];

  return (
    <>
      <Header />
      <main className="contact-main">
        
        {/* Exact same Full-Width dark ambient header from your Blog design */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <span>Contact Us</span> <span className="separator">|</span>{" "}
                <span style={{color: "white"}}>Home</span>
              </div>
              <h1 className="blog-hero-title">Schedule your strategic compliance review.</h1>
              <p className="blog-hero-subtitle">
                A 45-minute working session with our senior team to map your compliance posture, 
                contract exposure and a clear path to audit readiness.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Two-Column Section Area */}
        <div className="custom-container contact-body-section">
          <div className="row g-5">
            
            {/* Left Column: What to Expect & Location Details */}
            <div className="col-lg-4 col-md-5 order-2 order-md-1">
              <div className="expect-card mb-5">
                <h4 className="expect-title">What to Expect</h4>
                <ul className="expect-list">
                  {valueProps.map((prop, index) => (
                    <li key={index} className="expect-item">
                      <span className="expect-icon-box">
                        {/* Custom SVG red document icon from design */}
                        <img src={prop.image} alt="" className="expect-custom-img" />
                      </span>
                      <p className="expect-text">{prop.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Info Blocks */}
              <div className="direct-contact-info">
                <div className="info-block">
                  <h6><FaMapMarkerAlt className="me-2 info-icon" /> Office</h6>
                  <p>PO Box 90125 Albuquerque, NM 87199</p>
                </div>
                <div className="info-block">
                  <h6><FaEnvelope className="me-2 info-icon" /> Email</h6>
                  <p><a href="mailto:advisors@spartan.example">spartanconsults@spartan-cs.com</a></p>
                </div>
                <div className="info-block">
                  <h6><FaPhoneAlt className="me-2 info-icon" /> Phone Number</h6>
                  <p><a href="tel:5056893883">505 689 3883</a></p>
                </div>
              </div>
            </div>

            {/* Right Column: The Strategic Form Structure */}
            <div className="col-lg-8 col-md-7 order-1 order-md-2">
              <form onSubmit={handleSubmit} className="contact-consultation-form">
                <div className="row g-4">
                  
                  <div className="col-md-6">
                    <label className="form-label-custom">First Name</label>
                    <input type="text" name="firstName" className="form-control-custom" onChange={handleChange} required />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label-custom">Last Name</label>
                    <input type="text" name="lastName" className="form-control-custom" onChange={handleChange} required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Work Email</label>
                    <input type="email" name="workEmail" className="form-control-custom" onChange={handleChange} required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Organization</label>
                    <input type="text" name="organization" className="form-control-custom" onChange={handleChange} required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Industry Type</label>
                    <input type="text" name="industryType" className="form-control-custom" onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Company Size</label>
                    <input type="text" name="companySize" className="form-control-custom" onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Current Compliance Status</label>
                    <input type="text" name="currentComplianceStatus" className="form-control-custom" onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Services Interested In</label>
                    <input type="text" name="servicesInterestedIn" className="form-control-custom" onChange={handleChange} />
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom">Contract Vehicle</label>
                    <input type="text" name="contractVehicle" className="form-control-custom" onChange={handleChange} />
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom">Current Compliance Status</label>
                    <textarea 
                      name="additionalInfo" 
                      rows="4" 
                      className="form-control-custom textarea-custom" 
                      placeholder="Equipment quantity, location, timeline, current certifications..." 
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn-consultation-submit">
                      Request Consultation <span className="ms-2">→</span>
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactScreen;