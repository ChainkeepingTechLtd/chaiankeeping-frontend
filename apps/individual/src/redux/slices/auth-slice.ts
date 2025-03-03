import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../services/auth/login.api-slice";

// Define the structure for authentication state
export interface ILoginState {
	accessToken: string | null;
	refreshToken: string | null;
	user: {
		_id: string;
		firstname: string;
		lastname: string;
		email: string;
		country: string;
		state: string;
		userType: string;
		status: string;
		isVerified: boolean;
		lastLogin: string;
		createdAt: string;
		updatedAt: string;
	} | null;
	isLoading: boolean;
	error: string | null;
}

// Load authentication data from localStorage if available
const loadAuthState = (): ILoginState => {
	try {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");
		const user = localStorage.getItem("user");

		return {
			accessToken: accessToken ? accessToken : null,
			refreshToken: refreshToken ? refreshToken : null,
			user: user ? JSON.parse(user) : null,
			isLoading: false,
			error: null,
		};
	} catch (error) {
		console.error("Failed to load auth state from localStorage:", error);
		return {
			accessToken: null,
			refreshToken: null,
			user: null,
			isLoading: false,
			error: null,
		};
	}
};

// Initial state
const initialState: ILoginState = loadAuthState();

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		loginSuccess: (state, action: PayloadAction<IResponse>) => {
			state.isLoading = false;
			state.accessToken = action.payload.data.accessToken;
			state.refreshToken = action.payload.data.refreshToken;
			state.user = {
				_id: action.payload.data._id,
				firstname: action.payload.data.firstname,
				lastname: action.payload.data.lastname,
				email: action.payload.data.email,
				country: action.payload.data.country,
				state: action.payload.data.state,
				userType: action.payload.data.userType,
				status: action.payload.data.status,
				isVerified: action.payload.data.isVerified,
				lastLogin: action.payload.data.lastLogin,
				createdAt: action.payload.data.createdAt,
				updatedAt: action.payload.data.updatedAt,
			};
			state.error = null;

			// Save tokens and user data to localStorage
			localStorage.setItem("accessToken", state.accessToken);
			localStorage.setItem("refreshToken", state.refreshToken);
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		loginFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.accessToken = null;
			state.refreshToken = null;
			state.user = null;
			state.isLoading = false;
			state.error = null;

			// Remove tokens and user data from localStorage
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("user");
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	authSlice.actions;

export default authSlice.reducer;
