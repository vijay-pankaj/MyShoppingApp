import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIds: [],
};

export const CartSlice = createSlice({
  name: "cartdata",
  initialState,
  reducers: {
    setCartIds: (state, action) => {
      state.cartIds = action.payload;
    },
  },
});

export const { setCartIds } = CartSlice.actions;
export default CartSlice.reducer;

//https://www.apirequest.in/movie/api
