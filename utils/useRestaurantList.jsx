import { useEffect, useState } from "react";
import { SWIGGY_API, generateProxyUrl } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(SWIGGY_API);
    const data = await fetch(resource);

    const json = await data.json();

    const cardArray = json?.data?.cards || [];

    let selectedRestaurants;

    for (let i = 0; i <= 11; i++) {
      selectedRestaurants =
        cardArray[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (selectedRestaurants) {
        break; 
      }
    }

    setListOfRestaurants(selectedRestaurants || []);
    setFilteredRestaurant(selectedRestaurants || []);
  };
  return {
    listOfRestaurants,
    filteredRestaurant,
    setListOfRestaurants,
    setFilteredRestaurant,
  };
};

export default useRestaurantList;
