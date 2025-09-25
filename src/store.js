import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from '../src/Slices/FetchSlice';
import signupData from '../src/Slices/SignupSlice'
import cartReducer from '../src/Slices/CartSlice';
import loggedin from '../src/Slices/LoginSlice';
import ThemeReducer from '../src/Slices/TheameSlice';



export const store = configureStore({
  reducer: {
    apiData: fetchReducer,
    userData:signupData,
    cartdata: cartReducer,
    loginval:loggedin,
    theme:ThemeReducer
  },
});
