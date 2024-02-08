import { useEffect, useState } from "react";
import { MENU_API, generateProxyUrl } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [offerInfo, setOfferInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);
  const [isPureVeg, setIsPureVeg] = useState(null);
  const [topPicks, setTopPicks] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(MENU_API + resId);
    const data = await fetch(resource);
    const json = await data.json();

    const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;
    setResInfo(restaurantInfo);

    setOfferInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    const temp =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    setMenuInfo(
      temp.filter(
        (items) =>
          items?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          items?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      )
    );

    setIsPureVeg(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
        ?.card?.isPureVeg
    );

    setTopPicks(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.carousel || null
    );
  };
  return { restaurantInfo: resInfo, menuInfo, offerInfo, isPureVeg, topPicks };
};

export default useRestaurantMenu;
