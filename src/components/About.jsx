import "./About.css";

const About = () => {
  // Placeholder for the external image
  const aboutImageUrl =
    "https://placehold.co/600x400/222222/e50125?text=BLOG+POST+IMAGE";

  return (
    <section className="about" id="about">
      <div className="aboutText" style={{ textAlign: "left", order: 2 }}>
        <span>Our Blog</span>
        <h2>
          Unlock Your Potential with <br /> Our Expert Insights
        </h2>
        <p>
          Dive into our latest articles on nutrition, workout techniques,
          recovery strategies, and mental wellness. We provide evidence-based
          information to help you optimize your fitness journey and live a
          healthier, stronger life.
        </p>
        <p>
          Read our latest post: **'The 5 Essential Rules for Gaining Muscle
          Mass'**.
        </p>
        <a href="#contact" className="btn">
          Read The Blog
        </a>{" "}
      </div>

      <div className="aboutImg" style={{ order: 1 }}>
        <img
          src={aboutImageUrl}
          alt="About Us"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/333/ffffff?text=Image+Unavailable";
          }}
        />
      </div>
    </section>
  );
};

export default About;
