import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user.ts";

interface UserState {
    users: User[];
    loggedInUser: User | null;
}

const initialState: UserState = {
    users: [],
    loggedInUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;

            // Check if user already exists
            const existingUser = state.users.find(user => user.username === username);
            if (!existingUser) {
                state.users.push({ username, password }); // ✅ Store as plain object
            } else {
                console.warn("Username already taken!");
            }
        },

        loginUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;

            const foundUser = state.users.find(user => user.username === username && user.password === password);
            if (foundUser) {
                state.loggedInUser = { ...foundUser }; // ✅ Store as a plain object
            } else {
                console.warn("Invalid credentials!");
            }
        }

    }
});

export const { registerUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
