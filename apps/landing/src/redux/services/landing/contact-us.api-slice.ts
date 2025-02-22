import { baseAPI } from "@/redux/api/base-api";

interface IPayload {
    email: string,
    firstname: string,
    lastname: string,
    inquiry: string,
    aboutUs: string
}

interface IResponse {
    error: false,
    responseCode: "CHAINAUTH201",
    responseMessage: "Contact created successfully",
    data: {
        firstname: string,
        lastname: string,
        inquiry: string,
        email: string,
        status: string,
        _id: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    }
}


const contactUsApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        contactUs: builder.mutation<IResponse, IPayload>({
            query: DTO => ({
                url: `landing/contact`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useContactUsMutation
} = contactUsApiSlice;
