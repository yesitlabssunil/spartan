import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import { globalFooter } from "../redux/slices/secondSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const {footerData, loading} = useSelector((state) => state.second);

  useEffect(() => {
    dispatch(globalFooter())
  }, [dispatch])

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
                Federal contract protection.
              </p>

              <div className="social-icons">
                  {/* <Link to="">
                  <FaInstagram />
                  </Link>

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaXTwitter />
                </a> */}

                <a href="https://www.linkedin.com/in/raphael-warren-a7280a188/" 
                target="_blank"
                rel="noopener noreferrer"

                >
                <FaLinkedinIn />
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
              {/* <li><Link to="/">Services</Link></li> */}
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

              {
                footerData?.emails?.map((item, index) => (
                  <li key={index}>
                  <FaEnvelope />
                  <a href={`mailto:${item}`}>
                  {item}
                  </a>
                </li>
                ))
              }
              {/* <li>
                <FaEnvelope />
                <a href="mailto:spartanconsults@spartan-cs.com">
                spartanconsults@spartan-cs.com
                </a>
              
              </li>

              <li>
                <FaEnvelope />
                <a href="mailto:rwarren@spartan-cs.com">
                rwarren@spartan-cs.com
                </a>
              </li>

              <li>
                <FaEnvelope />
                <a href="mailto:tfinch@spartan-cs.com">
                tfinch@spartan-cs.com
                </a>
              </li> */}

              <li>
                <FaLocationDot />
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerData?.location || "")}`}
                  target="_blank" rel="noopener noreferrer">
                {footerData?.location}
                </a>
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