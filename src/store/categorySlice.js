import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Chance from 'chance';
const chance = new Chance();

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
      arr.push(items.category)
    }
    // console.log('RESPONSE FROM MONGO', arr)
    return arr;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});


const initialState = {
  categoryTabs: []
}

export const categorySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCtegory(state, action) {
      state.id = chance.bb_pin();
      state.title = action.payload.category.toUppercase();
      state.value = action.payload.category.toLowercase();
    },

  }, extraReducers: {
    [getStoreItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getStoreItems.fulfilled]: (state, action) => {
      // console.log('fullfilled action!', action.payload);
      state.isLoading = false;
      state.categoryTabs = action.payload;
    },
    [getStoreItems.rejected]: (state, action) => {
      // console.log('Thunk action', action);
      state.isLoading = false;
    },
  }
});

export const { setCtegory } = categorySlice.actions;



export default categorySlice.reducer;