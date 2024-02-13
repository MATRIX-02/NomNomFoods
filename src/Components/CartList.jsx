import { useDispatch } from "react-redux";
import { VEG_SYMBOL, NON_VEG_SYMBOL } from "../../utils/constants";
import { removeItem, addItem } from "../../utils/slices/cartSlice";
import {  } from "../../utils/slices/cartSlice";

const CartList = ({ items, length }) => {
  const { name, itemAttribute, price, defaultPrice } = items?.card?.info;
  
  
  const disptach = useDispatch();

  const handlerAddItem = (item) =>{
    disptach(addItem(item));
  }

  const handlerRemoveItem= (item) =>{
    disptach(removeItem(item));
  }

  return (
    <div className="flex my-5">
      <div>
        {itemAttribute?.vegClassifier === "VEG" ? (
          <img className="w-5 border-none scale-75" src={VEG_SYMBOL}></img>
        ) : (
          <img className="w-5 border-none scale-75" src={NON_VEG_SYMBOL}></img>
        )}
      </div>
      <div className="w-2/3 text-sm mx-2">{name}</div>
      <div className="mx-1 my-auto flex justify-center items-center w-24 h-10 bg-white shadow-lg border-slate-300 border-[1px] text-[#60b246] font-semibold text-[0.75rem]">
        <div className="p-2 mx-2 text-lg cursor-pointer" onClick={()=>handlerRemoveItem(items)}>-</div>
        <div className="p-2 mx-2">{length}</div>
        <div className="p-2 mx-2 text-lg  cursor-pointer" onClick={()=>handlerAddItem(items)}>+</div>
      </div>
      <div className="text-sm my-auto">
        <span>&#8377;</span>
        {price / 100 || defaultPrice / 100}
      </div>
    </div>
  );
};

export default CartList;
