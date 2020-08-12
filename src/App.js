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
    const burgerBag = $(".burger-bag");
    const nav = $(".nav-right");
    const navLinks = $(".links a");
    const body = $("body");

    // function to toggle nav display
    const toggleNav = () => {
      burgerBag.toggleClass("open");
      nav.toggleClass("active-menu");
      body.toggleClass("freeze");
    };

    //on click of burgerBag and navLinks run toggleNav()
    $(burgerBag, navLinks).click(() => {
      toggleNav();
    });

    //close nav on click outside of div
    $(window).click((e) => {
      if (nav.hasClass("active-menu") && e.target.className !== "burger") {
        toggleNav();
      }
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
