import { baseAPI } from "@/redux/api/base-api";

interface IPayload {
    userName: string;
    password: string
}

interface IResponse {
    
}


const loginApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<IResponse, IPayload>({
            query: DTO => ({
                url: `jwt/create/`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useLoginMutation
} = loginApiSlice;
