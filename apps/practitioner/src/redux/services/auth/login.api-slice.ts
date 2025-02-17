import { baseAPI } from "@/redux/api/base-api";

interface IPayload {
    email: string,
    password: string,
    firstname?: string, // Not required for COMPANY
    lastname?: string, // Not required for COMPANY
    phonenumber: string,
    country: string,
    state: string,
    kyc: {
        cacDocument?: string, // Not required for COMPANY
        tin: string
    },
    profile: {
        corporateEmail: string,
        businessName: string,
        rcNumber: string,
        businessCategory: string
    },
    userType: "COMPANY"
}

interface IResponse {
    error: boolean,
    responseCode: string,
    responseMessage: string,
    data: {
        ckId: string,
        firstname: string,
        lastname: string,
        email: string,
        phonenumber: string,
        country: string,
        state: string,
        userType: string,
        profile: string,
        kyc: {
            status: string,
            phoneStatus: string,
            cacDocument: string,
            tin: string,
            verificationDate: string,
            _id: string,
            updatedAt: string
        },
        twoFA: {
            totp: {
                isEnabled: boolean
            },
            email: {
                isEnabled: boolean
            },
            sms: {
                isEnabled: boolean
            },
            yubikey: {
                isEnabled: boolean
            },
            _id: string
        },
        status: string,
        isVerified: boolean,
        _id: string,
        lastLogin: string,
        createdAt: string,
        updatedAt: string
    }
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
