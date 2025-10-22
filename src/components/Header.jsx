import { useState, useEffect } from "react";
import "./Header.css";
import {
  Menu,
  X,
  HeartPulse,
} from "lucide-react";

const Header = ({ onLoginClick }) => {
  // <-- Prop added to handle login button click
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Updated sections to include the new intro blocks and details sections
      const sections = [
        "home",
        "introservices",
        "classes-intro",
        "services-detail",
        "programs-intro",
        "workout",
        "blog-intro",
        "about",
        "testimonial",
        "contact",
      ];
      let currentActive = "home";
      // Iterate backwards to find the highest section on screen
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        // Use a slightly larger offset for sections like home
        const offset = sections[i] === "home" ? 300 : 150;
        if (section && window.scrollY >= section.offsetTop - offset) {
          // Map the specific section ID back to the main navigation link ID
          if (sections[i].includes("classes")) {
            currentActive = "services";
          } else if (
            sections[i].includes("programs") ||
            sections[i] === "workout"
          ) {
            currentActive = "workout";
          } else if (sections[i].includes("blog") || sections[i] === "about") {
            currentActive = "about";
          } else {
            currentActive = sections[i];
          }
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navLinks = [
    // Link IDs match the logic in handleScroll/setActiveSection
    { id: "services", label: "CLASSES" },
    { id: "workout", label: "PROGRAMS" },
    { id: "about", label: "BLOG" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header className="header">
      <a href="#home" className="logo">
        <HeartPulse size={30} style={{ color: "var(--main-color)" }} />
        <span>FITNESS HUB</span>
      </a>

      <div className="menuIcon" id="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              // Link targets the main intro block for each section
              href={
                link.id === "services"
                  ? "#classes-intro"
                  : link.id === "workout"
                  ? "#programs-intro"
                  : link.id === "about"
                  ? "#blog-intro"
                  : `#${link.id}`
              }
              className={activeSection === link.id ? "active" : ""}
              onClick={() => handleNavLinkClick(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
        {/* LOG IN BUTTON: Styled as a prominent red button in the navbar */}
        <li key="login-item">
          <div
            className="logInBtn" // Uses the distinct red button style defined in CSS
            onClick={(e) => {
              e.preventDefault();
              onLoginClick(); // Call the function passed from App to open the modal
              setIsMenuOpen(false); // Close mobile menu if open
            }}
          >
            LOG IN
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
