// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Workout from "./components/Workout";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact"; // Import Contact component
import Footer from "./components/Footer"; // Import Footer component
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Workout />
      <Testimonial />
      <Contact /> {/* Use the Contact component here */}
      <Footer /> {/* Use the Footer component here */}
    </>
  );
}

export default App;
