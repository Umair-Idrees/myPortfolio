import React from "react";
import "./Footer.css"; // Ensure you create this CSS file
import logo from "../../assets/logo.png"; // Update the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All Rights
          Reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="#Navbar">Home</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
