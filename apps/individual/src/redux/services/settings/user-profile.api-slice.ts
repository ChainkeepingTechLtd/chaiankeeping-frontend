// user-profile.api-slice.ts
import { baseAPI } from "@/redux/api/base-api";

// Define the response interface based on the provided response body
export interface IUserProfileResponse {
	error: boolean;
	responseCode: string;
	responseMessage: string;
	data: {
		user: {
			_id: string;
			ckId: string;
			firstname: string;
			lastname: string;
			email: string;
			phonenumber: string;
			password: string;
			country: string;
			state: string;
			userType: string;
			profile: string;
			kyc: {
				status: string;
				phoneStatus: string;
				tin: string;
				verificationDate: string | null;
				_id: string;
				updatedAt: string;
			};
			twoFA: {
				totp: {
					isEnabled: boolean;
				};
				email: {
					isEnabled: boolean;
				};
				sms: {
					isEnabled: boolean;
				};
				yubikey: {
					isEnabled: boolean;
				};
				_id: string;
			};
			status: string;
			isVerified: boolean;
			lastLogin: string;
			createdAt: string;
			updatedAt: string;
			__v: number;
		};
		profile: {
			_id: string;
			corporateEmail: string;
			businessName: string;
			businessCategory: string;
			licenseNumber: string;
			clients: {
				user: string;
				status: string;
				_id: string;
			}[];
			__v: number;
		};
		counts: {
			clients: number;
		};
	};
}

const userProfileApiSlice = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query<IUserProfileResponse, void>({
			query: () => ({
				url: `settings/profile`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetUserProfileQuery } = userProfileApiSlice;
