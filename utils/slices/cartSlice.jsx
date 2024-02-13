import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restaurant: {},
        items: []
    },
    reducers: {
        setRestaurant: (state,action) =>{
            if(action?.payload?.id === state?.restaurant?.id){
                console.log("Same restuarant, no change required")
            }
            else{
                state.restaurant = action.payload
                state.items.length = 0
            } 
        },
        addItem: (state, action) => {
          const newItem = action.payload;
          const existingItemIndex = state.items.findIndex(item => item.card.info.id === newItem.card.info.id);
    
          if (existingItemIndex !== -1) {
            // If the item already exists in the cart, update its quantity
            state.items[existingItemIndex].quantity++;
          } else {
            // Otherwise, add the item to the cart
            state.items.push({ ...newItem, quantity: 1 });
          }
        },
        removeItem: (state, action) => {
          const itemToRemove = action.payload;
          const existingItemIndex = state.items.findIndex(item => item.card.info.id === itemToRemove.card.info.id);
    
          if (existingItemIndex !== -1) {
            // If the item exists in the cart, decrease its quantity
            if (state.items[existingItemIndex].quantity > 1) {
              state.items[existingItemIndex].quantity--;
            } else {
              // If the item quantity is 1, remove it from the cart
              state.items.splice(existingItemIndex, 1);
            }
          }
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart, setRestaurant } = cartSlice.actions
export default cartSlice.reducer