import "./IntroCard.css";
const IntroCard = ({ title, imagePlaceholder }) => {
  return (
    <div className="introCard">
      <img
        src={imagePlaceholder}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/333/ffffff?text=Image+Unavailable";
        }}
      />
      <div className="text">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
export default IntroCard;
