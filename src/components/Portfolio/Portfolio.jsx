import React from "react";
import "../Portfolio/Portfolio.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="worksDesc">
        In my portfolio, I showcase projects built with HTML, CSS, JavaScript,
        and React, demonstrating my skills in web development and design.
      </span>
      <div className="imgs">
        <img src={portfolio1} alt="" className="worksImg" />
        <img src={portfolio2} alt="" className="worksImg" />
        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
        <img src={portfolio6} alt="" className="worksImg" />
        <img src={portfolio5} alt="" className="worksImg" />
      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
};

export default Portfolio;
