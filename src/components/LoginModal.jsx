// src/components/LoginModal.jsx

import { X, HeartPulse } from "lucide-react";
import { useState } from "react";
import { auth, signInWithEmailAndPassword, signOut } from "../firebase";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup, showUserMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCodeMode, setIsCodeMode] = useState(false); // State to toggle code input form
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isCodeMode) {
      // 💡 Placeholder for Custom Code Verification 💡
      // In a real app, this would call your server to check the code against the database.
      if (verificationCode.length !== 6) {
        setError("Please enter a 6-digit code.");
        return;
      }

      showUserMessage(
        `Code entered: ${verificationCode}. Server verification required.`
      );
      // After successful code verification, you'd allow the user to proceed.
      // Since this is a placeholder, we switch back to password login.
      setIsCodeMode(false);
      setVerificationCode("");
      return;
    }

    try {
      // Standard Firebase Login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Optional: If you implement a database field to track verification, check it here.
      // If the user isn't verified (custom check), log them out and show the code mode.

      showUserMessage(
        `Welcome back, ${
          user.displayName || user.email
        }! You are now logged in.`
      );
      onClose();
    } catch (error) {
      console.error("Login Error:", error.code, error.message);
      setError("Invalid email or password.");
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="modal-header">
          <h2>
            <HeartPulse
              size={24}
              style={{ color: "var(--main-color)", marginRight: "10px" }}
            />
            LOG IN
          </h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleLoginSubmit}>
          {/* Conditional Rendering based on isCodeMode state */}
          {isCodeMode ? (
            <>
              <p className="text-center text-gray-400 mb-4 text-sm">
                Enter the 6-digit code sent to your email.
              </p>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="6-Digit Verification Code"
                  required
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="forgot-password text-sm">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsCodeMode((prev) => !prev);
              }}
              className="interactive-element nav-link"
            >
              {isCodeMode ? "Back to Password Login" : "Need a code to log in?"}
            </a>
          </div>

          {error && (
            <p
              style={{
                color: "var(--main-color)",
                textAlign: "center",
                fontSize: "0.9rem",
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" className="modal-submit-btn">
            {isCodeMode ? "VERIFY CODE" : "LOG IN"}
          </button>
        </form>

        <div className="modal-footer">
          Don't have an account?{" "}
          <a href="#" onClick={onSwitchToSignup}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default LoginModal;
