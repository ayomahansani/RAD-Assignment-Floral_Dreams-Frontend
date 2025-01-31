import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Flower} from "../models/flower.ts";
import {api} from "../services/apiService.ts";

const initialState: Flower[] = [];

export const saveFlower = createAsyncThunk(
    'flower/saveFlower',
    async (flower: Flower, { rejectWithValue }) => {
        try {
            const response = await api.post('/flower/add', flower);
            if (response.status !== 201 && response.status !== 200) {
                throw new Error('Failed to save flower');
            }
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const viewFlowers = createAsyncThunk(
    'flower/viewFlowers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/flower/view');
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const updateFlower = createAsyncThunk(
    'flower/updateFlower',
    async (flower: Flower, { rejectWithValue }) => {
        try {
            const response = await api.put(`/flower/update/${flower.flower_code}`, flower);
            if (response.status !== 201 && response.status !== 200) {
                throw new Error('Failed to update flower');
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const deleteFlower = createAsyncThunk(
    "flower/deleteFlower",
    async (flowerCode: number, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/flower/delete/${flowerCode}`);
            if (response.status !== 200) {
                throw new Error("Failed to delete flower");
            }
            return flowerCode; // Return the ID of the deleted customer
        } catch (error: any) {
            return rejectWithValue(
                error.response ? error.response.data : error.message
            );
        }
    }
);

const flowerSlice = createSlice({
    name: "flower",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // save flower
            .addCase(saveFlower.pending, (state) => {
                console.log("Pending saving flower..."); // Proper logging
            })
            .addCase(saveFlower.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload);
                    console.log("Flower added successfully:", action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(saveFlower.rejected, (state, action) => {
                console.error("Failed to save flower:", action.payload);
            })

            // get all flowers
            .addCase(viewFlowers.pending, (state) => {
                console.log("Pending viewing flowers..."); // Proper logging
            })
            .addCase(viewFlowers.fulfilled, (state, action) => {
                if (action.payload) {
                    console.log("Fetched flowers:", action.payload);
                    return action.payload;
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(viewFlowers.rejected, (state, action) => {
                console.error("Failed to get flowers:", action.payload);
            })

            // update flowers
            .addCase(updateFlower.pending, (state) => {
                console.log("Pending updating flower..."); // Proper logging
            })
            .addCase(updateFlower.fulfilled, (state, action) => {
                if (action.payload) {
                    const index = state.findIndex((flower) => flower.flower_code === action.payload.flower_code);
                    if (index !== -1) {
                        state[index] = action.payload; // Update the existing customer in the state
                        console.log("Flower updated successfully:", action.payload);
                    } else {
                        console.warn("Flower not found in state after update.");
                    }
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(updateFlower.rejected, (state, action) => {
                console.error("Failed to update flower:", action.payload);
            })

            // delete flowers
            .addCase(deleteFlower.pending, (state) => {
                console.log("Pending deleting flower..."); // Proper logging
            })
            .addCase(deleteFlower.fulfilled, (state, action) => {
                const flowerCode = action.payload;
                const index = state.findIndex((flower) => flower.flower_code === flowerCode);
                if (index !== -1) {
                    state.splice(index, 1); // Remove the customer from the state
                    console.log("Flower deleted successfully:", flowerCode);
                } else {
                    console.warn("Flower not found in state during deletion.");
                }
            })
            .addCase(deleteFlower.rejected, (state, action) => {
                console.error("Failed to delete flower:", action.payload);
            });
    }
});


export default flowerSlice.reducer;