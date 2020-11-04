import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LinkIcons = () => {
  return (
    <div className="link-icons">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/jacoberick"
      >
        <i className="fab fa-github"></i>
        <FontAwesomeIcon className="fab fa-github" icon={faGithub} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/jacobwhitedev"
      >
        <FontAwesomeIcon className="fab fa-twitter" icon={faTwitter} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/jacob-white-9356b719a"
      >
        <i className="fab fa-linkedin"></i>
        <FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin} />
      </a>
    </div>
  );
};

export default LinkIcons;
