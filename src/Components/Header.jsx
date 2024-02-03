import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Foog Logo " />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-link" to="/NomNomFoods">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="nav-link" to="/NomNomFoods/about">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/NomNomFoods/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/NomNomFoods">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
