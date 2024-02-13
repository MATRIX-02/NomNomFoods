import { useDispatch, useSelector } from "react-redux";
import {
  VEG_SYMBOL,
  NON_VEG_SYMBOL,
  MENU_FOOD_IMG,
} from "../../utils/constants";
import {
  addItem,
  removeItem,
  setRestaurant,
} from "../../utils/slices/cartSlice";

const CuisineStyles = ({ items, restaurantInfo }) => {
  const selectedItems = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurant);

 
  const dispatch = useDispatch();

  const handlerAddItem = (item) => {
    if (restaurant === undefined) {
      dispatch(setRestaurant(restaurantInfo));
    } else if (restaurant?.id !== restaurantInfo?.id) {
      dispatch(setRestaurant(restaurantInfo));
    }
    dispatch(addItem(item));
  };
  const handlerRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const itemsInCart = selectedItems.filter(
    (selectedItem) => selectedItem?.card?.info?.id === items?.card?.info?.id
  );

  return (
    <div className="flex items-center justify-between my-8 pb-3 border-b-[1px] border-dashed border-[#c4c4c4]">
      <div className="w-[82%]">
        {items?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
          <img className="w-5 border-none" src={VEG_SYMBOL}></img>
        ) : (
          <img className="w-5 border-none" src={NON_VEG_SYMBOL}></img>
        )}

        <h5 className="tracking-wide font-semibold text-[0.94rem] text-[#3E4152]">
          {items?.card?.info?.name}
        </h5>

        <p className="text-sm">
          <span>&#8377;</span>
          {items?.card?.info?.price / 100 ||
            items?.card?.info?.defaultPrice / 100}
        </p>

        <p className="text-[0.85rem] text-[#B2B3BA] text-justify">
          {items?.card?.info?.description}
        </p>
      </div>
      {items?.card?.info?.imageId ? (
        <div className="relative border-none cursor-pointer bg-[#f0f0f0] min-w-32 max-w-32 h-24 rounded-md p-0">
          {itemsInCart.length > 0 ? (
            <>
              <div className="flex justify-around items-center absolute -bottom-3 left-0 right-0 m-auto px-6 w-10/12 h-2/5 bg-white rounded shadow-lg border-slate-300 border-[1px] text-[#60b246] font-semibold text-[0.75rem]">
                <div className="p-2 mx-2 text-lg cursor-pointer" onClick={()=>handlerRemoveItem(items)}>-</div>
                <div className="p-2 mx-2">{itemsInCart[0]?.quantity}</div>
                <div className="p-2 mx-2 text-lg cursor-pointer" onClick={()=>handlerAddItem(items)}>+</div>
              </div>
            </>
          ) : (
            <div
              className="flex justify-center items-center absolute -bottom-3 left-0 right-0 m-auto px-6 w-10/12 h-2/5 bg-white rounded shadow-lg border-slate-300 border-[1px] text-[#60b246] font-semibold text-[0.75rem]"
              onClick={() => handlerAddItem(items)}
            >
              ADD
            </div>
          )}
          <img
            className="w-full h-full bg-cover rounded-md bg-blend-multiply"
            src={MENU_FOOD_IMG + items?.card?.info?.imageId}
            alt=" "
          />
        </div>
      ) : (
        <div className="relative border-none cursor-pointer  min-w-32 max-w-32 h-24 rounded-md p-0">
          <div
            className="flex justify-center items-center absolute top-1/3 left-0 right-0 m-auto px-6 w-10/12 h-2/5 bg-white rounded shadow-lg border-slate-300 border-[1px] text-[#60b246] font-semibold text-[0.75rem]"
            onClick={() => handlerAddItem(items)}
          >
            ADD
          </div>
        </div>
      )}
    </div>
  );
};

export default CuisineStyles;
