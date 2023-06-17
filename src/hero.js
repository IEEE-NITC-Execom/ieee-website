import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <css-doodle use="var(--rule)"></css-doodle>
      <div className="hero">
        <div className="hero-head">
          <p className="hero-title">
            IEEE Student Branch NITC
          </p>
          {/* <p className="hero-main-title">Institute of Electrical and Electronics Engineers</p> */}
        </div>
        <div className="hero-content">
          <p>
            IEEE and its members inspire a global community through highly-cited publications, conferences,
            technology standards, and professional and educational activities. We are the world’s largest professional
            association advancing innovation and technological excellence for the benefit of humanity.
            
          </p>
        </div>
        <div class="buttons">
          {/* <div class="button1">
              <div class="link">
                <a
                  class="login"
                  href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
                  target="_blank"
                >
                  Join IEEE
                </a>
              </div>
            </div> */}
          <button class="button-64">
            <span class="text">
              <a
                className="login"
                href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
              >
                Join IEEE
              </a>
            </span>
          </button>
          <button class="button-64">
            <span class="text">
              <a
                className="login"
                href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
              >
                Learn More
              </a>
            </span>
          </button>
          {/* <div class="button2">
              <div class="link">
                <a class="login" href="https://www.ieee.org/" target="_blank">
                  Learn More
                </a>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
