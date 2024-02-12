import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

import {  useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="h-20 flex justify-between items-center px-32 fixed inset-0 bg-white z-50 shadow-md">
      <img
        className="w-24 mix-blend-multiply"
        src={LOGO_URL}
        alt="NomNomFoods"
      />

      <div className="flex items-center">
        <ul className="flex justify-between list-none text-md font-bold capitalize whitespace-nowrap outline-none">
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods"
            >
              <span className="pt-1 pr-1 scale-100">
                <IoHomeOutline />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/about"
            >
              <span>
                <AiOutlineQuestion className="pt-1 pr-1 scale-150" />
              </span>
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/contact"
            >
              <span>
                <MdOutlineContactSupport className="pt-1 pr-1 scale-150" />
              </span>
              <span>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#3d4152] transition-all duration-300 hover:text-[#fc8019] no-underline flex p-4"
              to="/NomNomFoods/cart"
            >
              <span>
                <FiShoppingCart className="pt-1 pr-1 scale-150"/>
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
