/* eslint-disable */
import React, { useEffect } from "react";
import $ from "jquery";

const Header = () => {
  useEffect(() => {
    $(document).on("click", ".header a", function(e) {
      e.preventDefault();
      let section = $(e.target).attr("href");
      let top = $(section).offset().top - 200;
      $("html, body").animate(
        {
          scrollTop: top
        },
        1000
      );
    });
  });

  const animateTo = e => {};

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
          <a href="">resume</a>
          <a href="#ContactSection">contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
