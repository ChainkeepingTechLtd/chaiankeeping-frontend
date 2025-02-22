import { baseAPI } from "@/redux/api/base-api";

interface IPayload {
	email: string;
}

export interface IResponse {
	error: boolean;
	responseCode: string;
	responseMessage: string;
	data: string;
}

const forgotPasswordApiSlice = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		// Rename the endpoint to "forgotPassword"
		forgotPassword: builder.mutation<IResponse, IPayload>({
			query: (DTO) => ({
				url: `auth/forgot-password`,
				method: "POST",
				body: DTO,
			}),
		}),
	}),
});

// Destructure the correct endpoint
export const { useForgotPasswordMutation } = forgotPasswordApiSlice;
