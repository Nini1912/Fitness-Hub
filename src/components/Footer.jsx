// src/components/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get current year
  return (
    <div className={styles.copyright}>
      <p>&copy; FitnessHub {currentYear} All Right Reserved.</p>
    </div>
  );
};

export default Footer;
