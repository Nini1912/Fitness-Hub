import "./SectionIntroBlock.css";
const SectionIntroBlock = ({ id, title, description, isLightBackground }) => {
  const sectionClass = isLightBackground
    ? "section-intro-block"
    : "section-intro-block dark-bg";
  return (
    <section id={id} className={`${sectionClass} ${id}`}>
      <div className="section-intro-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};
export default SectionIntroBlock;
