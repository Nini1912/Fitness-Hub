import { X, Target } from "lucide-react";
import "./SignupModal.css";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const overlayClasses = `modal-overlay ${isOpen ? "open" : ""}`;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted. (Logic to be implemented)");
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={overlayClasses} onClick={onClose}>
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
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>

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
