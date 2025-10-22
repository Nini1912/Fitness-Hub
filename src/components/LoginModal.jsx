import "./LoginModal.css";
const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  // <-- Added onSwitchToSignup prop
  // Return null if the modal is not open
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication (e.g., Firebase sign-in)
    console.log("Login form submitted. (Logic to be implemented)");
    // onClose();
  };

  // Stop click events on the content from propagating to the overlay (to prevent closing on content click)
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="modal-header">
          <h2>
            {/* User icon for Member Login */}
            <User
              size={24}
              style={{ color: "var(--main-color)", marginRight: "10px" }}
            />
            MEMBER LOGIN
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
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot-password">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", padding: "15px 0" }}
          >
            LOG IN
          </button>
        </form>

        <div className="modal-footer">
          New here?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToSignup();
            }}
          >
            Switch to Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
