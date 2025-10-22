import "./Hero.css";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="homeContent">
        <div className="homeText">
          <h1>
            Start Your <br /> Training Now
          </h1>
          <p>Start smart with us</p>
          <a href="#classes-intro" className="btn">
            START YOUR FREE TRIAL
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
