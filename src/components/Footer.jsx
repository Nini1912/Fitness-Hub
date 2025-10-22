import"./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>&copy; FitnessHub {currentYear} All Right Reserved.</p>
    </div>
  );
};
export default Footer;
