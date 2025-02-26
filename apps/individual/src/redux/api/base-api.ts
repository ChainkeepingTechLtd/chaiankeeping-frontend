// base.api.ts
import { SESSION_COOKIE_KEY } from "@/lib/constants";
import { getCookies, removeCookie } from "@/lib/helpers/cookies-manager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const baseAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			// Get token from Redux store
			const token = (getState() as RootState).loginState.accessToken;
			if (token) {
				headers.set("access-token", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["UserProfile"], // Add the UserProfile tag type here
	endpoints: () => ({}),
});

// Create a custom middleware to handle 401 errors
export const custom401Middleware =
	() =>
	(next: (arg0: unknown) => unknown) =>
	(action: { type: string; payload: { status: number } }) => {
		if (action.type.endsWith("/rejected") && action.payload?.status === 401) {
			console.log("Received 401 Unauthorized response");
			removeCookie(SESSION_COOKIE_KEY);
			// window.location.reload();
			// You can dispatch an action here to handle the unauthorized state,
			// such as logging out the user or refreshing the token
		}
		return next(action);
	};
