import { createSlice } from '@reduxjs/toolkit';
import { data as allProducts } from '../assets/dummyData/data';
import Chance from 'chance';
const chance = new Chance();




const initialState = {
  detailItems: [],
  productSelected: allProducts,
  category: '',
  allProducts,
  inventory: ''
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory(state, action) {

      state.category = action.payload;

      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);
    },


    productDecrement(state, action) {

      let item = state.allProducts.find(x => x.id === action.payload.id);
      item.inventory--;
      item.id = chance.bb_pin()
      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);


    },

    productIncrement(state, action) {
      let item = state.allProducts.find(x => x.id === action.payload.id);
      item.inventory++;

      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);

    },

    showDetail(state, action) {
      state.detailItems.push(action.payload);
    },



  }
});

export const { productIncrement } = productSlice.actions;
export const { showDetail } = productSlice.actions;
export const { selectCategory, productDecrement } = productSlice.actions;

export default productSlice.reducer;
