import { useEffect, useState } from "react";

// Constants
import {
  MENU_FOOD_IMG,
  NON_VEG_SYMBOL,
  VEG_SYMBOL,
} from "../../utils/constants";

// Components
import useAccordion from "../../utils/useAccordion";

// Styles

/* eslint-disable react/prop-types */
const CuisinesList = ({ menulist, isVeg, topPicks }) => {
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
      // If categories exist, filter item cards for each category and store in state
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
  }, [categories, itemCards, isVeg, filteredItemCards]);

  

  return(
    <>
    
    <div className="accordion-container">
      <div
        className={`flex justify-between food-category accordion-title ${
          accordionActive ? "active" : ""
        }`}
        onClick={toggleAccordion}
      >
        <h3>
          {title} (
          {(itemCards && itemCards.length) || (categories && categories.length)}
          )
        </h3>
        <span>▼</span>
      </div>
      <div className={`accordion-content ${accordionActive ? "active" : ""}`}>
        {filteredItemCards &&
          filteredItemCards.map((items, index) => (
            <div key={index} className="food-content">
              <div className="flex">
                {items?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img className="food-isVeg" src={VEG_SYMBOL}></img>
                ) : (
                  <img className="food-isVeg" src={NON_VEG_SYMBOL}></img>
                )}

                <h5 className="food-name">{items?.card?.info?.name}</h5>

                <p>
                  <span>&#8377;</span>{" "}
                  {items?.card?.info?.price / 100 ||
                    items?.card?.info?.defaultPrice / 100}
                </p>

                <p>{items?.card?.info?.description}</p>
              </div>
              {items?.card?.info?.imageId && (
                <div className="food-img">
                  <img
                    src={MENU_FOOD_IMG + items?.card?.info?.imageId}
                    alt=" "
                  />
                </div>
              )}
            </div>
          ))}

        {categories &&
          categories.map((category, index) => {
            return (
              <div key={index}>
                <h4
                  className={`accordion-title ${
                    nestedAccordionActive[index] ? "active" : ""
                  }`}
                  onClick={() => toggleNestedAccordion(index)}
                >
                  {category.title}
                </h4>
                <div
                  className={`accordion-content ${
                    nestedAccordionActive[index] ? "active" : ""
                  }`}
                >
                  {filteredCategoryItemCards[index] &&
                    filteredCategoryItemCards[index].map((items, itemIndex) => (
                      <div key={itemIndex} className="food-content">
                        <div className="flex">
                          {items?.card?.info?.itemAttribute?.vegClassifier ===
                          "VEG" ? (
                            <img className="food-isVeg" src={VEG_SYMBOL}></img>
                          ) : (
                            <img
                              className="food-isVeg"
                              src={NON_VEG_SYMBOL}
                            ></img>
                          )}

                          <h4>{items?.card?.info?.name}</h4>

                          <p>
                            <span>&#8377;</span>{" "}
                            {items?.card?.info?.price / 100 ||
                              items?.card?.info?.defaultPrice / 100}
                          </p>

                          <p>{items?.card?.info?.description}</p>
                        </div>
                        {items?.card?.info?.imageId && (
                          <div className="food-img">
                            <img
                              src={MENU_FOOD_IMG + items?.card?.info?.imageId}
                              alt=" "
                            />
                          </div>
                        )}
                      </div>
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
