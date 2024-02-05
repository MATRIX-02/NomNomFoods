import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import LoadingBar from "react-top-loading-bar";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { SWIGGY_API } from "../../utils/constants";
// import resList from "../utils/config";            //enable this to use hard coded restaurant list data in case of API faliure

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     SWIGGY_API
    );

    const json = await data.json();

    const cardArray = json?.data?.cards || [];

    let selectedRestaurants;

    for (let i = 0; i <= 11; i++) {
      selectedRestaurants =
        cardArray[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (selectedRestaurants) {
        break; // Exit the loop if a valid array is found
      }
    }

    setListOfRestaurants(selectedRestaurants || []);
    setFilteredRestaurant(selectedRestaurants || []);
  };

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
