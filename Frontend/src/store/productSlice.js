import { createSlice } from '@reduxjs/toolkit';
import { data as allProducts } from '../assets/dummyData/data';





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
      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);


    },

    productIncrement(state, action) {
      let item = state.allProducts.find(x => x.name === action.payload.name);
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
