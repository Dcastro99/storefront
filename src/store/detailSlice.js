import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailItems: [],

}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {

    showDetail(state, action) {
      // console.log('action.payload-DETAIL', action.payload);
      state.detailItems.push(action.payload);
    },

  }
});
export const { showDetail } = detailSlice.actions;

export default detailSlice.reducer;