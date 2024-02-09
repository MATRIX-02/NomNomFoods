// Custom Hooks
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantList from "../../utils/useRestaurantList";

// Components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

// Constants
import { MENU_FOOD_IMG } from "../../utils/constants";

// import resList from "../utils/config";            //enable this to use hard coded restaurant list data in case of API faliure

const Body = () => {
  const {
    listOfRestaurants = [],
    filteredRestaurant = [],
    setFilteredRestaurant,
    homeSuggestions,
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
      
      <div className="w-10/12 h-64">
        <h2 className="text-2xl font-bold">Mayank, what's on your mind?</h2>
        <div className="flex overflow-x-auto overflow-y-hidden">
          {homeSuggestions.map((items)=>(
            <div key={items.id}>
              <img className="cursor-pointer h-48 max-w-max mx-3" src={MENU_FOOD_IMG + items.imageId} alt={items?.accessibility.altText} />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8 border-1 border-slate-200 w-10/12" />
      <Search
        listOfRestaurants={listOfRestaurants}
        filteredRestaurant={filteredRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />
        
      <div className="w-11/12 flex justify-center flex-wrap m-auto">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
