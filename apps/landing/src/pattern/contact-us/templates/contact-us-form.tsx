"use client"

import {
    Card,
    CardContent,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Hidden,
    Input,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SubmitButton,
    Textarea,
} from "@chainkeeping/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CurrentReachUsFormData, ReachUsFormSchema } from "@/pattern/schema/auth-schema"
import MapPinIcon from "@/pattern/common/atoms/map-pin-icon"
import FacebookIcon from "@/pattern/common/atoms/social-icons.tsx/facebook-icon"
import LinkedInIcon from "@/pattern/common/atoms/social-icons.tsx/linkedIn-icon"
import { useContactUsMutation } from "@/redux/services/landing/contact-us.api-slice"
import { toast } from "sonner"
import { show } from "@ebay/nice-modal-react"
import { NetworkConnectionErrorModal } from "@/pattern/common/organisms/network-connection-error-modal"
import { NETWORK_ERROR_MESSAGE } from "@/lib/constants"
import EmailInput from "@/pattern/common/molecules/email-input"
import { getEnvironment } from "@/lib/helpers/get-environment"

export const currentEnvironment = getEnvironment()

export const Source = [
    {
        name: "Social Media",
        value: "Social Media"
    },
    {
        name: "Friend",
        value: "Friend"
    },
    {
        name: "Search Engine",
        value: "Search Engine"
    },
    {
        name: "Other",
        value: "Other"
    },
]

export default function ContactForm() {
    // Contact support API mutation
    const [contactUs, { isLoading, isSuccess, isError, error }] = useContactUsMutation()

    const form = useForm<CurrentReachUsFormData>({
        resolver: zodResolver(ReachUsFormSchema),
        defaultValues: {
            email: "",
            source: undefined,
            firstName: "",
            lastName: "",
            inquiry: "",
        },
    })

    const onSubmit = ({ email, firstName, lastName, inquiry, source }: CurrentReachUsFormData) => {
        contactUs({
            email: email,
            firstname: firstName,
            lastname: lastName,
            inquiry: inquiry ?? "I would like to be on Chainkeeping's waitlist",
            aboutUs: source
        })
            .unwrap()
            .then(res => {
                toast.success('Successful', {
                    description:
                        "Thank you! We've received your request and will get back to you shortly.",
                    duration: 5000,
                    cancel: {
                        onClick: () => { },
                        label: 'Okay',
                    },
                })
                form.reset()
            })
            .catch(error => {
                if (
                    'error' in error &&
                    error?.error === 'TypeError: Failed to fetch'
                ) {
                    show(NetworkConnectionErrorModal, {
                        message: `${NETWORK_ERROR_MESSAGE}`,
                    })
                } else {
                    // display error message
                    toast.error('Unexpected error', {
                        description: `${error?.data?.responseMessage ??
                            'We encountered an error while trying to send your request'
                            }`,
                        duration: 8000,
                        cancel: {
                            onClick: () => { },
                            label: 'Close',
                        },
                    })
                }
            })
    }

    return (
        <div className="w-full lg:w-[701px] h-fit lg:min-h-[442px] px-[18px] lg:px-0 lg:mx-auto space-y-[32px]">
            <Card className="p-8 shadow-md">
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                                {/* Email Address */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={() => (
                                        <FormItem className="w-full grid gap-2">
                                            <FormLabel>Email Address</FormLabel>
                                            <EmailInput
                                                id="email"
                                                placeholder="yourmail@gmail.com"
                                                autoComplete="email"
                                                name="email"
                                                error={form.formState.errors["email"]}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* source */}
                                <FormField
                                    control={form.control}
                                    name="source"
                                    render={({ field }) => (
                                        <FormItem className="w-full grid gap-2">
                                            <FormLabel>How did you hear about us?</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger variant={form.formState.errors["source"] ? "error" : "default"} className="w-full min-h-[48px] py-6">
                                                        <SelectValue placeholder="— Select —" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {Source?.map(({ name, value }) => (
                                                        <SelectItem key={value} value={value}>
                                                            {name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* First name */}
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="w-full grid gap-2">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="enter your first name" variant={form.formState.errors["firstName"] ? "error" : "default"} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Last name */}
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="w-full grid gap-2">
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="enter your last name" variant={form.formState.errors["lastName"] ? "error" : "default"} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                                {/* Your inquiry / Feedback */}
                                <FormField
                                    control={form.control}
                                    name="inquiry"
                                    render={({ field }) => (
                                        <FormItem className="w-full grid gap-2">
                                            <FormLabel>Your inquiry / Feedback</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} id="source" placeholder="Your text here..." variant={form.formState.errors["inquiry"] ? "error" : "default"} className="min-h-[96px]" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            <div className="w-full lg:flex lg:justify-end">
                                <SubmitButton type="submit" loading={isLoading} className="w-full lg:w-fit">
                                    Submit
                                </SubmitButton>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="w-full h-fit lg:h-[80px] flex flex-col lg:flex-row lg:justify-center gap-4">
                <div
                    className="w-full h-full flex items-center justify-center gap-2 text-sm text-gray-600 p-6 border rounded-[8px] shadow-sm"
                >
                    <FacebookIcon />
                    Facebook
                </div>
                <div
                    className="w-full h-full flex items-center justify-center gap-2 text-sm text-gray-600 p-6 border rounded-[8px] shadow-sm"
                >
                    <LinkedInIcon />
                    LinkedIn
                </div>
            </div>

            <div className="h-fit lg:h-[80px] w-full flex justify-center items-start lg:items-center gap-2 text-sm text-gray-600 p-6 border rounded-[8px]">
                <div>
                    <MapPinIcon />
                </div>
                <p>No. 3, Rabat Street, off Herbert Macaulay way, Wuse Zone 6, Abuja, Nigeria</p>
            </div>
        </div>
    )
}

