import { X, HeartPulse } from "lucide-react";
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebaseConfig";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const overlayClasses = `modal-overlay ${isOpen ? "open" : ""}`;

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in successfully:", userCredential.user.email);
      onClose();
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password.");
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={overlayClasses} onClick={onClose}>
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
        <form onSubmit={handleSubmit}>
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

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
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
            LOG IN
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
