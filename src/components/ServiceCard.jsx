import "./ServiceCard.css";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="row">
      {Icon && (
        <Icon
          style={{
            color: "var(--main-color)",
            margin: "0 auto 20px",
            display: "block",
          }}
          size={60}
        />
      )}

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ServiceCard;
