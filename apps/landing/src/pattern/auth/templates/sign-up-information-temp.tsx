import React, { useState } from 'react'
import Link from 'next/link'
import { APP_ROUTES } from '@/lib/routes'
import { BrandLogo, Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, SubmitButton, FormMessage, Input } from '@chainkeeping/ui'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LocationSelector from '@/pattern/common/organisms/location-selector';
import PhoneNumberInput from '@/pattern/common/molecules/phone-number-input';
import { useRouter } from 'next/navigation';

const SignupInfoFormSchema = z.object({
    firstName: z
        .string()
        .min(1, "First Name is required")
        .max(50, "First Name must not exceed 50 characters"),
    lastName: z
        .string()
        .min(1, "Last Name is required")
        .max(50, "Last Name must not exceed 50 characters"),
    phoneNumber: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
        .min(1, "Phone Number is required"),
    country: z
        .string()
        .min(1, "Country is required"),
    state: z
        .string()
        .min(1, "State of residence is required"),
});

const SignUpInformationTemp = () => {
    const [countryName, setCountryName] = useState<string>('')
    const [stateName, setStateName] = useState<string>('')

    const [formData, setFormData] = useState<Partial<FormData>>({})
    const [step, setStep] = useState(1)

    const { push } = useRouter()

    const defaultValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        country: "",
        state: "",
    }

    const form = useForm<z.infer<typeof SignupInfoFormSchema>>({
        resolver: zodResolver(SignupInfoFormSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: defaultValues
    })

    const {
        handleSubmit,
        formState: { errors, isDirty },
    } = form

    console.log("ERRORS: ", errors)

    const onSubmit = (data: z.infer<typeof SignupInfoFormSchema>) => {
        console.log("Submitted: ", data)
        push(APP_ROUTES.verifySignupEmail)
    }

    const handleNext = (data: Partial<FormData>) => {
        setFormData((prev) => ({ ...prev, ...data }))
        setStep((prev) => prev + 1)
    }

    const handleBack = () => {
        setStep((prev) => prev - 1)
    }

    // const handleSubmit = async (data: Partial<FormData>) => {
    //     const finalData = { ...formData, ...data }
    //     console.log("Form submitted:", finalData)
    //     // Here you would typically send the data to your server
    //     // await fetch('/api/register', { method: 'POST', body: JSON.stringify(finalData) });
    // }
    return (
        <div className='w-fit flex flex-col items-center gap-y-8 px-[18px] pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-full max-w-[438px] lg:w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] sahdow-md border-none">
                <CardHeader className="h-fit lg:h-[30px] flex items-start justify-start pb-2 border-b">
                    <CardTitle className="text-base font-bold font-sen">Additional information</CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-start items-start gap-y-4 font-dmsans">
                            {/* First Name */}
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="firstName"
                                                placeholder="First name"
                                                type="text"
                                                autoComplete="firstName"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Last Name */}
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="lastName"
                                                placeholder="Last name"
                                                type="text"
                                                autoComplete="lastName"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Country */}
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="w-full flex flex-col gap-2">
                                        <FormLabel>Country</FormLabel>
                                        <LocationSelector
                                            onCountryChange={(country) => {
                                                setCountryName(country?.name || '')
                                                form.setValue(field.name,
                                                    country?.name || '',
                                                )
                                            }}
                                            onStateChange={(state) => {
                                                setStateName(state?.name || '')
                                                form.setValue("state",
                                                    state?.name || '',
                                                )
                                            }}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Phone Number */}
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={() => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                                        <PhoneNumberInput
                                            id="phoneNumber"
                                            placeholder="At least 8 characters long"
                                            autoComplete="current-password"
                                            name="phoneNumber"
                                            error={errors['phoneNumber']}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <SubmitButton
                                size="lg"
                                type="submit"
                                disabled={!isDirty}
                                className="w-full text-base font-medium mt-[18px]"
                            >
                                Complete Sign up
                            </SubmitButton>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUpInformationTemp