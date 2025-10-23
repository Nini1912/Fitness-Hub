import "./IntroServices.css";
import IntroCard from "./IntroCard";
const IntroServices = () => {
  const cardData = [
    { title: "Fitness Centres", imagePlaceholderText: "FITNESS+CENTRES" },
    { title: "Personal Trainers", imagePlaceholderText: "PERSONAL+TRAINERS" },
    { title: "Keto Meals", imagePlaceholderText: "KETO+POWER" },
  ];

  return (
    <section id="introservices" className="introServices">
      <div className="introContent">
        {cardData.map((card, index) => (
          <IntroCard
            key={index}
            title={card.title}
            imagePlaceholderText={card.imagePlaceholderText}
          />
        ))}
      </div>
    </section>
  );
};

export default IntroServices;
