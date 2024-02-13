import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="h-20 flex justify-between items-center px-32 fixed inset-0 bg-white z-50 shadow-md">
      <Link to="/NomNomFoods">
        <img
          className="w-auto h-full mix-blend-multiply"
          src="./Images/Logo.png"
          alt="NomNomFoods"
        />
      </Link>
      <div className="flex items-center">
        <ul className="flex justify-between list-none text-md font-bold capitalize whitespace-nowrap outline-none">
          <li className="">
            <Link
              className="text-[#3d4152] hover:text-[#fc8019] transition-all duration-300 no-underline flex p-4"
              to="/NomNomFoods"
            >
              <span className="pt-1 pr-1 scale-150">
                <IoIosSearch />
              </span>
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/help"
            >
              <span>
                <IoHelpBuoyOutline className="pt-1 pr-1 scale-150" />
              </span>
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/contact"
            >
              <span>
                <FiUser className="pt-1 pr-1 scale-150" />
              </span>
              <span>User</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/cart"
            >
              <span>
                <FiShoppingCart className="pt-1 pr-1 scale-150" />
              </span>
              <span>Cart ({cartItems.length})</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
