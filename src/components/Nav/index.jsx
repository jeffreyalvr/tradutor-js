import "./styles.css";
import icon from "../../assets/images/translate.png";

const Nav = ({ title }) => {
  return (
    <nav>
      <img className="icon" src={icon} />
      <p className="title">{title}</p>
    </nav>
  );
};

export default Nav;
