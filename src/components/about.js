import React from "react";
import "../about.css";
import IEEESVG from "../assets/svgieee.svg";
import { useEffect } from "react";


const About = () => {
  
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      <div className="heading-container">
        <p className="ab_text">About Us</p>
      </div>
      <div className="containers-about">
        <div className="text-container-1">
      <p className="about-title">Welcome to the IEEE Student Branch at NITC!</p>
      <div className="layout">
        <div className="about-container">
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
        <div className="text-container-2">
      <p className="about-title">Mission</p>
      <div className="layout">
       
          <p className="ab-cont">
              IEEE fosters technological innovation and excellence for the
              benefit of humanity.
          </p>
        </div>
        </div>
        <div className="text-container-3">
      <p className="about-title">Vision</p>
      <div className="layout">
       
          <p className="ab-cont">
              IEEE will be essential to the global technical community and to
              technical professionals everywhere, and be universally
              recognized for the contributions of technology, and of
              technical professionals in improving global conditions.
          </p>
        </div>
        </div>
        <div className="text-container-4">
          <p className="about-title">AIM</p>
          <div className="layout">
          
              <p className="ab-cont">
              •	Create essential platforms for the exchange and development of authoritative knowledge in
              traditional and emerging technologies.<br />
              •	Harness the power of science, technology, and engineering for the betterment of human welfare and promote public
              awareness and understanding of the engineering profession.<br />
              •	Lead humanitarian initiatives around the world that utilize technology to address the global issues.<br/>
              •	Utilize IEEE's technological expertise to provide innovative and practical recommendations for public policy
              matters to governments, NGOs, organizations and the public.<br />
              •	Foster active and genuine exchange among diverse cross-disciplinary and interdisciplinary communities of
              technical professionals worldwide.
              </p>
            </div>
        </div>
      </div>
      <div id='contactus'></div>
    </div>
  );
};

export default About;