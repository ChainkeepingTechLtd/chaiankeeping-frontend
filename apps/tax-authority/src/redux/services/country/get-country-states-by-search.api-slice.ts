import { baseAPI } from "@/redux/api/base-api";

// Interfaces are examples
interface IPayload {
    countryId: string | number;
    searchKeyword: string
}

interface IResponse {
    email: string;
    password: string;
}


const getCountryStatesBySearchApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getCountryStatesBySearch: builder.query<IResponse, IPayload>({
            query: ({ countryId, searchKeyword }) => ({
                url: `country/${countryId}/state/?name__icontains=${searchKeyword}`,
                method: 'GET',
            }),
            // providesTags: ['getCountryStatesBySearch'],
        }),
    }),
});

export const {
    useGetCountryStatesBySearchQuery,
    useLazyGetCountryStatesBySearchQuery,
} = getCountryStatesBySearchApiSlice;
