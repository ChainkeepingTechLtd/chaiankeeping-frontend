// update-profile.api-slice.ts
import { baseAPI } from "@/redux/api/base-api";

export interface IUpdateProfileRequest {
	firstname: string;
	lastname: string;
}

export interface IUpdateProfileResponse {
	error: boolean;
	responseCode: string;
	responseMessage: string;
	data: {
		practitioners: [];
		_id: string;
		__v: number;
		dateOfBirth: string;
		taxSettings: {
			fiscalYearStart: {
				month: number;
				day: number;
			};
			taxValuationMethod: string;
			_id: string;
		};
	};
}

const updateProfileApiSlice = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		updateProfile: builder.mutation<
			IUpdateProfileResponse,
			IUpdateProfileRequest
		>({
			query: (body) => ({
				url: `settings/update-profile`,
				method: "PUT",
				body,
			}),
			invalidatesTags: [{ type: "UserProfile", id: "CURRENT" }], // Invalidate the cache for the user profile
		}),
	}),
});

export const { useUpdateProfileMutation } = updateProfileApiSlice;
