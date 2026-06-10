import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
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
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/cmmc">
                  CMMC 2.0
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/security">
                  Microsoft 365 Security
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/compliance">
                  Compliance Systems
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/approach">
                  Approach
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/industries">
                  Industries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                } to="/resources">
                  Resources
                </NavLink>
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