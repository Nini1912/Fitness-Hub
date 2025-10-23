import { X } from "lucide-react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const overlayClasses = `modal-overlay ${isOpen ? "open" : ""}`;

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>LOG IN</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

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
