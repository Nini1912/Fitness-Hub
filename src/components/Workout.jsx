import "./Workout.css";
import WorkoutCard from "./WorkoutCard";
import crossfit from "../assets/crossfit.png";
import gym from "../assets/gym.png";
import yoga from "../assets/yoga.png";
import smallgym from "../assets/smallgym.png";

const Workout = () => {
  const workoutData = [
    {
      title: "28-Day Shred Challenge",
      duration: "4 Weeks",
      placeholderImage: crossfit,
    },
    {
      title: "Beginner's Power Building",
      duration: "12 Weeks",
      placeholderImage: gym,
    },
    {
      title: "Advanced Athlete Prep",
      duration: "8 Weeks",
      placeholderImage: yoga,
    },
    {
      title: "Post-Rehab & Mobility",
      duration: "Continuous",
      placeholderImage: smallgym,
    },
  ];

  return (
    <section id="workout" className="workoutSection">
      <div className="heading">
        <span>OUR PROGRAMS</span>
        <h2>Structured Paths to Success</h2>
      </div>

      <div className="workoutContent">
        {workoutData.map((workout, index) => (
          <WorkoutCard
            key={index}
            title={workout.title}
            duration={workout.duration}
            placeholderImage={workout.placeholderImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Workout;
