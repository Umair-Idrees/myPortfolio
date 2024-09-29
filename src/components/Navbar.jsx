import React from "react";
import "./Navbar.css";
import logo from "../../src/assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={logo} height={"80px"} width={"120px"} />

      <div className="mainMenu">
        <Link
          activeClass="active"
          to="mainIntro"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mainMenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mainMenuList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mainMenuList"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mainMenuList"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="mainMenuList"
        >
          Contact
        </Link>
      </div>
      <button
        className="navButton"
        onClick={() => {
          document.getElementById("contact").scrollIntoView();
        }}
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
