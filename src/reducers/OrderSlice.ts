import {Order} from "../models/order.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Order[] = [];

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // save order
            .addCase(saveOrder.pending, (state) => {
                console.log("Pending saving order..."); // Proper logging
            })
            .addCase(saveOrder.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload);
                    console.log("Flower added successfully:", action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(saveOrder.rejected, (state, action) => {
                console.error("Failed to save flower:", action.payload);
            })

            // get all orders
            .addCase(viewOrders.pending, (state) => {
                console.log("Pending viewing flowers..."); // Proper logging
            })
            .addCase(viewOrders.fulfilled, (state, action) => {
                if (action.payload) {
                    console.log("Fetched flowers:", action.payload);
                    return action.payload;
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(viewOrders.rejected, (state, action) => {
                console.error("Failed to get flowers:", action.payload);
            });
    }
});

export default orderSlice.reducer;