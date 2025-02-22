import { IIconProps } from "@chainkeeping/ui";
import { ReactElement, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { z } from "zod"

export interface INavigation {
    title: string;
    href?: string;
}

export interface INavListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    icon: React.ReactElement
    title: string
    description: string
    exact?: boolean // Determines whether the link is exactly on the same app route e.g: "buyer" and not "buyer/checkout"
    className?: string
    toggleSheet?: () => void // hides mobile navigation sheet
}
export interface ICustomInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: FieldError;
    prefixIcon?: ReactElement;
    suffixIcon?: ReactElement;
}
export interface IInputIconProps extends IIconProps {
    focus?: boolean; // input focus state
    toggle?: boolean; // toggle password input visible state
}


export const profileSettingsSchema = z.object({
    // Basic Information
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phoneNumber: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
        .min(1, "Phone number is required"),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),

    // Other Information
    nin: z
        .string()
        .regex(/^\d{10}$/, "NIN must be exactly 10 digits")
        .optional()
        .or(z.literal("")),
    registrationId: z
        .string()
        .regex(/^TW\d{7}$/, "Registration ID must start with TW followed by 7 digits")
        .optional()
        .or(z.literal("")),
})

export type ProfileSettingsFormData = z.infer<typeof profileSettingsSchema>

export const changePasswordSchema = z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password must not exceed 64 characters")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>