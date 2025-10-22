// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import the CSS module

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }

      // Simple active section detection (can be refined)
      const sections = ["home", "about", "services", "workout", "contact"];
      let currentActive = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          // Offset for fixed header
          currentActive = sections[i];
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Also run once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close menu on link click for mobile
  };

  return (
    <header
      className={`${styles.header} ${
        isHeaderActive ? styles.headerActive : ""
      }`}
    >
      <a href="#home" className={styles.logo}>
        Fitness<span>Hub</span>
      </a>

      {/* Boxicons 'bx bx-menu' icon */}
      <div
        className={`${styles.menuIcon} bx bx-menu`}
        id="menu-icon"
        onClick={toggleMenu}
      ></div>

      <ul className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? styles.active : ""}
            onClick={() => handleNavLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? styles.active : ""}
            onClick={() => handleNavLinkClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeSection === "services" ? styles.active : ""}
            onClick={() => handleNavLinkClick("services")}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#workout"
            className={activeSection === "workout" ? styles.active : ""}
            onClick={() => handleNavLinkClick("workout")}
          >
            Workout
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? styles.active : ""}
            onClick={() => handleNavLinkClick("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
