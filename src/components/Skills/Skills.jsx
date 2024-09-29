import React from "react";
import "../Skills/Skills.css";
import uiImg from "../../assets/uiImg.png";
import webImg from "../../assets/webImg.jpeg";
import interactionImg from "../../assets/interactionImg.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        As a software developer with 7 months of experience, I specialize in
        building dynamic web applications using HTML, CSS, JavaScript, and
        React. I focus on creating responsive interfaces, developing reusable
        components, and optimizing performance. My collaborative skills with Git
        ensure effective teamwork and code integrity. Passionate about
        continuous learning, I strive to enhance my skills and contribute to
        innovative projects.
      </span>
      <div className="skillBar">
        <img src={uiImg} alt="" className="skillBarImg" />
        <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p>
            UI/UX design enhances user experience through visual appeal and
            functionality
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={webImg} alt="" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Website Design</h2>
          <p>Website design combines layout, typography, color, responsiveness, and user experience</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={interactionImg} alt="" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Interaction Design</h2>
          <p>
          Interaction design focuses on creating engaging interfaces that enhance user experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
