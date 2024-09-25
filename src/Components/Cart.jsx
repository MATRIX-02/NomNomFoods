import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/slices/cartSlice";
import { CDN_URL } from "../../utils/constants";
import CartList from "./CartList";
import { useState, useEffect } from "react";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const restaurant = useSelector((store) => store.cart.restaurant);
	const [totalPrice, setTotalPrice] = useState(null);
	// console.log(cartItems);

	const dispatch = useDispatch();

	useEffect(() => {
		const calculateTotalPrice = () => {
			const totalPrice = cartItems.reduce((acc, item) => {
				return (
					acc +
					(item?.card?.info?.price / 100 ||
						item?.card?.info?.defaultPrice / 100) *
						item.quantity
				);
			}, 0);
			setTotalPrice(totalPrice);
		};

		calculateTotalPrice();
	}, [cartItems]);

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return cartItems.length === 0 ? (
		<div className="w-screen h-[80vh] flex flex-col justify-center items-center">
			<img className=" w-72" src="./Images/Empty_cart.avif" alt="Empty Cart" />
			<h1 className="mt-5 mb-2 font-extrabold text-lg text-[#535665]">
				Your cart is empty
			</h1>
			<p className="text-sm text-[#7E808C]">
				You can go to home page to view more restaurants
			</p>
		</div>
	) : (
		<div className="absolute top-0 flex justify-center w-full h-full pt-20 bg-gray-200">
			<div className="flex flex-col gap-4 p-8 md:w-4/6 md:grid md:grid-cols-12">
				<div className="md:col-span-8">
					<div className="items-center justify-center p-8 bg-white md:grid md:grid-cols-12">
						<div className="flex flex-col justify-center md:col-span-8">
							<h1 className="text-lg font-bold text-gray-800">Account</h1>
							<p className="py-4 text-gray-500">
								To place your order now, log in to your existing account or sign
								up
							</p>
							<div className="flex flex-col items-center justify-center md:col-span-4 md:flex-row">
								<div className="w-full px-4 py-2 text-center text-green-600 border border-green-600 cursor-pointer">
									<div className="text-xs">Have an account?</div>
									<div className="text-sm font-bold uppercase">Log in</div>
								</div>
								<div className="w-full px-4 py-2 mx-4 my-2 text-center text-white bg-green-600 border border-green-600 cursor-pointer md:my-0">
									<div className="text-xs">New to NomNomFoods?</div>
									<div className="text-sm font-bold uppercase">Sign up</div>
								</div>
							</div>
						</div>
						<div className="items-center justify-center hidden md:col-span-4 md:flex">
							<img
								src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
								alt="food"
							/>
						</div>
					</div>
					<div className="p-8 my-4 bg-white">
						<h1 className="col-span-4 font-bold text-gray-400">
							Delivery Address
						</h1>
					</div>
					<div className="p-8 my-4 bg-white">
						<h1 className="col-span-4 font-bold text-gray-400">Payment</h1>
					</div>
				</div>
				<div className="bg-white  md:col-span-4">
					<div className="grid grid-cols-12 p-8">
						<div className="col-span-3">
							<img
								className="w-12 h-12"
								src={CDN_URL + restaurant?.cloudinaryImageId}
								alt="restaurant-logo"
							/>
						</div>
						<div className="col-span-9">
							<h1 className="font-bold text-md">{restaurant?.name}</h1>
							<span className="text-gray-500 text-sm relative  -top-[0.4rem]">
								{restaurant?.city}
							</span>
							<hr className="w-12 border-b-2 border-gray-950" />
						</div>
					</div>
					<div
						className="m-auto flex justify-end text-sm cursor-pointer text-[#60b246] w-5/6"
						onClick={handleClearCart}
					>
						Clear Cart
					</div>
					<div className="px-4">
						{cartItems &&
							[...new Set(cartItems)].map((cartItem) => (
								<>
									<CartList
										key={cartItem?.card?.info?.id}
										items={cartItem}
										length={cartItem?.quantity}
									/>
								</>
							))}
					</div>

					<div className="p-8">
						<h3 className="text-sm font-bold">Bill Details</h3>
						<div className="flex justify-between py-1 text-sm text-gray-400">
							<div className="text-xs">Item Total</div>
							<div className="text-xs">
								<span>&#8377;</span> {Math.ceil(totalPrice, 2)}
							</div>
						</div>
						<div className="flex justify-between py-1 pb-4 text-xs text-gray-400 border-b border-gray-200">
							<div>Delivery Fee | {restaurant?.sla.lastMileTravelString}</div>
							<div>
								<span>&#8377;</span> {restaurant?.feeDetails?.totalFee / 100}
							</div>
						</div>
						<div className="flex justify-between py-1 pt-4 text-xs text-gray-400">
							<div>Delivery tip</div>
							<div className="cursor-pointer text-[#60b246]">Add tip</div>
						</div>
						<div className="flex justify-between py-1 text-xs text-gray-400">
							<div>Platform fee</div>
							<div>
								<span>&#8377;</span> 4
							</div>
						</div>
						<div className="flex justify-between py-1 pb-4 text-xs text-gray-400 border-b-2 border-gray-900">
							<div>GST and Restaurant Charges</div>
							<div>NoGSThehe</div>
						</div>
						<div className="flex justify-between my-3 text-sm font-bold">
							{" "}
							<span>TO PAY</span>
							<span>
								&#8377;
								{Math.ceil(totalPrice, 2) +
									restaurant?.feeDetails?.totalFee / 100 +
									4}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
