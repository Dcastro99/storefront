import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  count: 0,
  itemToBeDeleted: '',
  cartItems: [],

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.count = state.cartItems.length;
    },

    deleteItem(state, action) {
      state.itemToBeDeleted = action.payload;

      state.cartItems = state.cartItems.filter(x => x.id !== state.itemToBeDeleted)
      state.count = state.cartItems.length;
      // state.count -= 1;
    }



  }
});

export const { addToCart, deleteItem } = cartSlice.actions;
export const deletedItem = (state) => state.cart;

export default cartSlice.reducer;