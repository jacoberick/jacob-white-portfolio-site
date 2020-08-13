import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="logo-text" href="#skipToContent">
          JW
        </a>
        <hr id="line" />
        <div className="burger-bag">
          <div className="burger"></div>
        </div>
        <div className="nav-right">
          <div className="links">
            <a href="#aboutSection">About</a>
            <a href="#myWorkHeader">Work</a>
            <a href="#ContactSection">Contact</a>
            <a className="download-resume" href="./resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
