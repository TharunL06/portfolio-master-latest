import React from "react";
import "./Works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Experience</h2>
      <span className="worksdesc"></span>
      <div className="worksimgs">
        <a href="https://github.com/TharunL06/live-news">
          <img src={portfolio1} alt="" className="workimg" />
        </a>
        <a href="https://ecoyaan-weld.vercel.app/">
          <img src={portfolio2} alt="" className="workimg" />
        </a>
        <a href="https://github.com/TharunL06/Capstone-Project">
          <img src={portfolio3} alt="" className="workimg" />
        </a>
        <a href="https://github.com/TharunL06/dashboard">
          <img src={portfolio4} alt="" className="workimg" />
        </a>
      </div>
      <button className="workbtn">See more</button>
    </section>
  );
};

export default Works;
