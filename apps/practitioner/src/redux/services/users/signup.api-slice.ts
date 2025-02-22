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


const signUpApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation<IResponse, IPayload>({
            query: (DTO) => ({
                url: `users/`,
                method: 'POST',
                body: DTO,
            }),
        })
    }),
});

export const {
    useSignupMutation
} = signUpApiSlice;
