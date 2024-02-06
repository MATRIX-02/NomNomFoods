/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";

// Custom Hooks
import useRestaurantMenu from "../../utils/useRestaurantMenu";

// Components
import Shimmer from "./Shimmer";
import Offers from "./Offers";
import Cuisines from "./Cuisines";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, menuInfo, offerInfo, isPureVeg } = useRestaurantMenu(
    resId
  );
  
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
    costForTwoMessage,
  } = restaurantInfo || {};

  return restaurantInfo === null ? (
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
      <Offers time={sla.slaString} costForTwoMessage = {costForTwoMessage} offerInfo={offerInfo}/>
      <Cuisines isPureVeg={isPureVeg} menuInfo={menuInfo} />
      
    </div>
  );
};

export default RestaurantMenu;
