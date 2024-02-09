import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchFilters from "./SearchFilters";

const Search = ({
  listOfRestaurants,
  setFilteredRestaurant,
  filteredRestaurant,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurant(listOfRestaurants);
    } else {
      const filteredlist = filteredRestaurant.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredlist);
    }
  }, [searchSubmit]);

  return (
    <div className="w-10/12 flex flex-col items-start">
      <form className="w-full">
        <div className="flex items-center justify-start shadow-md">
          <input
            className="h-10 w-full outline-none pl-4"
            type="text"
            placeholder="Search for restaurant and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <IoSearch className="pr-4 w-auto scale-110 cursor-pointer" />
          <input
            type="submit"
            className="hidden"
            onClick={(e) => {
              e.preventDefault();
              setSearchSubmit(!searchSubmit);
            }}
          />
        </div>
      </form>

      <SearchFilters
      searchSubmit= {searchSubmit}
        searchText= {searchText}
        listOfRestaurants={listOfRestaurants}
        filteredRestaurant={filteredRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />
    </div>
  );
};

export default Search;
