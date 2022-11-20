import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailItems: [],

}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    showDetail(state, action) {
      state.detailItems.push(action.payload);
    },
  }
});
export const { showDetail } = detailSlice.actions;

export default detailSlice.reducer;