import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../services/apiService.ts";
import {Supplier} from "../models/supplier.ts";

const initialState: Supplier[] = [];

export const saveSupplier = createAsyncThunk(
    'supplier/saveSupplier',
    async (supplier: Supplier, { rejectWithValue }) => {
        try {
            const response = await api.post('/supplier/add', supplier);
            if (response.status !== 201 && response.status !== 200) {
                throw new Error('Failed to save supplier');
            }
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const viewSuppliers = createAsyncThunk(
    'supplier/viewSuppliers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/supplier/view');
            return response.data; // Ensure data is returned correctly
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const updateSupplier = createAsyncThunk(
    'supplier/updateSupplier',
    async (supplier: Supplier, { rejectWithValue }) => {
        try {
            const response = await api.put(`/supplier/update/${supplier.supplier_id}`, supplier);
            if (response.status !== 201 && response.status !== 200) {
                throw new Error('Failed to update supplier');
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const deleteSupplier = createAsyncThunk(
    "supplier/deleteSupplier",
    async (supplierId: number, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/supplier/delete/${supplierId}`);
            if (response.status !== 200) {
                throw new Error("Failed to delete supplier");
            }
            return supplierId; // Return the ID of the deleted supplier
        } catch (error: any) {
            return rejectWithValue(
                error.response ? error.response.data : error.message
            );
        }
    }
);

const supplierSlice = createSlice({
    name: "supplier",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // save supplier
            .addCase(saveSupplier.pending, (state) => {
                console.log("Pending saving supplier..."); // Proper logging
            })
            .addCase(saveSupplier.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload);
                    console.log("Supplier added successfully:", action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(saveSupplier.rejected, (state, action) => {
                console.error("Failed to save supplier:", action.payload);
            })

            // get all suppliers
            .addCase(viewSuppliers.pending, (state) => {
                console.log("Pending viewing suppliers..."); // Proper logging
            })
            .addCase(viewSuppliers.fulfilled, (state, action) => {
                if (action.payload) {
                    console.log("Fetched suppliers:", action.payload);
                    state.splice(0, state.length);
                    state.push(...action.payload);
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(viewSuppliers.rejected, (state, action) => {
                console.error("Failed to get suppliers:", action.payload);
            })

            // update supplier
            .addCase(updateSupplier.pending, (state) => {
                console.log("Pending updating supplier..."); // Proper logging
            })
            .addCase(updateSupplier.fulfilled, (state, action) => {
                if (action.payload) {
                    const index = state.findIndex((supplier) => supplier.supplier_id === action.payload.supplier_id);
                    if (index !== -1) {
                        state[index] = action.payload; // Update the existing customer in the state
                        console.log("Supplier updated successfully:", action.payload);
                    } else {
                        console.warn("Supplier not found in state after update.");
                    }
                } else {
                    console.error("Fulfilled but no data returned");
                }
            })
            .addCase(updateSupplier.rejected, (state, action) => {
                console.error("Failed to update v:", action.payload);
            })

            // delete supplier
            .addCase(deleteSupplier.pending, (state) => {
                console.log("Pending deleting supplier..."); // Proper logging
            })
            .addCase(deleteSupplier.fulfilled, (state, action) => {
                const supplierId = action.payload;
                const index = state.findIndex((supplier) => supplier.supplier_id === supplierId);
                if (index !== -1) {
                    state.splice(index, 1); // Remove the customer from the state
                    console.log("Supplier deleted successfully:", supplierId);
                } else {
                    console.warn("Supplier not found in state during deletion.");
                }
            })
            .addCase(deleteSupplier.rejected, (state, action) => {
                console.error("Failed to delete supplier:", action.payload);
            });
    }
})

export default supplierSlice.reducer;