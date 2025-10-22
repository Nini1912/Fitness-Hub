// src/components/TestimonialCard.jsx
import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ image, name, role, feedback }) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxImg}>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
