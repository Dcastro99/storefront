import { createSlice } from '@reduxjs/toolkit';
import { data as categoryList } from '../components/dummyData/data';

const initialState = {
  category: '',
  categoryList,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory(state, action) {
      console.log('action.payload', action.payload);
      state.category = action.payload;
      state.catagoryList = state.category === undefined ? categoryList : categoryList.filter
        ((x) => x.category === state.category);
    },
  }
});

export const { selectCategory } = productSlice.actions;

export default productSlice.reducer;
