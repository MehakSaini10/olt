import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/StudentSlices/apiSlice.js";
import studentAuthSlice from "./slices/StudentSlices/studentAuthSlice.js";
import adminAuthSlice from "./slices/AdminSlices/adminAuthSlice.js";


const store=configureStore({
    reducer:{
        auth:studentAuthSlice,
        adminAuth:adminAuthSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools:true,
    
})

export default store