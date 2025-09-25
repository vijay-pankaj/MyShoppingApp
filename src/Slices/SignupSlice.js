import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  userSignup: false,
};
export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.user = action.payload;
    },
    isSignup: (state, action) => {
      state.userSignup = action.payload;
    },
  },
});

export const { userData, isSignup } = SignupSlice.actions;
export default SignupSlice.reducer;
