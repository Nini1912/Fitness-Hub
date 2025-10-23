import { X, Target } from "lucide-react";
import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebaseConfig";
import "./SignupModal.css";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up successfully:", userCredential.user.email);
    } catch (error) {
      console.error("Sign up error:", error.message);
      setError(error.message);
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
            <input type="text" placeholder="Full Name" required />
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

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", padding: "15px 0", marginTop: "10px" }}
          >
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
