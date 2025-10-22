import "./TestimonialCard.css";
const TestimonialCard = ({ image, name, role, feedback }) => {
  const placeholder = "https://placehold.co/100x100/e50125/ffffff?text=U";

  return (
    <div className="testimonialBox">
      <div className="boxImg">
        <img
          src={placeholder}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/100x100/333/ffffff?text=U";
          }}
        />
      </div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
