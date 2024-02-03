import { useEffect, useState } from "react";
import { MENU_FOOD_IMG } from "../../utils/constants";

/* eslint-disable react/prop-types */
const ResMenuList = ({ menulist, isVeg }) => {
  const { title, itemCards, categories } = menulist;
  const [filteredItemCards, setFilteredItemCards] = useState(itemCards);

  // title.filter(() => menulist?.["@type"] === "type.googleapis.com/swig…on.food.v2.MenuCarousel");

  useEffect(() => {
    if (isVeg && Array.isArray(itemCards)) {
      const filteredItem = itemCards.filter(
        (item) => item?.card?.info?.isVeg !== undefined
      );
      setFilteredItemCards(filteredItem);
    } else {
      setFilteredItemCards(itemCards);
    }
  }, [isVeg, itemCards]);

  return menulist?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" ? (
    " "
  ) : (
    <div>
      <h3>{title}</h3>
      <div>
        {filteredItemCards &&
          filteredItemCards.map((items, index) => (
            <div key={index} className="food-content">
              <div className="flex">
                {items?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img
                    className="food-category"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"
                  ></img>
                ) : (
                  <img
                    className="food-category"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg=="
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
        {categories &&
          categories.map((category) => {
            return (
              <div key={category.title}>
                <h6>{category.title}</h6>
                {category.itemCards &&
                  category.itemCards.map((items, index) => (
                    <div key={index}>
                      <p>{items?.card?.info?.name}</p>
                      <img
                        src={MENU_FOOD_IMG + items?.card?.info?.imageId}
                        alt=" "
                      />
                    </div>
                  ))}
              </div>
            );
          })}
        <hr />
      </div>
    </div>
  );
};

export default ResMenuList;
