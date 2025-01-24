import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/field.ts";

const initialState: Field[] = [];

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField: (state, action) => {
            state.push(action.payload);
        },
        updateField: (state, action) => {
            const index = state.findIndex((field) => field.field_code === action.payload.field_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteField: (state, action) => {
            return state.filter((field) => field.field_code !== action.payload.field_code);
        },
    },
});

export const {addField, updateField, deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;