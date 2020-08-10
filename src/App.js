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
    // toggle class open for burger menu
    // applies animation on burger
    const menuBtn = $(".burger-bag");
    menuBtn.click(() => {
      menuBtn.toggleClass("open");
    });

    // on click of nav links resets burger
    const navLinks = $(".links a");
    navLinks.click(() => {
      $(".burger-bag").removeClass("open");
    });

    // toggle .active-menu on click
    // toggle nav-right into view
    let nav = $(".nav-right");
    $(".burger-bag, .links a").click(() => {
      nav.toggleClass("active-menu");
      $("body").toggleClass("freeze");
    });

    // on window scroll toggle active header class
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active-header");
      } else {
        $(".header").removeClass("active-header");
      }
    });

    // jumps down to target section on nav link click
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
