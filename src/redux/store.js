import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
    reducer:{
        wishlistSliceReducer:wishlistSlice
    }
})

export default store 