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

export type LoginFormData = z.infer<typeof loginInfoSchema>