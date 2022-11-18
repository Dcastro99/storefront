import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { data as allProducts } from '../assets/dummyData/data';
import axios from 'axios';
// const allProducts = [];
const url = process.env.REACT_APP_HEROKU_URL;

export const getStoreItems = createAsyncThunk('products/getStoreItems', async (item, thunkAPI) => {
  try {
    // console.log('what are you?', item);
    // console.log('thunkAPI', thunkAPI);
    // console.log('--------...>>>', thunkAPI.getState());
    // thunkAPI.dispatch(openModal());
    const res = await axios(url);

    let arr = [];
    for (const items of res.data) {
      // allProducts.push(items)
      arr.push(items)
    }
    console.log('RESPONSE FROM MONGO', arr)
    return arr;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

// console.log('ok fine', allProducts)


const initialState = {
  detailItems: [],
  productSelected: [],
  // allProducts,
  category: '',
  allProducts: [],
  isLoading: true,
}





export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory(state, action) {
      console.log('catTags in productslice', action.payload)
      state.category = action.payload;
      // state.productSelected = state.category === 'all' ? state.productSelected : state.productSelected.filter
      //   ((x) => x.category === state.category);

      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);
      // state.productSelected = state.category === 'all' ? state.getStoreItems : state.getStoreItems.filter
    },


    productDecrement(state, action) {
      console.log('item', action.payload)
      let item = state.allProducts.find(x => x._id === action.payload._id);
      item.inventory--;
      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        // state.allProducts = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);


    },

    productIncrement(state, action) {
      let item = state.allProducts.find(x => x.name === action.payload.name);
      item.inventory++;

      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        // state.allProducts = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);

    },

    showDetail(state, action) {
      state.detailItems.push(action.payload);
    },
  },
  extraReducers: {
    [getStoreItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getStoreItems.fulfilled]: (state, action) => {
      console.log('fullfilled action!', action.payload);
      state.isLoading = false;
      state.productSelected = action.payload;
      state.allProducts = action.payload;
    },
    [getStoreItems.rejected]: (state, action) => {
      console.log('Thunk action', action);
      state.isLoading = false;
    },
  },

});

export const { selectCategory, showDetail, productIncrement, productDecrement } = productSlice.actions;

export default productSlice.reducer;
