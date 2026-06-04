import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header-main">
      <div className="custom-container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Spartan Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cmmc">
                  CMMC 2.0
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/security">
                  Microsoft 365 Security
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/compliance">
                  Compliance Systems
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/approach">
                  Approach
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/industries">
                  Industries
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>

            {/* <button className="contact-btn">
              Contact Us →
            </button> */}

            <Link to="/contact-us" className="contact-btn">
              Contact Us →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;