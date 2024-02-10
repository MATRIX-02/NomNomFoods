import { useEffect, useState } from "react";

//Icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Components
import CuisineStyles from "./CuisineStyles";

const CuisinesList = ({showItems, setShowItems,categoryToggles, toggleCategory, menulist, isVeg }) => {
  const { title, itemCards, categories } = menulist;
  const [filteredItemCards, setFilteredItemCards] = useState([]);
  const [filteredCategoryItemCards, setFilteredCategoryItemCards] = useState(
    []
  );

  const showItemHandler = () => {
    setShowItems();
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      const newFilteredCategoryItemCards = categories.map((category) => {
        return isVeg && Array.isArray(category.itemCards)
          ? category.itemCards.filter(
              (item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
            )
          : category.itemCards;
      });
      setFilteredCategoryItemCards(newFilteredCategoryItemCards);
      // setCategoryToggles(new Array(categories.length).fill(false));
    } else {
      if (isVeg && Array.isArray(itemCards)) {
        const filteredItem = itemCards.filter(
          (item) => item?.card?.info?.isVeg !== undefined
        );
        setFilteredItemCards(filteredItem);
      } else {
        setFilteredItemCards(itemCards);
      }
    }
  }, [isVeg]);


  return (
    <>
      <div className="mb-5">
        <div
          className="flex justify-between border-b-[1px] border-[#d3d3d3] p-3 cursor-pointer"
          onClick={showItemHandler}
        >
          <h3 className="font-semibold">
            {title} (
            {(filteredItemCards && filteredItemCards.length) ||
              (filteredCategoryItemCards && filteredCategoryItemCards.length)}
            )
          </h3>
          <span
            className={`flex items-center scale-150 transition-transform transform ${
              showItems ? "rotate-180 origin-middle" : ""
            }`}
          >
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
        <div className="p-3">
          {showItems &&
            filteredItemCards &&
            filteredItemCards.map((items, index) => (
              <CuisineStyles key={index} items={items} />
            ))}

          {showItems &&
            categories &&
            categories.map((category, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between  cursor-pointer" onClick={() => toggleCategory(index)}>
                    <h4 className="font-sm font-medium m-3">
                      {category.title} (
                      {filteredCategoryItemCards[index] &&
                        filteredCategoryItemCards[index].length}
                      )
                    </h4>
                    <span
                      className={`flex w-fit items-center scale-150 transition-transform transform ${
                        categoryToggles[index] ? "rotate-180 origin-middle" : ""
                      }`}
                    >
                      <MdOutlineKeyboardArrowDown className=" opacity-50" />
                    </span>
                  </div>

                  <div>
                    {categoryToggles[index] &&
                      filteredCategoryItemCards[index] &&
                      filteredCategoryItemCards[index].map((items, index) => (
                        <CuisineStyles key={index} items={items} />
                      ))}
                    <hr />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CuisinesList;
