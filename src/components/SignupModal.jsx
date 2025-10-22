import "./SignupModal.css";
const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  // <-- Added onSwitchToLogin prop
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle user creation (e.g., Firebase sign-up)
    console.log("Signup form submitted. (Logic to be implemented)");
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
            {/* Target icon for 'Create Account' as a goal-setting visual */}
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