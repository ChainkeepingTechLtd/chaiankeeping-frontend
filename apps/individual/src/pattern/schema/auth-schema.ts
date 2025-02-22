import { z } from "zod"

export const loginInfoSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one letter, one number, and one special character"
        ),
    acceptTerms: z.boolean().refine(value => value === true, {
        message: "You must accept the terms.",
    }),
})

export const businessInfoSchema = z.object({
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    businessCategory: z.enum([
        "BUSINESS NAME",
        "INCORPORATED TRUSTEES",
        "LIMITED PARTNERSHIP",
        "LIMITED LIABILITY PARTNERSHIP"
    ], {
        errorMap: () => ({ message: "Business category must be one of: BUSINESS NAME, INCORPORATED TRUSTEES, LIMITED PARTNERSHIP or LIMITED LIABILITY PARTNERSHIP" }),
    }),
    rcNumber: z
        .string()
        .min(5, "RC Number must be at least 5 digits")
        .max(22, "RC Number must be at most 22 digits")
        .regex(/^\d+$/, "RC Number must contain only numbers"),
    corporateTin: z
        .string()
        .min(10, "Corporate TIN must be at least 10 digits")
        .max(22, "Corporate TIN must be at most 22 digits")
        .regex(/^\d+$/, "Corporate TIN must contain only numbers"),
})

export const licenseNumberInfoSchema = z.object({
    licenseNumber: z
        .string()
        .min(5, "License Number must be at least 5 digits")
        .max(22, "License Number must be at most 22 digits")
        .regex(/^\d+$/, "License Number must contain only numbers"),
})

export const companyContactInfoSchema = z.object({
    corporateEmail: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
})
export const contactInfoSchema = z.object({
    firstname: z.string().min(2, "Your first name should be at least 2 characters"),
    lastname: z.string().min(2, "Your first name should be at least 2 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
})
export const paractitionerContactInfoSchema = z.object({
    firstname: z.string().min(2, "Your first name should be at least 2 characters"),
    lastname: z.string().min(2, "Your first name should be at least 2 characters"),
    corporateEmail: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
})

export const VerifyEmailFormSchema = z.object({
    // email: z.string().email("Invalid email address"),
    token: z
        .string()
        .min(4, "Veification token must be at least 4 digits")
        .max(6, "Veification token must be at most 6 digits")
        .regex(/^\d+$/, "verification token must contain only numbers"),
});

export const companySignupFormSchema = loginInfoSchema.merge(businessInfoSchema).merge(companyContactInfoSchema)
export const practionerSignupFormSchema = loginInfoSchema.merge(businessInfoSchema).merge(licenseNumberInfoSchema).merge(paractitionerContactInfoSchema)
export const individualSignupFormSchema = loginInfoSchema.merge(contactInfoSchema)

export type LoginFormData = z.infer<typeof loginInfoSchema>
export type CompanySignupFormData = z.infer<typeof companySignupFormSchema>
export type IndividualSignupFormData = z.infer<typeof individualSignupFormSchema>
export type PractitionerSignupFormData = z.infer<typeof practionerSignupFormSchema>

export const defaultCompanyFormData: CompanySignupFormData = {
    email: "",
    password: "",
    acceptTerms: false,
    businessName: "",
    businessCategory: "BUSINESS NAME",
    rcNumber: "",
    corporateTin: "",
    corporateEmail: "",
    phoneNumber: "",
    country: "",
    state: "",
}
export const defaultIndividualFormData: IndividualSignupFormData = {
    email: "",
    password: "",
    acceptTerms: false,
    firstname: "",
    lastname: "",
    phoneNumber: "",
    country: "",
    state: "",
}
export const defaultPractitionerFormData: PractitionerSignupFormData = {
    email: "",
    password: "",
    acceptTerms: false,
    businessName: "",
    businessCategory: "BUSINESS NAME",
    rcNumber: "",
    licenseNumber: "",
    corporateTin: "",
    corporateEmail: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
    country: "",
    state: "",
}

export const businessCategory = [
    {
        name: "BUSINESS NAME",
        value: "BUSINESS NAME"
    },
    {
        name: "INCORPORATED TRUSTEES",
        value: "INCORPORATED TRUSTEES"
    },
    {
        name: "LIMITED PARTNERSHIP",
        value: "LIMITED PARTNERSHIP"
    },
    {
        name: "LIMITED LIABILITY PARTNERSHIP",
        value: "LIMITED LIABILITY PARTNERSHIP"
    },
]