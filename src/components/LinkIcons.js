import React from "react";

const LinkIcons = () => {
  return (
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
      <a href="#aboutSection" className="quote-section__arrow">
        <i className="arrow down" />
      </a>
    </div>
  );
};

export default LinkIcons;
