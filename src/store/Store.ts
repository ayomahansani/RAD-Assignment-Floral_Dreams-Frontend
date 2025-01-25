import {configureStore} from "@reduxjs/toolkit";
import FlowerSlice from "../reducers/FlowerSlice.ts";


const store = configureStore({
    reducer: {
        flower: FlowerSlice,
    }
});

export default store;