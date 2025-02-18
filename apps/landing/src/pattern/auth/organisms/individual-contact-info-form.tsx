import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, SubmitButton, Button, FormMessage, Input } from '@chainkeeping/ui'
import { ChevronLeft } from "lucide-react"
import PhoneNumberInput from "@/pattern/common/molecules/phone-number-input"
import LocationSelector from "@/pattern/common/organisms/location-selector"
import { contactInfoSchema, IndividualSignupFormData } from "@/pattern/schema/auth-schema"

type ContactInfoFormProps = {
    onSubmit: (data: Partial<IndividualSignupFormData>) => void
    onBack: () => void
    defaultValues: Partial<IndividualSignupFormData>
    isLoading: boolean
}

export const IndividualContactInfoForm = ({ onSubmit, onBack, defaultValues, isLoading }: ContactInfoFormProps) => {
    const form = useForm({
        resolver: zodResolver(contactInfoSchema),
        defaultValues: {
            firstname: defaultValues.firstname || "",
            lastname: defaultValues.lastname || "",
            phoneNumber: defaultValues.phoneNumber || "",
            country: defaultValues.country || "",
            state: defaultValues.state || "",
        },
    })

    return (
        <Card className="bg-white w-full max-w-[438px] lg:w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] shadow-md border-none">
            <CardHeader className="h-fit lg:h-[30px] w-full flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="flex items-center text-base font-bold font-sen">
                    <span className="mr-[8px] cursor-pointer" onClick={onBack}>
                        <ChevronLeft className="text-secondary" />
                    </span>
                    Additional information
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* First name */}
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Last name */}
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
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

