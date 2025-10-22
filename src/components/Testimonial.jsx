// src/components/Testimonial.jsx
import React from "react";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard"; // Import TestimonialCard

// Import images for testimonials
import test1Image from "../assets/home.png";
import test2Image from "../assets/home.png";
import test3Image from "../assets/home.png";

const Testimonial = () => {
  const testimonialData = [
    {
      image: test1Image,
      name: "John Doe",
      role: "Gym Member",
      feedback:
        "FitnessHub has transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive, and the community is so welcoming. I've seen amazing progress!",
    },
    {
      image: test2Image,
      name: "Alice Smith",
      role: "Gym Member",
      feedback:
        "I love the variety of classes offered at FitnessHub. Each session is challenging and fun, and I always leave feeling energized. Highly recommend this gym!",
    },
    {
      image: test3Image,
      name: "David Lee",
      role: "Gym Member",
      feedback:
        "From the moment I joined, I felt right at home. The equipment is top-notch, and the atmosphere is motivating. FitnessHub truly cares about its members' success.",
    },
  ];

  return (
    <section className={styles.testimonial} id="testimonial">
      <div className="heading">
        {" "}
        {/* Using the global heading class */}
        <span>Testimonial</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className={styles.testimonialContent}>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index} // Use a unique ID in a real app
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
