import { useEffect, useState } from "react";

//Icons
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Components
import CuisineStyles from "./CuisineStyles";

// Components
import useAccordion from "../../utils/useAccordion";

const CuisinesList = ({ menulist, isVeg }) => {
  const { title, itemCards, categories } = menulist;
  const [filteredItemCards, setFilteredItemCards] = useState([]);
  const [filteredCategoryItemCards, setFilteredCategoryItemCards] = useState(
    []
  );

  const {
    accordionActive,
    toggleAccordion,
    nestedAccordionActive,
    toggleNestedAccordion,
  } = useAccordion();

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
      <div className="accordion-container">
        <div
          className={`flex justify-between border-b-[1px] border-[#d3d3d3] accordion-title ${
            accordionActive ? "active" : ""
          }`}
          onClick={toggleAccordion}
        >
          <h3 className="font-semibold">
            {title} (
            {(filteredItemCards && filteredItemCards.length) ||
              (filteredCategoryItemCards && filteredCategoryItemCards.length)}
            )
          </h3>
          <span
            className={`flex items-center scale-150 transition-transform transform ${
              accordionActive ? "rotate-180 origin-middle" : ""
            }`}
          >
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
        <div className={`accordion-content ${accordionActive ? "active" : ""}`}>
          {filteredItemCards &&
            filteredItemCards.map((items, index) => (
              <CuisineStyles key={index} items={items} />
            ))}

          {categories &&
            categories.map((category, index) => {
              return (
                <div key={index}>
                  <h4
                    className={`font-sm font-medium accordion-title ${
                      nestedAccordionActive[index] ? "active" : ""
                    }`}
                    onClick={() => toggleNestedAccordion(index)}
                  >
                    {category.title} (
                    {filteredCategoryItemCards[index] &&
                      filteredCategoryItemCards[index].length}
                    )
                  </h4>
                  <div
                    className={`accordion-content ${
                      nestedAccordionActive[index] ? "active" : ""
                    }`}
                  >
                    {filteredCategoryItemCards[index] &&
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
