import "./IntroServices.css";
import IntroCard from "./IntroCard";
import fitnessCentre from "../assets/FitnessCentre.png";
import trainerFit from "../assets/TrainerFit.png";
import ketoMealFit from "../assets/KetoMealFit.png";
const IntroServices = () => {
  const cardData = [
    { title: "Fitness Centres", imagePlaceholder: fitnessCentre },
    { title: "Personal Trainers", imagePlaceholder: trainerFit },
    { title: "Keto Meals", imagePlaceholder: ketoMealFit },
  ];

  return (
    <section id="introservices" className="introServices">
      <div className="heading">
        <span>OUR SERVICES</span>
        <h2>bla bla bla bla bla</h2>
      </div>
      <div className="introContent">
        {cardData.map((card, index) => (
          <IntroCard
            key={index}
            title={card.title}
            imagePlaceholder={card.imagePlaceholder}
          />
        ))}
      </div>
    </section>
  );
};

export default IntroServices;
