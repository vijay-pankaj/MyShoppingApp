import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  value: false,
};
export const LoginSlice = createSlice({
  name: "loginval",
  initialState,
  reducers: {
    setVal: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setVal } = LoginSlice.actions;
export default LoginSlice.reducer;
