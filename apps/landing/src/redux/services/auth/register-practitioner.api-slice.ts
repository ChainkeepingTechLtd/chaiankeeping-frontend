import { baseAPI } from "@/redux/api/base-api"

interface IPayload {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    country: string,
    state: string,
    kyc: {
        cacDocument?: string, // NOT NECCESSARY
        tin: string
    },
    profile: {
        rcNumber: string,
        licenseNumber: string,
        corporateEmail: string,
        businessName: string,
        businessCategory: string
    },
    userType: "PRACTITIONER"
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


const registerPractitionerApiSlice = baseAPI.injectEndpoints({
    endpoints: builder => ({
        registerPractitioner: builder.mutation<IResponse, IPayload>({
            query: DTO => ({
                url: `auth/register`,
                method: 'POST',
                body: DTO,
            }),
        }),
    }),
});

export const {
    useRegisterPractitionerMutation
} = registerPractitionerApiSlice;
