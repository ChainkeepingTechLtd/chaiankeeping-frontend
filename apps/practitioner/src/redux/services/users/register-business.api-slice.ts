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


const registerBusinessApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        registerBusiness: builder.mutation<IResponse, IPayload>({
            query: (DTO) => ({
                url: `organization/`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useRegisterBusinessMutation
} = registerBusinessApiSlice;
