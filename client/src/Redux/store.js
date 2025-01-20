import { configureStore } from "@reduxjs/toolkit";
import leadSliceReducer from "./Slices/leadSlice";

const store = configureStore({
    reducer: {
        lead: leadSliceReducer
    },
    devTools: true
})

export default store;