// import { useState } from "react";
import globalImage from "./assets/global2.png";
import educationImage from "./assets/edcation.png";
import developImage from "./assets/develop.png";
import "./why.css";

const WhyWe = () => {
  return (
    <div className="page-lay">
      <p className="why-head">WHY IEEE?</p>
      <div className="cards">
        <div className="card">
          <img src={globalImage} alt="person" className="image" />
          <div className="content">
            <p className="subhead">Global Standardization</p>
            <p className="text">
              Set global standards for various technological domains. It develops
              and publishes technical standards that ensure interoperability,
              compatibility, and safety across industries. IEEE's standards cover
              a wide range of areas, including wireless communication, power
              systems, software engineering, and more.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={educationImage} alt="person" className="image" />
          <div className="content">
            <p className="subhead">Knowledge Sharing</p>
            <p className="text">
              A vast platform for knowledge sharing and networking among
              professionals, researchers, and students in the field of electrical
              engineering, electronics, and related disciplines. Through
              conferences, workshops, and publications, IEEE facilitates the
              exchange of ideas, research findings, and best practices.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={developImage} alt="person" className="image" />
          <div className="content">
            <p className="subhead">Education and Professional Development</p>
            <p className="text">
              A range of educational resources and professional development
              opportunities to support the growth and expertise of its members. It
              provides access to technical journals, magazines, and online
              libraries, which are valuable sources of research papers, articles,
              and industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
