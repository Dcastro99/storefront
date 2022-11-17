import { createSlice } from '@reduxjs/toolkit';
// import Chance from 'chance';
// const chance = new Chance();


const initialState = {
  count: 0,

  cartItems: [],

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('cart item', action.payload)
      if (action.payload.inventory !== 'out of stock') {
        state.cartItems.push(action.payload);
        state.count = state.cartItems.length;
      }

    },

    deleteItem(state, action) {
      console.log('delete item', action.payload)
      let itemToBeDeleted = action.payload.id;

      state.cartItems = state.cartItems.filter(x => x.id !== itemToBeDeleted)
      state.count = state.cartItems.length;
      // state.count -= 1;
    }



  }
});

export const { addToCart, deleteItem } = cartSlice.actions;

export const deletedItem = (state) => state.cart;

export default cartSlice.reducer;