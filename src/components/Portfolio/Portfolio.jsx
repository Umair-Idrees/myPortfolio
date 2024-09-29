import React from "react";
import "../Portfolio/Portfolio.css";
import portfolio1 from "../../assets/Portfolio1.png";
import portfolio2 from "../../assets/Portfolio2.png";
import portfolio3 from "../../assets/Portfolio3.png";
import portfolio4 from "../../assets/Portfolio4.png";
import portfolio5 from "../../assets/Portfolio5.png";
import portfolio6 from "../../assets/Portfolio6.png";

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
