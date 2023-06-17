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
            IEEE is the world's largest technical professional association with
            more than 350,000 members in 150 countries. It is a non-profit organization that is dedicated
            to advancing the theory and application of electrical and electronics engineering and
            computer science.
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
