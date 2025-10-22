import "./Services.css";
import ServiceCard from "./ServiceCard";
import { Dumbbell, Zap, User } from "lucide-react";

const Services = () => {
  const serviceData = [
    {
      icon: Dumbbell,
      title: "Weightlifting Classes",
      description:
        "Master the fundamental lifts and build strength in a controlled environment.",
    },
    {
      icon: Zap,
      title: "HIIT & Cardio Classes",
      description:
        "High-intensity interval training for maximum calorie burn and endurance boost.",
    },
    {
      icon: User,
      title: "Personal Training",
      description:
        "One-on-one coaching tailored precisely to your unique goals and schedule.",
    },
  ];

  return (
    // The Classes detail section is the main dark section body
    <section id="services-detail">
      <div className="heading">
        <span>Wide Variety</span>
        <h2>Explore All Our Group Fitness Classes</h2>
      </div>
      <div className="servicesContent">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
