import { baseAPI } from "@/redux/api/base-api";

// Interfaces are examples
interface IPayload {
    countryId: string | number
}

interface IResponse {
    email: string;
    password: string;
}


const getCountryStatesApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getCountryStates: builder.query<IResponse, IPayload>({
            query: ({ countryId }) => ({
                url: `country/${countryId}/state/`,
                method: 'GET',
            }),
            // providesTags: ['getCountryStates'],
        }),
    }),
});

export const {
    useGetCountryStatesQuery,
    useLazyGetCountryStatesQuery,
} = getCountryStatesApiSlice;
