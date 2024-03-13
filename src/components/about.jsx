import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        username:authsSlice
    }
})
export default store;