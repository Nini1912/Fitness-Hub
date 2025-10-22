import React, { useState } from "react";
// Import your CSS file here
import "./App.css"; // <--- THIS IS THE KEY CHANGE

import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroServices from "./components/IntroServices";
import SectionIntroBlock from "./components/SectionIntroBlock";
import Services from "./components/Services";
import Workout from "./components/Workout";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

// Import all necessary icons from Lucide
import {
  Menu,
  X,
  Dumbbell,
  Activity,
  Calendar,
  Zap,
  Sun,
  Moon,
  Target,
  ShieldCheck,
  Heart,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  User,
  Flame,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

// (GLOBAL_STYLES constant is GONE!)

// ... (All your other component definitions like LoginModal, Header, Hero, etc., would go here) ...

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const openLoginModal = () => {
    closeAllModals();
    setIsLoginModalOpen(true);
  };

  const openSignupModal = () => {
    closeAllModals();
    setIsSignupModalOpen(true);
  };

  // The useEffect for injecting GLOBAL_STYLES is removed!
  // The CSS is now handled by the import './App.css'; statement.

  return (
    <div id="app-container">
      {/* Pass the function to open the Login Modal to the Header */}
      <Header onLoginClick={openLoginModal} />

      <main>
        <Hero />

        {/* 1. INTRO SERVICES CARDS (Light Background, overlaps Hero) */}
        <IntroServices />

        {/* 2. CLASSES INTRO BLOCK (Light Background, from wireframe) */}
        <SectionIntroBlock
          id="classes-intro"
          title="Our Classes"
          description="This section is the destination for the 'CLASSES' link. Explore our wide range of group fitness classes and schedules."
          isLightBackground={true}
        />

        {/* 3. CLASSES DETAIL SECTION (Dark Background, actual class listings) */}
        <Services />

        {/* 4. PROGRAMS INTRO BLOCK (Light Background, from wireframe) */}
        <SectionIntroBlock
          id="programs-intro"
          title="Custom Programs"
          description="This section is the destination for the 'PROGRAMS' link. Find a structured training program tailored to your fitness goals."
          isLightBackground={true}
        />

        {/* 5. PROGRAMS DETAIL SECTION (Dark Background, actual program listings) */}
        <Workout />

        {/* 6. BLOG INTRO BLOCK (Light Background, from wireframe) */}
        <SectionIntroBlock
          id="blog-intro"
          title="Latest Blog Posts"
          description="This section is the destination for the 'BLOG' link. Read our tips, nutrition guides, and motivation articles."
          isLightBackground={true}
        />

        {/* 7. BLOG DETAIL SECTION (Dark Background, detail blog content) */}
        <About />

        {/* 8. TESTIMONIALS (Dark Background) */}
        <Testimonial />

        {/* 9. CONTACT (Dark Background, now includes wireframe's "Get In Touch" feeling) */}
        <Contact />
      </main>

      <Footer />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onSwitchToSignup={openSignupModal} // Function to switch to Signup
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeAllModals}
        onSwitchToLogin={openLoginModal} // Function to switch back to Login
      />
    </div>
  );
}

export default App;
