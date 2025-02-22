import { baseAPI } from "@/redux/api/base-api";

// These interfaces are examples
interface IPayload {
    email: string;
    password: string;
}
interface IResponse {
    email: string;
    password: string;
}


const resetPasswordApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        resetPassword: builder.mutation<IResponse, IPayload>({
            query: DTO => ({
                url: `users/reset_password/`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useResetPasswordMutation
} = resetPasswordApiSlice;
