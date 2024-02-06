import { useEffect, useState } from "react";
import { SWIGGY_API, LAT, LNG, generateProxyUrl } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const lat = "26.1197";
  const lng = "85.3910";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(
      SWIGGY_API.replace(LAT, lat).replace(LNG, lng)
    );
    const data = await fetch(resource);

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
  return {
    listOfRestaurants,
    filteredRestaurant,
    setListOfRestaurants,
    setFilteredRestaurant,
  };
};

export default useRestaurantList;
