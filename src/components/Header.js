import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="logo-text" href="#skipToContent">
          JW
        </a>
        <hr id="line" />
        <div className="nav-right">
          <a href="#aboutSection">about</a>
          <a href="#myWorkHeader">work</a>
          <a href="#ContactSection">contact</a>
          <a href="">resume</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
