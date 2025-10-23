import { useState, useEffect } from "react";
import { auth, onAuthStateChanged, signOut } from "./firebase";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import "./App.css";

// 💡 Placeholder for the global user message utility
function showUserMessage(message) {
  // Replace with a proper toast or notification component in production.
  alert(message);
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Listen for Firebase Auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      showUserMessage("You have been successfully logged out.");
    } catch (error) {
      showUserMessage(`Logout Failed: ${error.message}`);
    }
  };

  return (
    <div id="app-container">
      <Header
        user={user}
        onLoginClick={openLoginModal}
        onLogout={handleLogout}
      />

      <main>{/* ... Your other components (Hero, IntroServices, etc.) */}</main>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onSwitchToSignup={openSignupModal}
        showUserMessage={showUserMessage}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeAllModals}
        onSwitchToLogin={openLoginModal}
        showUserMessage={showUserMessage}
      />
    </div>
  );
}

export default App;
