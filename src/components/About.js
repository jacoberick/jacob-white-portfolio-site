/* eslint-disable */
import React from "react"

const About = () => {
  return (
    <div id="aboutSection">
      <div id="aboutInner">
        <img id="aboutPic" src={"/imgs/aboutPic.JPG"} alt="Jacob White" />
        <div id="aboutTextContainer">
          <p>
            <span className="first-letter">I</span>see coding as a puzzle. You
            are given a myriad of unique pieces and the picture on the box, and
            it's up to you to assemble something great! It's this challenge and
            the satisfaction that comes from it, that drives me each day to
            deliver functional and elegant solutions to real world problems. My
            dedication to be better than I was the day before is what keeps me
            constantly learning and improving my skills.
          </p>

          <p>
            My work opportunities have given me experience with a variety of
            tech, including: React, Node, Wordpress, REST APIs, Redis, MySQL,
            MongoDB, and even Flutter. I always enjoy the chance to learn
            something new and add it to my bag of tools.
          </p>

          <p>Do I sound like the missing piece to your solution? Let's talk!</p>
        </div>
      </div>
    </div>
  )
}

export default About
