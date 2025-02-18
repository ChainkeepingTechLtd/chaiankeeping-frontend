import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, Button, FormMessage, Input, SelectTrigger, SelectValue, Select, SelectContent, SelectItem } from '@chainkeeping/ui'
import { ChevronLeft } from "lucide-react"
import { businessCategory, businessInfoSchema, CompanySignupFormData } from "@/pattern/schema/auth-schema"

type BusinessInfoFormProps = {
    onSubmit: (data: Partial<CompanySignupFormData>) => void
    onBack: () => void
    defaultValues: Partial<CompanySignupFormData>
    step: number
    totalSteps: number
}

export const BusinessInfoForm = ({ onSubmit, onBack, defaultValues, step, totalSteps }: BusinessInfoFormProps) => {
    const form = useForm({
        resolver: zodResolver(businessInfoSchema),
        defaultValues: {
            businessName: defaultValues.businessName || "",
            businessCategory: defaultValues.businessCategory || "BUSINESS NAME",
            rcNumber: defaultValues.rcNumber || "",
            corporateTin: defaultValues.corporateTin || "",
        },
    })

    return (
        <Card className="bg-white w-full max-w-[438px] lg:w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] shadow-md border-none">
            <CardHeader className="w-full h-fit lg:h-[30px] flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="flex items-center text-base font-bold font-sen">
                    <span className="mr-[8px] cursor-pointer" onClick={onBack}>
                        <ChevronLeft className="text-secondary" />
                    </span>
                    Additional information
                </CardTitle>
                <span className="text-[hsla(216,30%,18%,1)] text-base font-dmsans">{step} of {totalSteps}</span>
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        {/* Business Name */}
                        <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your business name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Business Category */}
                        <FormField
                            control={form.control}
                            name="businessCategory"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Business Category</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full py-6">
                                                <SelectValue placeholder="— Select —" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {businessCategory?.map(({ name, value }) => (
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

                        {/* RC number */}
                        <FormField
                            control={form.control}
                            name="rcNumber"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>RC Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="88934894" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Coporate TIN */}
                        <FormField
                            control={form.control}
                            name="corporateTin"
                            render={({ field }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Corporate TIN</FormLabel>
                                    <FormControl>
                                        <Input placeholder="3484983944" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Next</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

