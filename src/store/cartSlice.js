import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  count: 0,
  cartItems: [],

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('action.payload-CART', action.payload);
      state.cartItems.push(action.payload);
      state.count += 1;
    },
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;