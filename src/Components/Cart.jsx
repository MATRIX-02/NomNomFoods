import { useDispatch, useSelector } from "react-redux";
import CuisineStyles from "./CuisineStyles";
import { clearCart } from "../../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
        
      {cartItems.length ===0 ? (
        <h1>Cart is Empty. Add items to the cart</h1>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <CuisineStyles key={cartItem.id} items={cartItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
