import { baseAPI } from "@/redux/api/base-api";

export interface IChangePasswordRequest {
	password: string;
	newPassword: string;
}

export interface IChangePasswordResponse {
	error: boolean;
	responseCode: string;
	responseMessage: string;
	data: boolean;
}

const changePasswordApiSlice = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		changePassword: builder.mutation<
			IChangePasswordResponse,
			IChangePasswordRequest
		>({
			query: (body) => ({
				url: `settings/change-password`,
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "UserProfile", id: "CURRENT" }], // Invalidate the cache for the user profile
		}),
	}),
});

export const { useChangePasswordMutation } = changePasswordApiSlice;
