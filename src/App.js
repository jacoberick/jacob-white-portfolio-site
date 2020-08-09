import React, { useEffect } from "react";
import "./App.css";
import $ from "jquery";

import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const menuBtn = $(".burger-bag");
    let menuOpen = false;
    menuBtn.click(() => {
      if (!menuOpen) {
        menuBtn.addClass("open");
        menuOpen = true;
      } else {
        menuBtn.removeClass("open");
        menuOpen = false;
      }
    });

    $(".burger-bag").click(() => {
      let navLinks = $(".nav-right");
      navLinks.toggleClass("active-menu");
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active-header");
      } else {
        $(".header").removeClass("active-header");
      }
    });

    $(document).on("click", "#arrowSection a, .header a", function (e) {
      e.preventDefault();
      let section = $(e.target).attr("href");
      let top = $(section).offset().top - 200;
      $("html, body").animate(
        {
          scrollTop: top,
        },
        1000
      );
    });
  });

  return (
    <div>
      <Header />
      <Quote />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
