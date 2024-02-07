import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-32 fixed inset-0 bg-white z-50 shadow-md">
      
        <img className="w-24 mix-blend-multiply" src={LOGO_URL} alt="NomNomFoods" />
      
      <div className="flex items-center">
        <ul className="flex justify-between list-none text-md font-bold capitalize whitespace-nowrap outline-none">
          <li>
            <Link className="text-[#3d4152] hover:text-[#fc8019] no-underline mx-10 p-4" to="/NomNomFoods">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="text-[#3d4152] hover:text-[#fc8019] no-underline mx-10 p-4" to="/NomNomFoods/about">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link className="text-[#3d4152] hover:text-[#fc8019] no-underline mx-10 p-4" to="/NomNomFoods/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-[#3d4152] hover:text-[#fc8019] no-underline mx-10 p-4" to="/NomNomFoods">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
