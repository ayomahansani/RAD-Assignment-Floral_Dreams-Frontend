import {configureStore} from "@reduxjs/toolkit";
import FlowerSlice from "../reducers/FlowerSlice.ts";
import CustomerSlice from "../reducers/CustomerSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";


const store = configureStore({
    reducer: {
        flower: FlowerSlice,
        customer: CustomerSlice,
        user: UserSlice,
    }
});

export default store;