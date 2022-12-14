import { createSlice } from '@reduxjs/toolkit';
import Chance from 'chance';
const chance = new Chance();


const initialState = {
  count: 0,
  cartItems: [],

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {

      const item = {
        _id: chance.bb_pin(),
        name: action.payload.name,
        description: action.payload.description,
        category: action.payload.category,
        price: action.payload.price,
        inventory: action.payload.inventory,
        image: action.payload.image
      }

      if (action.payload.inventory !== 'Sold Out') {
        state.cartItems.push(item);
        state.count = state.cartItems.length;
      }

    },

    deleteItem(state, action) {
      let itemToBeDeleted = action.payload._id;
      state.cartItems = state.cartItems.filter(x => x._id !== itemToBeDeleted)
      state.count = state.cartItems.length;
    }
  }
});

export const { addToCart, deleteItem } = cartSlice.actions;

export const deletedItem = (state) => state.cart;

export default cartSlice.reducer;