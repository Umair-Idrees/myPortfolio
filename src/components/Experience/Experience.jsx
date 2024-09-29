import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h2 className="experienceTitle">My Experience</h2>

      <div className="job">
        <h3 className="company">Web Developer at serviceprovider.pk</h3>
        <p className="companyJoin">
          <strong>Joined:</strong> March 2024 - Present
        </p>
        </div>
        <div>
        <p className="companyDesc">
          I am currently working as a Web Developer at serviceprovider.pk, where
          I utilize my skills in
          <strong> HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>ReactJS</strong>. My role
          involves creating dynamic and responsive web applications,
          collaborating with cross-functional teams, and enhancing user
          experiences through innovative solutions.
        </p>
        <ul className="styled-list">
          <li>
            Developing and maintaining responsive web applications using
            ReactJS.
          </li>
          <li>
            Implementing user-friendly interfaces with modern design principles.
          </li>
          <li>
            Collaborating with designers and backend developers to ensure
            seamless integration.
          </li>
          <li>
            Continuously improving code quality through best practices and peer
            reviews.
          </li>
        </ul>
      </div>
    </section>

  
  );
};

export default Experience;
