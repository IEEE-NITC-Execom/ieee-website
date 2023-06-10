import React, { useState } from "react";
import "./navbar.css";
import Logo from "./assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);

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
    { text: "Home" },
    { text: "Chapters" },
    { text: "Execom" },
    { text: "Contact Us" },
    { text: "Join IEEE" },
  ];

  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="container">
      <div className={navbar?"navbar-activate":"navbar"}>
        <div className="logo">
          <img src={Logo} alt="logo-img" className="logo-resizer" />
        </div>
        <div className={isMobile ? "nav-items-mobile" : "nav-items"}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className={index === activeItem ? "active" : "non-active"}
                onClick={() => handleItemClick(index)}
              >
                {item.text}
              </a>
            </li>
          ))}
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
  );
};

export default Navbar;
