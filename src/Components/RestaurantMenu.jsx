/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import MenuOffers from "./MenuOffers";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import ResMenuList from "./ResMenuList";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [isVeg, setIsVeg] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const offers =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const menu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};

  

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-row1">
        <div>
          <h1 className="hotel-name">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>
        <div className="menu-rating-box">
          <div className="menu-rating">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              data-tags="star_rate"
            >
              <g fill="#3D9B6D" transform="scale(0.0234375 0.0234375)">
                <path d="M616 426l-104-340-104 340h-322l264 188-102 324 264-200 264 200-100-324 262-188h-322z" />
              </g>
            </svg>
            <p>{avgRating}</p>
          </div>
          <hr />
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <hr className="menu-separator" />
      <div className="menu-row2">
        <h4>
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            {sla.slaString}{" "}
          </span>
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            {costForTwoMessage}
          </span>
        </h4>
        <div className="offers-carausel">
          {offers.map((offer) => (
            <MenuOffers key={offer.info.offerIds} info={offer.info} />
          ))}
        </div>
      </div>
      <div className="menu-row3">
        {menu[0]?.card?.card?.isPureVeg ? (
          <h4>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path d="M505.664 67.248c-55.376-41.964-140.592-67.017-227.955-67.017-108.060 0-196.113 37.728-241.58 103.51-21.354 30.895-33.165 67.479-35.104 108.737-1.727 36.737 4.442 77.363 18.342 121.073 47.437-142.192 179.91-253.551 332.633-253.551 0 0-142.913 37.616-232.762 154.096-0.056 0.069-1.247 1.545-3.307 4.349-18.040 24.139-33.769 51.581-45.539 82.664-19.935 47.415-38.392 112.474-38.392 190.891h64c0 0-9.715-61.111 7.18-131.395 27.945 3.778 52.929 5.653 75.426 5.653 58.839 0 100.685-12.73 131.694-40.062 27.784-24.489 43.099-57.393 59.312-92.228 24.762-53.204 52.827-113.505 134.327-160.076 4.665-2.666 7.681-7.496 8.028-12.858s-2.020-10.54-6.303-13.786z"></path>
            </svg>{" "}
            Pure Veg
          </h4>
        ) : (
          <>
            <button
              className="show-veg"
              onClick={() => {
                setIsVeg((isVeg) => !isVeg);
              }}
              style={{
                background: isVeg ? "#008000" : "white",
                color: isVeg ? "white" : "black",
              }}
            >
              Veg Only
            </button>
          </>
        )}
        <hr />
        
          {
            menu.map((list, index)=>(
              <ResMenuList key={index} menulist={list?.card?.card} isVeg={isVeg} checkVeg={menu[0]?.card?.card?.isPureVeg} />
            ))
          }
      
      </div>
    </div>
  );
};

export default RestaurantMenu;
