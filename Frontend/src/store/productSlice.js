import { createSlice } from '@reduxjs/toolkit';
import { data as categoryList } from '../assets/dummyData/data';

const initialState = {
  category: '',
  categoryList
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
      state.categoryList = state.category === 'all' ? categoryList : categoryList.filter
        ((x) => x.category === state.category);
    },
  }
});

export const { selectCategory } = productSlice.actions;

export default productSlice.reducer;