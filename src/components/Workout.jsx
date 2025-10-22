import "./Workout.css";
import WorkoutCard from "./WorkoutCard"; 

const Workout = () => {
  const workoutData = [
    { title: "28-Day Shred Challenge", duration: "4 Weeks" },
    { title: "Beginner's Power Building", duration: "12 Weeks" },
    { title: "Advanced Athlete Prep", duration: "8 Weeks" },
    { title: "Post-Rehab & Mobility", duration: "Continuous" },
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
          />
        ))}
      </div>
    </section>
  );
};

export default Workout;
