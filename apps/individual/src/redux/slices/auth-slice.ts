import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../services/auth/login.api-slice";

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

const initialState: ILoginState = {
	accessToken: null,
	refreshToken: null,
	user: null,
	isLoading: false,
	error: null,
};

export const loginStateSlice = createSlice({
	name: "loginState",
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
			localStorage.setItem("accessToken", action.payload.data.accessToken);
			localStorage.setItem("refreshToken", action.payload.data.refreshToken);
			localStorage.setItem("user", JSON.stringify(state.user)); // Store the entire user object
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
	loginStateSlice.actions;

export default loginStateSlice.reducer;
