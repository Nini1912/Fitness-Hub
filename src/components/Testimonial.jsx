import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const testimonialData = [
    {
      image: "placeholder",
      name: "John Doe",
      role: "Gym Member",
      feedback:
        "FitnessHub has transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive, and the community is so welcoming. I've seen amazing progress!",
    },
    {
      image: "placeholder",
      name: "Alice Smith",
      role: "Gym Member",
      feedback:
        "I love the variety of classes offered at FitnessHub. Each session is challenging and fun, and I always leave feeling energized. Highly recommend this gym!",
    },
    {
      image: "placeholder",
      name: "David Lee",
      role: "Gym Member",
      feedback:
        "From the moment I joined, I felt right at home. The equipment is top-notch, and the atmosphere is motivating. FitnessHub truly cares about its members' success.",
    },
  ];

  return (
    <section id="testimonial">
      <div className="heading">
        <span>Testimonial</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonialContent">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
