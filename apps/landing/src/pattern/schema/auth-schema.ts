import { z } from "zod"

export const loginInfoSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one letter, one number, and one special character"
        )
})

export const businessInfoSchema = z.object({
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    businessCategory: z.enum(["llc", "plc", "corp"], {
        errorMap: () => ({ message: "Business category must be one of: llc, plc, corp" }),
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

export const contactInfoSchema = z.object({
    corporateEmail: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
})

export const formSchema = loginInfoSchema.merge(businessInfoSchema).merge(contactInfoSchema)

export type FormData = z.infer<typeof formSchema>

export const defaultFormData: FormData = {
    email: "",
    password: "",
    businessName: "",
    businessCategory: "plc",
    rcNumber: "",
    corporateTin: "",
    corporateEmail: "",
    phoneNumber: "",
    country: "",
    state: "",
}

export const businessCategory = [
    {
        name: "LLC",
        value: "llc"
    },
    {
        name: "PLC",
        value: "plc"
    },
    {
        name: "CORP",
        value: "corp"
    }
]