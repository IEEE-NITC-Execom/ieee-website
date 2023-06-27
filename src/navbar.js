import React, { useContext, useState } from "react";
import "./navbar.css";
import Logo from "./assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ActiveContext } from "./activecontext";
import { useScroll, motion, useSpring } from 'framer-motion';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const {activeItem, setActiveItem} = useContext(ActiveContext)

  const changeback = () => {

    if (window.scrollY >= 100) {
      setNavbar(true)
    } 
    else {
      setNavbar(false)
    }
    
  }

  window.addEventListener("scroll", changeback);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleItemClick = (index) => {
    setIsMobile(false);
    setActiveItem(index);
  };

  const navItems = [
    { text: "home" },
    { text: "chapters" },
    { text: "execom" },
    { text: "gallery" },
    { text: "contact Us" },
    { text: "join IEEE" },
  ];

  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scaleX }}
      />
    <div className="container">
      <div className={navbar?"navbar-activate":"navbar"}>
        <div className="logo">
          <img src={Logo} alt="logo-img" className="logo-resizer" />
        </div>
        <div className={isMobile ? "nav-items-mobile" : "nav-items"}>
            {navItems.map((item, index) => {
              if (item.text === "contact Us"){
              return <li key={index}>
              <HashLink
                to={"/about#contactus"}
                className={index === activeItem ? "active" : "non-active"}
                onClick={() => handleItemClick(index)}
              >
                {item.text}
              </HashLink>
              </li>
              }
              else if (item.text === "join IEEE"){
              return <li key={index}>
              <a
                href={"https://www.ieee.org/membership/join/index.html"}
                className={index === activeItem ? "active" : "non-active"}
                  onClick={() => handleItemClick(index)}
                  target="_blank"
                  rel={'noreferrer'}
              >
                {item.text}
              </a>
              </li>
              }
            else{
              return <li key={index}>
              <Link
                to={'/' + item.text}
                className={index === activeItem ? "active" : "non-active"}
                onClick={() => handleItemClick(index)}
              >
                {item.text}
              </Link>
            </li>
            }
            })}
        </div>
        <button className="mobile-menu-icon" onClick={handleToggleMenu}>
          {isMobile ? (
            <FaTimes size={20} className="icon-color" />
          ) : (
            <FaBars size={20} className="icon-color" />
          )}
        </button>
      </div>
      </div>
    </>
  );
};

export default Navbar;
