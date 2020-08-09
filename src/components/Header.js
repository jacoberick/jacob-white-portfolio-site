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
          <a href="#aboutSection">About</a>
          <a href="#myWorkHeader">Work</a>
          <a href="#ContactSection">Contact</a>
          <a href="h">Resume</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
