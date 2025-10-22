// src/components/WorkoutCard.jsx
import React from "react";
import styles from "./WorkoutCard.module.css";

const WorkoutCard = ({ image, title, duration }) => {
  return (
    <div className={styles.box}>
      <img src={image} alt={title} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
