import { useEffect, useState } from "react";
import { MENU_API, generateProxyUrl } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);
  const [offerInfo, setOfferInfo] = useState(null);
  const [isPureVeg, setIsPureVeg] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(MENU_API + resId );
    const data = await fetch(resource);
    const json = await data.json();

    const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;
    setResInfo(restaurantInfo);

    setOfferInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);


    setMenuInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      

    setIsPureVeg(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.isPureVeg);


  };
  return { restaurantInfo: resInfo, menuInfo, offerInfo, isPureVeg };
};

export default useRestaurantMenu;
