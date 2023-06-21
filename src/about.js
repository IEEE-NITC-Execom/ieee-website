import React from "react";
import "./about.css";
import IEEESVG from "./assets/svgieee.svg";
const About = () => {
  return (
    <div className="about-us-container">
      <div className="heading-container">
        <p className="ab_text">About Us</p>
      </div>
      <div className="text-container">
      <p className="about-title">Welcome to the IEEE Student Branch at NITC!</p>
      <div className="layout">
        <div className="image-container">
          <img src={IEEESVG} alt="IEEE" className="ieee-svg" />
        </div>
          <p className="ab-cont">
            We are a group of enthusiastic students who are passionate about
            technology and innovation. Our aim is to foster technical skills,
            knowledge sharing, and professional development among our members.
            Through various events, workshops, and projects, we strive to create a
            vibrant community that encourages collaboration and learning in the
            field of engineering. Join us and become a part of our journey towards
            exploring and shaping the future of technology!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
