import { baseAPI } from "@/redux/api/base-api"

export interface IVerifyEmailPayload {
    email: string,
    token: string
}


interface IResponse {
    error: boolean,
    responseCode: string,
    responseMessage: string,
    data: {
        _id: string,
        firstname: string,
        lastname: string,
        email: string,
        country: string,
        state: string,
        userType: string,
        status: string,
        lastLogin: string,
        createdAt: string,
        updatedAt: string,
        isVerified: boolean
    }
}


const verifyEmailApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        verifyEmail: builder.mutation<IResponse, IVerifyEmailPayload>({
            query: DTO => ({
                url: `auth/verify-email`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useVerifyEmailMutation
} = verifyEmailApiSlice;
