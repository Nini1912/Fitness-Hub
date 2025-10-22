// src/components/About.jsx
import React from "react";
import styles from "./About.module.css";
import aboutImage from "../assets/home.png"; // Make sure about.png is in src/assets

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutImg}>
        <img src={aboutImage} alt="About Us" />
      </div>

      <div className={styles.aboutText}>
        <span>About Us</span>
        <h2>
          Healthy life is <br /> our passion
        </h2>
        <p>
          At FitnessHub, we believe that fitness is a journey, not a
          destination. Our mission is to provide a welcoming and empowering
          environment where individuals of all fitness levels can achieve their
          health and wellness goals.
        </p>
        <p>
          With state-of-the-art equipment, expert trainers, and a diverse range
          of classes, we're dedicated to helping you unlock your full potential.
        </p>
        <a href="#" className="btn">
          Learn More
        </a>{" "}
        {/* Using global .btn class */}
      </div>
    </section>
  );
};

export default About;
