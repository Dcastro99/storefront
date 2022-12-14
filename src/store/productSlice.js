import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//------------PULLING ALL PRODUCTS FROM MONGO-DB------------//
const url = process.env.REACT_APP_HEROKU_URL;

//------------INITIAL STATE------------//
const initialState = {
  detailItems: [],
  productSelected: [],
  category: '',
  allProducts: [],
  isLoading: true,
  updatedItem: '',
  error: null,
  status: 'idle'
}

//---------------AXIOS CALL TO 'GET' ALL PRODUCTS------------------//
export const getStoreItems = createAsyncThunk('products/getStoreItems', async (thunkAPI) => {
  try {

    const res = await axios.get(url);

    return [...res.data];

  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }

});

//---------------PRODUCT SLICE------------------//
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
      let item = state.allProducts.find(x => x._id === action.payload._id);
      item.inventory--;
      state.updatedItem = item;
      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);
    },

    productIncrement(state, action) {
      let item = state.allProducts.find(x => x.name === action.payload.name);
      item.inventory++;
      state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter
        ((x) => x.category === state.category);

      state.updatedItem = item;
    },

    showDetail(state, action) {
      state.detailItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStoreItems.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getStoreItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productSelected = action.payload;
      state.allProducts = action.payload;
    })
    builder.addCase(getStoreItems.rejected, (state) => {
      state.isLoading = false;
    })
    builder.addCase(postData.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('post action', action.payload)
      // state.updatedItem = action.payload;
    })


  },

});

//---------------AXIOS CALL TO 'POST' UPDATE------------------//
export const postData = createAsyncThunk(

  "type/postData",
  async (data) => {
    try {
      const config = {
        method: 'put',
        baseURL: 'http://localhost:3080',
        // baseURL: process.env.REACT_APP_HEROKU_URL,
        url: `/item/${data._id}`,
        data: data,
      };
      let res = await axios(config);
      return res.data;
    } catch (err) {
      console.error(err)
      return data;
    }
  }
);

export const getProductStatus = (state) => state.pruducts.status;
export const getProductError = (state) => state.pruducts.error;
export const { selectCategory, showDetail, productIncrement, productDecrement } = productSlice.actions;

export default productSlice.reducer;
