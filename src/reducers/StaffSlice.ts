import { createSlice } from "@reduxjs/toolkit";
import {Staff} from "../models/staff.ts";

const initialState: Staff[]  = []

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        addStaff: (state, action) => {
            state.push(action.payload);
        },
        updateStaff: (state, action) => {
            const index = state.findIndex((staff) => staff.email === action.payload.email);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteStaff: (state, action) => {
            return state.filter((staff) => staff.email !== action.payload.email);
        },
    },
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
