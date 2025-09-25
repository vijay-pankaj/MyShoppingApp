import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataset: [],
};

export const fetchSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.dataset = action.payload;
    },
  },
});

export const { setData } = fetchSlice.actions;
export default fetchSlice.reducer;
