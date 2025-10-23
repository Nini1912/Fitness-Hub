// src/components/SignupModal.jsx

import { X, Target } from "lucide-react";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "../firebase";
import "./SignupModal.css";

// 🚨 External API Endpoint from your account.js server
const API_ENDPOINT = "http://localhost:3000/send-code";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin, showUserMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic password validation adapted from original logic
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter and one number."
      );
      return;
    }

    try {
      // 1. Create the user with Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 2. Set the display name
      if (name) {
        await updateProfile(user, { displayName: name });
      }

      // 3. Immediately sign out the user to enforce verification step upon next login
      await signOut(auth);

      // 4. Show loading message while contacting the server
      showUserMessage(
        `Account created. Sending verification code to ${email}...`
      );

      // 5. Call the Node.js server to send the custom code
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success message
        showUserMessage(
          "Success! A verification code has been sent. Please check your inbox and spam folder, then proceed to Log In."
        );
      } else {
        // If the email server call fails
        showUserMessage(
          data.message ||
            "Account created, but failed to send verification code. Check your server logs."
        );
      }

      // After creation and email attempt, switch to the login modal
      onSwitchToLogin();
    } catch (error) {
      console.error("Sign Up Error:", error.code, error.message);
      // Clean up the error message for display
      let errorMessage = error.message.replace("Firebase: Error ", "");
      setError(`Sign Up Failed: ${errorMessage}`);
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
            <Target
              size={24}
              style={{ color: "var(--main-color)", marginRight: "10px" }}
            />
            CREATE ACCOUNT
          </h2>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password (Min 8 chars, 1 Uppercase, 1 Num)"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
            SIGN UP
          </button>
        </form>

        <div className="modal-footer">
          Already a member?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToLogin();
            }}
          >
            Switch to Log in
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignupModal;
