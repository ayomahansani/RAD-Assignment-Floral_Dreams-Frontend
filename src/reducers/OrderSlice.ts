import {Order} from "../models/order.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../services/apiService.ts";

const initialState: Order[] = [];


export const saveOrder = createAsyncThunk(
    'order/saveOrder',
    async (order: Order, { rejectWithValue }) => {
        try {
            const response = await api.post('/order/add', order);
            if (response.status !== 201 && response.status !== 200) {
                throw new Error('Failed to save order');
            }
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const viewOrders = createAsyncThunk(
    'order/viewOrders',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/order/view');
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);


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
                    console.log("Order added successfully:", action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(saveOrder.rejected, (state, action) => {
                console.error("Failed to save order:", action.payload);
            })

            // get all orders
            .addCase(viewOrders.pending, (state) => {
                console.log("Pending viewing orders..."); // Proper logging
            })
            .addCase(viewOrders.fulfilled, (state, action) => {
                if (action.payload) {
                    console.log("Fetched orders:", action.payload);
                    state.splice(0, state.length);
                    state.push(...action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(viewOrders.rejected, (state, action) => {
                console.error("Failed to get orders:", action.payload);
            });
    }
});

export default orderSlice.reducer;