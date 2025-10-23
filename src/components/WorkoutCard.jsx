import "./WorkoutCard.css";
import {
  Calendar,
} from "lucide-react";
const WorkoutCard = ({ title, duration }) => {
  const placeholderUrl =
    "https://placehold.co/300x200/222222/e50125?text=PROGRAM+IMAGE";

  return (
    <div className="box">
      <img
        src={placeholderUrl}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x200/333/ffffff?text=Image+Unavailable";
        }}
      />
      <div className="text">
        <h3>{title}</h3>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0",
            color: "#bdbdbd",
          }}
        >
          <Calendar
            size={18}
            style={{ marginRight: "5px", color: "var(--main-color)" }}
          />
          {duration}
        </p>
        <a href="#contact" className="btn">
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default WorkoutCard;
