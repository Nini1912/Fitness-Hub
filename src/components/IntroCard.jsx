import './IntroCard.css'
const IntroCard = ({ title, imagePlaceholderText }) => {
  const placeholderUrl = `https://placehold.co/400x250/000000/e50125?text=${imagePlaceholderText}`;

  return (
    <div className="introCard">
      <img
        src={placeholderUrl}
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