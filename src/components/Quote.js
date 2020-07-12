/* eslint-disable */
import React from "react";

const Quote = () => {
  return (
    <div className="quote-section">
      <h1 id="quote">Hi, I'm Jacob White.</h1>
      <h2 id="sub-quote">A Full Stack Web Developer</h2>
      <div className="link-icons">
        <a target="_blank" href="https://github.com/jacoberick">
          <i className="fab fa-github"></i>
        </a>
        <a target="_blank" href="https://twitter.com/jacobwhitedev">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jacob-white-9356b719a"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <a href="#about-section" className="quote-section__arrow">
        <i className="arrow down" />
      </a>
    </div>
  );
};

export default Quote;
