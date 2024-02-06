import { useState } from "react";

// Custom Hooks
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantList from "../../utils/useRestaurantList";

// Components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// import resList from "../utils/config";            //enable this to use hard coded restaurant list data in case of API faliure

const Body = () => {
  
  const {listOfRestaurants=[], filteredRestaurant=[], setListOfRestaurants, setFilteredRestaurant} = useRestaurantList();
  const [searchText, setSearchText] = useState("");

  

  const onlineStatus = useOnlineStatus();


  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!! Please check your Internet Connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <form className="search">
          <input
            placeholder="Search for restaurant and food"
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={(e) => {
              e.preventDefault();
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </form>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
