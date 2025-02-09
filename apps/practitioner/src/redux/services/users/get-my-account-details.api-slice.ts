import { baseAPI } from "@/redux/api/base-api";

// Interfaces are examples
interface IResponse {
    first_name: string;
    last_name: string;
    email: string
}


const getMyAccountDetailsApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getMyAccountDetails: builder.query<IResponse, void>({
            query: () => ({
                url: 'users/me/',
                method: 'GET',
            }),
            // providesTags: ['getMyAccountDetails'],
        }),
    }),
});

export const {
    useGetMyAccountDetailsQuery,
    useLazyGetMyAccountDetailsQuery,
} = getMyAccountDetailsApiSlice;
