/* eslint-disable */
import React from "react";

const About = () => {
  return (
    <div id="aboutSection">
      <img
        id="aboutPic"
        src={require("../imgs/aboutPic.jpg")}
        alt="Jacob White"
      />
      <p>
        <span className="first-letter">C</span>oming fresh out of high school
        with my Associates Degree, I knew college was not the path for me. I
        wanted to pursue a career path that was based on skills and hard work.
        My brother-in-law introduced me to coding and since then, I have
        completed the Treehouse TechDegree in Javascript, multiple Treehouse
        Courses, and spend my spare time improving my skills as a programmer.
      </p>
    </div>
  );
};

export default About;
