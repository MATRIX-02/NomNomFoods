import { useState } from "react";

// Custom Hooks
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantList from "../../utils/useRestaurantList";

// Components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

// import resList from "../utils/config";            //enable this to use hard coded restaurant list data in case of API faliure

const Body = () => {
  const {
    listOfRestaurants = [],
    filteredRestaurant = [],
    setFilteredRestaurant,
  } = useRestaurantList();


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your Internet Connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center w-full">
      <Search listOfRestaurants={listOfRestaurants} filteredRestaurant={filteredRestaurant} setFilteredRestaurant={setFilteredRestaurant}/>
      <hr className="my-8" />
      
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
