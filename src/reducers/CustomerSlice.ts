import {createSlice} from "@reduxjs/toolkit";
import {Customer} from "../models/customer.ts";

const initialState: Customer[] = [];

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        updateCustomer: (state, action) => {
            const index = state.findIndex((customer) => customer.customer_id === action.payload.customer_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteCustomer: (state, action) => {
            return state.filter((customer) => customer.customer_id !== action.payload.customer_id);
        }
    }
})

export const {addCustomer, updateCustomer, deleteCustomer} = customerSlice.actions;
export default customerSlice.reducer;