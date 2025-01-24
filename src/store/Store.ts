import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "../reducers/FieldSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import FlowerSlice from "../reducers/FlowerSlice.ts";


const store = configureStore({
    reducer: {
        flower: FlowerSlice,
        field: FieldSlice,
        staff: StaffSlice,
        vehicle: VehicleSlice
    }
});

export default store;