/* eslint-disable react/prop-types */
import { useState } from "react";
import CuisinesList from "./CuisinesList";
import Toggle from "react-toggle";
import CuisinesCarousel from "./CuisinesCarousel";
import "react-toggle/style.css";

const Cuisines = ({ topPicks, isPureVeg, menuInfo }) => {
  const [isVeg, setIsVeg] = useState(false);
  const [showItems, setShowItems] = useState(null);
  const [categoryToggles, setCategoryToggles] = useState([]);

 
  // const toggleCategory = (index) => {
  //   const newToggles = [...categoryToggles];
  //   newToggles[index] = !newToggles[index];
  //   setCategoryToggles(newToggles);
  // };
  
  const toggleCategory = (index) => {
    const newToggles = categoryToggles.map(() => false);
    if (!categoryToggles[index]) {
      newToggles[index] = true;
    }
    
    setCategoryToggles(newToggles);
  };
  

  return (
    <div className="my-12">
      {isPureVeg ? (
        <h4 className="font-light text-[#535665] flex items-center mt-4">
          <svg
            className="fill-[#008000]"
            width="16"
            height="16"
            viewBox="0 0 512 512"
            style={{ marginRight: 8 + "px" }}
          >
            <path d="M505.664 67.248c-55.376-41.964-140.592-67.017-227.955-67.017-108.060 0-196.113 37.728-241.58 103.51-21.354 30.895-33.165 67.479-35.104 108.737-1.727 36.737 4.442 77.363 18.342 121.073 47.437-142.192 179.91-253.551 332.633-253.551 0 0-142.913 37.616-232.762 154.096-0.056 0.069-1.247 1.545-3.307 4.349-18.040 24.139-33.769 51.581-45.539 82.664-19.935 47.415-38.392 112.474-38.392 190.891h64c0 0-9.715-61.111 7.18-131.395 27.945 3.778 52.929 5.653 75.426 5.653 58.839 0 100.685-12.73 131.694-40.062 27.784-24.489 43.099-57.393 59.312-92.228 24.762-53.204 52.827-113.505 134.327-160.076 4.665-2.666 7.681-7.496 8.028-12.858s-2.020-10.54-6.303-13.786z"></path>
          </svg>
          Pure Veg
        </h4>
      ) : (
        <label>
          <Toggle
            className="relative"
            defaultChecked={isVeg}
            icons={{
              checked: (
                <svg
                  className="absolute top-0 bottom-0 m-auto"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M505.664 67.248c-55.376-41.964-140.592-67.017-227.955-67.017C170.649 0.231 82.596 37.959 37.129 103.741c-21.354 30.895-33.165 67.479-35.104 108.737-1.727 36.737 4.442 77.363 18.342 121.073C21.407 191.62 153.88 103.261 306.603 103.261c0 0-142.913 37.616-232.762 154.096-0.056 0.069-1.247 1.545-3.307 4.349-18.04 24.139-33.769 51.581-45.539 82.664-19.935 47.415-38.392 112.474-38.392 190.891h64c0 0-9.715-61.111 7.18-131.395 27.945 3.778 52.929 5.653 75.426 5.653 58.839 0 100.685-12.73 131.694-40.062 27.784-24.489 43.099-57.393 59.312-92.228 24.762-53.204 52.827-113.505 134.327-160.076 4.665-2.666 7.681-7.496 8.028-12.858s-2.02-10.54-6.303-13.786z"
                  ></path>
                </svg>
              ),
              unchecked: null,
            }}
            onChange={() => {
              setIsVeg((isVeg) => !isVeg);
            }}
          />
        </label>
      )}
      <hr className="border border-dashed border-[#d3d3d3] my-5" />
      {topPicks && <CuisinesCarousel carousel={topPicks} />}
      {menuInfo.map((list, index) => (
        <CuisinesList
          key={index}
          showItems={index === showItems ? true : false}
          setShowItems={() =>
            setShowItems(() => (index === showItems ? null : index))
          }
          categoryToggles={categoryToggles}
          toggleCategory={toggleCategory}
          menulist={list?.card?.card}
          isVeg={isVeg}
          topPicks={topPicks}
        />
      ))}
    </div>
  );
};

export default Cuisines;
