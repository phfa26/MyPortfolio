import React from "react";

import "./About.css";
const About = props => {
  return (
    <div className="about-content">
      <div className="img-box">
        <img alt="" className="img-box__avatar"></img>
      </div>
      <div className="about-content__text">
        <p>
          Hi, I'm Paulo a Sydney based Junior Web Developer with a background in
          finance and logistics.
        </p>
        <p>
          Problem-solving, creativity, and logical thinking are my natural
          skills, and Tech is my passion. Software Engineering grounds is where
          I can bring them together to build awesome things.
        </p>
        <p>
          I love working on projects, by myself or in a team, learning new
          things is a never-ending task to me.
        </p>
        <p>
          Please feel free to reach me out if you want to know even more about
          me. I'd love to hear from you.
        </p>
        <p>Thank you for visiting my portfolio page.</p>
      </div>
    </div>
  );
};

export default About;
