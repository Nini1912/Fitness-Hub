// src/components/ServiceCard.jsx
import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className={styles.row}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
