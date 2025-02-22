import { baseAPI } from "@/redux/api/base-api"

export interface IPayload {
    email: string,
}


interface IResponse {
    error: boolean,
    responseCode: string,
    responseMessage: string,
    data: boolean
}


const resendVerificationEmailApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        resendVerificationEmail: builder.mutation<IResponse, IPayload>({
            query: DTO => ({
                url: `auth/resend-email`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useResendVerificationEmailMutation
} = resendVerificationEmailApiSlice;
