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
  const {
    restaurantInfo,
    menuInfo,
    offerInfo,
    isPureVeg,
    topPicks,
  } = useRestaurantMenu(resId);

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
    <div className="w-full m-auto px-8 pt-20 2xl:w-1/2 sm:w-5/6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg text-[#282c3f]">{name}</h1>
          <p className="font-light text-sm my-1 text-[#7e808c]">
            {cuisines.join(", ")}
          </p>
          <p className="font-light text-sm my-1 text-[#7e808c]">
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>
        <div className="h-20 w-[4.5rem] border border-solid border-[#e9e9eb] flex flex-col justify-around items-center rounded-md ">
          <div className="flex justify-center items-center content-baseline">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="#3D9B6D" transform="scale(0.0234375 0.0234375)">
                <path d="M616 426l-104-340-104 340h-322l264 188-102 324 264-200 264 200-100-324 262-188h-322z" />
              </g>
            </svg>
            <p className="text-base pt-1">{avgRating}</p>
          </div>
          <hr className="w-5/6 border-[#e9e9eb]" />
          <p className="px-1 py-1 text-xs whitespace-nowrap">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <hr className="border border-dashed border-[#d3d3d3] my-5 " />
      <Offers
        time={sla.slaString}
        costForTwoMessage={costForTwoMessage}
        offerInfo={offerInfo}
      />
      <Cuisines restaurantInfo={restaurantInfo} isPureVeg={isPureVeg} menuInfo={menuInfo} topPicks={topPicks} />
    </div>
  );
};

export default RestaurantMenu;
