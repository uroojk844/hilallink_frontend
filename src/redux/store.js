import { configureStore } from "@reduxjs/toolkit";
import togglesSlice from "./togglesSlice"

export const store =  configureStore({
    reducer: {
        togglesSlice
    }
})
export const state = store.getState
export const dispatch = store.dispatch



