import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import detailReducer from './detailSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const presistCartConfig = {
  key: 'cart',
  storage
}

const presistProductConfig = {
  key: 'products',
  storage
}
const presistDetailConfig = {
  key: 'detail',
  storage
}



const presistedCartReducer = persistReducer(presistCartConfig, cartReducer);
const presistedProductReducer = persistReducer(presistProductConfig, productReducer);
const presistedDetailReducer = persistReducer(presistDetailConfig, detailReducer);

export const store = configureStore({
  reducer: {
    products: presistedProductReducer,
    cart: presistedCartReducer,
    detail: presistedDetailReducer
  },
});

export const persistor = persistStore(store);