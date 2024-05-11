/* eslint-disable react/no-unknown-property */

/* eslint-disable react/prop-types */
import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, locality, sla, id } =
    resList?.info || {};

  return (
    <div className="m-8 w-4/5 h-auto transition-all duration-300 ease overflow-hidden cursor-pointer hover:scale-110 lg:w-2/6 2xl:w-1/5 ">
      <Link className="no-underline" to={"/NomNomFoods/restaurants/" + id}>
        <img
          className="rounded-2xl w-full h-56 object-cover overflow-hidden"
          src={CDN_URL + cloudinaryImageId}
          alt=""
          draggable="false"
        />
        <div className="p-2">
          <h3 className="text-lg font-bold text-[#494c51]">{name}</h3>
          <h4 className="flex items-center font-medium ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            {avgRating} • {sla?.slaString}
          </h4>
          <h4 className="text-sm font-extralight text-[#6e7174] overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(", ")}</h4>
          <h4 className="text-sm font-extralight text-[#6e7174] overflow-hidden text-ellipsis whitespace-nowrap">{locality}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
