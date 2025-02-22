import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, SubmitButton, Button, FormMessage, Input } from '@chainkeeping/ui'
import { paractitionerContactInfoSchema, PractitionerSignupFormData } from "../../schema/auth-schema"
import { ChevronLeft } from "lucide-react"
import EmailInput from "@/pattern/common/molecules/email-input"
import PhoneNumberInput from "@/pattern/common/molecules/phone-number-input"
import LocationSelector from "@/pattern/common/organisms/location-selector"

type ContactInfoFormProps = {
    onSubmit: (data: Partial<PractitionerSignupFormData>) => void
    onBack: () => void
    defaultValues: Partial<PractitionerSignupFormData>
    isLoading: boolean
    step: number
    totalSteps: number
}

export const PractitionerContactInfoForm = ({ onSubmit, onBack, defaultValues, isLoading, step, totalSteps }: ContactInfoFormProps) => {
    const form = useForm({
        resolver: zodResolver(paractitionerContactInfoSchema),
        defaultValues: {
            firstname: defaultValues.firstname || "",
            lastname: defaultValues.lastname || "",
            corporateEmail: defaultValues.corporateEmail || "",
            phoneNumber: defaultValues.phoneNumber || "",
            country: defaultValues.country || "",
            state: defaultValues.state || "",
        },
    })

    return (
        <Card className="bg-white w-full max-w-[438px] lg:w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] shadow-md border-none">
            <CardHeader className="h-fit lg:h-[30px] w-full flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="flex items-center text-base font-bold font-sen">
                    <span className="mr-[8px] cursor-pointer" onClick={onBack}><ChevronLeft className="text-secondary" /></span>
                    Additional information</CardTitle>
                <span className="text-[hsla(216,30%,18%,1)] text-base font-dmsans">{step} of {totalSteps}</span>
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* First Name */}
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Last Name */}
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Corporate Email Address */}
                        <FormField
                            control={form.control}
                            name="corporateEmail"
                            render={() => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Corporate Email Address</FormLabel>
                                    <FormControl>
                                        <EmailInput
                                            id="corporateEmail"
                                            placeholder="company@mail.com"
                                            autoComplete="corporateEmail"
                                            name='corporateEmail'
                                            error={form.formState.errors['corporateEmail']}
                                        />
                                    </FormControl>
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
                                    <FormLabel>Phone Number</FormLabel>
                                    <PhoneNumberInput
                                        id="phoneNumber"
                                        placeholder="At least 8 characters long"
                                        autoComplete="phoneNumber"
                                        name="phoneNumber"
                                        error={form.formState.errors['phoneNumber']}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Country */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Country</FormLabel>
                                    <LocationSelector
                                        onCountryChange={(country) => {
                                            form.setValue(field.name,
                                                country?.name || '',
                                            )
                                        }}
                                        onStateChange={(state) => {
                                            form.setValue("state",
                                                state?.name || '',
                                            )
                                        }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <SubmitButton
                            type="submit"
                            disabled={isLoading}
                            loading={isLoading}
                            className="w-full">Submit</SubmitButton>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

