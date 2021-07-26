import React from "react";
import LinkIcons from "./LinkIcons";

const Quote = () => {
  return (
    <div className="quote-section" id="skipToContent">
      <h1 id="quote">Hi, I'm Jacob White.</h1>
      <h2 id="sub-quote">A Front End Web Developer</h2>
      <LinkIcons />
      <div id="arrowSection">
        <a href="#aboutSection" className="quote-section__arrow">
          <i className="arrow down" />
        </a>
      </div>
    </div>
  );
};

export default Quote;
