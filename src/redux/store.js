import { configureStore } from "@reduxjs/toolkit";
import togglesSlice from "./togglesSlice"
import userSlice from "./userSlice"

export const store = configureStore({
  reducer: {
    togglesSlice,
    userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
 
});
export const state = store.getState
export const dispatch = store.dispatch



