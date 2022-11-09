import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: productReducer,
  },
});
