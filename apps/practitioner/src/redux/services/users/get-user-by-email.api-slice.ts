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


const getUserByEmailApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getUserByEmail: builder.query<IResponse, IPayload>({
            query: ({ email }) => ({
                url: `users/${email}/`,
                method: 'GET',
            }),
            // providesTags: ['getUserByEmail'],
        }),
    }),
});

export const {
    useGetUserByEmailQuery,
    useLazyGetUserByEmailQuery,
} = getUserByEmailApiSlice;
