// src/components/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import homeImage from "../assets/home.png"; // Make sure home.png is in src/assets

const Hero = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeText}>
        <span>Welcome To</span>
        <h1>
          FitnessHub <br /> Fitness Club
        </h1>
        <p>
          Your journey to a healthier, stronger you starts here. <br /> Join us
          and transform your life today!
        </p>
        <a href="#" className="btn">
          Join Us
        </a>{" "}
        {/* Using global .btn class */}
      </div>

      <div className={styles.homeImg}>
        <img src={homeImage} alt="FitnessHub Home" />
      </div>
    </section>
  );
};

export default Hero;
