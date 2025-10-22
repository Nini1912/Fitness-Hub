// src/components/Workout.jsx
import React from "react";
import styles from "./Workout.module.css";
import WorkoutCard from "./WorkoutCard"; // Import the WorkoutCard component

// Import images for workout cards
import w1Image from "../assets/home.png";
import w2Image from "../assets/home.png";
import w3Image from "../assets/home.png";
import w4Image from "../assets/home.png";

const Workout = () => {
  // Array of workout data
  const workoutData = [
    {
      image: w1Image,
      title: "Strength Training",
      duration: "2 Hours",
    },
    {
      image: w2Image,
      title: "Cardio Training",
      duration: "2 Hours",
    },
    {
      image: w3Image,
      title: "Fat Loss Training",
      duration: "1.5 Hours",
    },
    {
      image: w4Image,
      title: "Weight Gain Training",
      duration: "3 Hours",
    },
  ];

  return (
    <section className={styles.workout} id="workout">
      <div className="heading">
        {" "}
        {/* Using the global heading class */}
        <span>OUR WORKOUT</span>
        <h2>Choose Your Workout Program</h2>
      </div>

      <div className={styles.workoutContent}>
        {workoutData.map((workout, index) => (
          <WorkoutCard
            key={index} // Use a unique ID in a real app
            image={workout.image}
            title={workout.title}
            duration={workout.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Workout;
