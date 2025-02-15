import {configureStore} from "@reduxjs/toolkit";
import FlowerSlice from "../reducers/FlowerSlice.ts";
import CustomerSlice from "../reducers/CustomerSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";
import OrderSlice from "../reducers/OrderSlice.ts";

export const store = configureStore({
    reducer: {
        flower: FlowerSlice,
        customer: CustomerSlice,
        user: UserSlice,
        order: OrderSlice,
    }
});

export type AppDispatch = typeof store.dispatch;