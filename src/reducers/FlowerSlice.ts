import {createSlice} from "@reduxjs/toolkit";
import {Flower} from "../models/flower.ts";

const initialState: Flower[] = [];

const flowerSlice = createSlice({
    name: "flower",
    initialState,
    reducers: {
        addFlower: (state, action) => {
            state.push(action.payload);
        },
        updateFlower: (state, action) => {
            const index = state.findIndex((flower) => flower.flower_code === action.payload.flower_code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteFlower: (state, action) => {
            return state.filter((flower) => flower.flower_code !== action.payload.flower_code);
        }
    }
});

export const {addFlower, updateFlower, deleteFlower} = flowerSlice.actions;
export default flowerSlice.reducer;