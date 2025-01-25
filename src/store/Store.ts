import {configureStore} from "@reduxjs/toolkit";
import FlowerSlice from "../reducers/FlowerSlice.ts";
import CustomerSlice from "../reducers/CustomerSlice.ts";


const store = configureStore({
    reducer: {
        flower: FlowerSlice,
        customer: CustomerSlice,
    }
});

export default store;