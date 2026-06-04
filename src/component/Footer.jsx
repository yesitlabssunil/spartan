import React from "react";
import {Link} from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="custom-container">
        <div className="row gy-4">

          {/* Logo Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-box">
              <img src={logo} alt="Spartan Logo" />

              <p>
                Military precision. Cybersecurity execution.
                <br />
                Federal contractor protection.
              </p>

              <div className="social-icons">
                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h6>COMPANY</h6>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="col-lg-3 col-md-6">
            <h6>COMPLIANCE</h6>

            <ul>
              <li><Link to="/cmmc">CMMC 2.0</Link></li>
              <li><Link to="/security">Microsoft 365 Security</Link></li>
              <li><Link to="/compliance">Compliance Systems</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h6>CONTACT</h6>

            <ul className="contact-list">
              <li>
                <FaEnvelope />
                spartanconsults@spartan-cs.com
              </li>

              <li>
                <FaEnvelope />
                rwarren@spartan-cs.com
              </li>

              <li>
                <FaEnvelope />
                tfinch@spartan-cs.com
              </li>

              <li>
                <FaLocationDot />
                Albuquerque, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Spartan Cybersecurity. All rights reserved.</p>

          <p>
            Developed with ❤️ by YES IT Labs LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;