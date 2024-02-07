import { useEffect, useState } from "react";

const SearchFilters = ({
  searchText,
  listOfRestaurants,
  setFilteredRestaurant,
  filteredRestaurant,
}) => {
  const [isTopRated, setIsTopRated] = useState(false);
  

  const topRatedHandler = () => {
    setIsTopRated(!isTopRated);
    if (isTopRated) {
      const filteredList = filteredRestaurant.filter(
        (res) => res.info.avgRating >= 4.5
      );
      setFilteredRestaurant(filteredList);
    }  else {
      setFilteredRestaurant(listOfRestaurants);
    }
  };

  
  useEffect(() => {
    if (searchText === "") {
      if (isTopRated) {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating >= 4.5
        );
        setFilteredRestaurant(filteredList);
      } else {
        setFilteredRestaurant(listOfRestaurants);
      }
    } else {
      // Handle search functionality here when searchText is not empty
      const filteredList = filteredRestaurant.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredList);
    }
  }, [searchText, isTopRated, listOfRestaurants, filteredRestaurant]);
  
  


  return (
    <div className="flex justify-center m-3">
      <button
        className={`p-2 rounded-xl text-gray-500 text-sm ${
          isTopRated ?" bg-green-500 text-white": "bg-slate-50" 
        } transition-all ease-in-out delay-50`}
        onClick={(e) => {
          e.preventDefault();
          topRatedHandler();
        }}
      >
        Show Top Rated Restaurants
      </button>
    </div>
  );
};

export default SearchFilters;
