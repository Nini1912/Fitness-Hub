// src/components/Services.jsx
import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

// Import images for service cards
import s1Image from "../assets/home.png";
import s2Image from "../assets/home.png";
import s3Image from "../assets/home.png";

const Services = () => {
  // Array of service data to map over for ServiceCard components
  const serviceData = [
    {
      image: s1Image,
      title: "Strength Training",
      description:
        "Build muscle and increase your power with our guided strength programs.",
    },
    {
      image: s2Image,
      title: "Cardio Training",
      description:
        "Improve endurance and burn calories with dynamic cardio workouts.",
    },
    {
      image: s3Image,
      title: "Fat Loss Training",
      description:
        "Achieve your weight goals with personalized fat loss strategies and exercises.",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.heading}>
        <span>Our Services</span>
        <h2>
          Access to the best fitness <br /> training in town
        </h2>
      </div>

      <div className={styles.servicesContent}>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index} // In a real app, use a unique ID from data
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
