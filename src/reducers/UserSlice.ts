import {User} from "../models/user.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: User[] = [];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.push(action.payload);
        },
        loginUser: (state, action) => {

        }
    }
});

export const {registerUser, loginUser} = userSlice.actions;
export default userSlice.reducer;