// src/components/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  // For demonstration, form submission will not be functional.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Newsletter subscription (frontend only) - In a real app, this would send data to a server!"
    );
  };

  return (
    <section className={styles.contact} id="contact">
      {/* Box 1: FitnessHub Info & Social */}
      <div className={styles.contactBox}>
        <h3>FitnessHub</h3>
        <h5>Connect With Us</h5>
        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      {/* Box 2: Quick Links */}
      <div className={styles.contactBox}>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#workout">Workout</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Box 3: Contact Info */}
      <div className={styles.contactBox}>
        <h3>Contact Info</h3>
        <ul>
          <li>
            <a href="#">
              <i className="bx bxs-map"></i>
              123 Gym Street, Fitness City, FC 12345
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-phone"></i>
              +123-456-7890
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-envelope"></i>
              info@fitnesshub.com
            </a>
          </li>
        </ul>
      </div>

      {/* Box 4: Newsletter */}
      <div className={styles.contactBox}>
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" required />
          <input type="submit" value="Subscribe" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
