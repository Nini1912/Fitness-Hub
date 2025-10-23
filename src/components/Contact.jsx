import "./Contact.css";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Newsletter subscription attempted for:",
      e.target.elements[0].value
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contactBox">
        <h3>FitnessHub</h3>
        <h5>Connect With Us</h5>
        <div className="social">
          <a href="#" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      <div className="contactBox">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#blog-intro">Blog</a>
          </li>
          <li>
            <a href="#classes-intro">Classes</a>
          </li>
          <li>
            <a href="#programs-intro">Programs</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="contactBox">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <a href="#">
              <MapPin size={20} />
              123 Gym Street, Fitness City, FC 12345
            </a>
          </li>
          <li>
            <a href="#">
              <Phone size={20} />
              +123-456-7890
            </a>
          </li>
          <li>
            <a href="#">
              <Mail size={20} />
              info@fitnesshub.com
            </a>
          </li>
        </ul>
      </div>

      <div className="contactBox">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" required />
          <input type="submit" value="Subscribe" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
