import { baseAPI } from "@/redux/api/base-api";

// Interfaces are examples
interface IPayload {
    countryId: string | number;
    stateId: string
}

interface IResponse {
    email: string;
    password: string;
}


const getStatesCitiesApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        getStatesCities: builder.query<IResponse, IPayload>({
            query: ({ countryId, stateId }) => {
                return {
                    url: `country/${countryId}/state/${stateId}/city/`,
                    method: 'GET',
                };
            },
            // providesTags: ['getStatesCities'],
        }),
    }),
});

export const {
    useGetStatesCitiesQuery,
    useLazyGetStatesCitiesQuery,
} = getStatesCitiesApiSlice;
