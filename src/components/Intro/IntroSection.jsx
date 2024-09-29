import React from "react";
import "../Intro/IntroSection.css";
import introImg from "../../assets/last.png";
import { Link } from "react-scroll";

export const IntroSection = () => {
  return (
    <section id="mainIntro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Umair</span>
        </span>
        Software Developer
        <p className="introPara">
          Software developers create code, design algorithms, and utilize <br/>
          frameworks to build applications. They collaborate in agile <br/> teams,
          ensuring quality through testing.
        </p>
        <Link>
          <button className="navBtn">Hire Me</button>
        </Link>
      </div>
      <img src={introImg} alt="" className="introImg" />
    </section>
  );
};
