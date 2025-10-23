import { useState } from "react";
import "./App.css";

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

  return (
    <div id="app-container">
      <Header onLoginClick={openLoginModal} />

      <main>
        <Hero onLoginClick={openLoginModal} />

        <IntroServices />

        <Services />

        <Workout />

        <About />

        <Testimonial />

        <Contact />
      </main>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onSwitchToSignup={openSignupModal}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeAllModals}
        onSwitchToLogin={openLoginModal}
      />
    </div>
  );
}

export default App;
