import { baseAPI } from "@/redux/api/base-api";

interface IPayload {
	email: string;
	password: string;
}

export interface IResponse {
	error: boolean;
	responseCode: string;
	responseMessage: string;
	data: {
		accessToken: string;
		refreshToken: string;
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
	};
}

const loginApiSlice = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<IResponse, IPayload>({
			query: (DTO) => ({
				url: `auth/login`,
				method: "POST",
				body: DTO,
			}),
		}),
	}),
});

export const { useLoginMutation } = loginApiSlice;
