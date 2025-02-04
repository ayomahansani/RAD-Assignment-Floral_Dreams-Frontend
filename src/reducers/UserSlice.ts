import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/apiService.ts"; // Import the Axios instance
import { User } from "../models/user.ts";

interface UserState {
    jwt_token: string | null;
    refresh_token: string | null;
    username: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    jwt_token: null,
    refresh_token: null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

// ** Register User **
export const registerUser = createAsyncThunk(
    "user/register",
    async (user: User, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/register", user, { withCredentials: true });
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Registration failed");
        }
    }
);

// ** Login User **
export const loginUser = createAsyncThunk(
    "user/login",
    async (user: User, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/login", user, { withCredentials: true });
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Login failed");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOutUser(state) {
            state.isAuthenticated = false;
            state.jwt_token = null;
            state.refresh_token = null;
            state.username = null;
            localStorage.removeItem("jwt_token");
            localStorage.removeItem("refresh_token");
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.error = null;
                console.log("User Registered Successfully", action.payload);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.jwt_token = action.payload.accessToken;
                state.refresh_token = action.payload.refreshToken;
                state.isAuthenticated = true;
                state.username = action.payload.username;

                // Save tokens to local storage
                localStorage.setItem("jwt_token", action.payload.accessToken);
                localStorage.setItem("refresh_token", action.payload.refreshToken);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            });
    },
});

export const { logOutUser, clearError } = userSlice.actions;
export default userSlice.reducer;
