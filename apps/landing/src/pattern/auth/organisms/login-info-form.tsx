"use client";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormData, loginInfoSchema } from "@/pattern/schema/auth-schema"
import { Card, CardContent, CardHeader, CardTitle, Form, FormField, FormItem, FormLabel, SubmitButton, FormMessage, Checkbox, Button } from '@chainkeeping/ui'
import EmailInput from "@/pattern/common/molecules/email-input"
import PasswordInput from "@/pattern/common/molecules/password-input"
import { APP_ROUTES } from "@/lib/routes"
import Link from "next/link"
import { handleLoginRouting } from "@/lib/utils/handle-login-routing"
import { useParams } from "next/navigation"

type LoginInfoFormProps = {
    onSubmit: (data: Partial<LoginFormData>) => void
    defaultValues: Partial<LoginFormData>
}

export const LoginInfoForm = ({ onSubmit, defaultValues }: LoginInfoFormProps) => {
    const params = useParams<{ slug: "" | "personal" | "company" | "practitioners" }>();

    const form = useForm({
        resolver: zodResolver(loginInfoSchema),
        defaultValues: {
            email: defaultValues.email || "",
            password: defaultValues.password || "",
        },
    })

    return (
        <Card className="bg-white w-full max-w-[438px] lg:w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] shadow-md border-none">
            <CardHeader className="h-fit lg:h-[30px] flex items-start justify-start pb-2 border-b">
                <CardTitle className="text-base font-bold font-sen">Create Account</CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({  }) => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Email Address</FormLabel>
                                    <EmailInput
                                        id="email"
                                        placeholder="johndoe@mail.com"
                                        autoComplete="email"
                                        name='email'
                                        error={form.formState.errors['email']}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={() => (
                                <FormItem className="w-full grid gap-2">
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInput
                                        id="password"
                                        placeholder="At least 8 characters long"
                                        autoComplete="current-password"
                                        name="password"
                                        error={form.formState.errors['password']}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex items-start space-x-2">
                            <Checkbox id="terms" className='mt-[2px]' />
                            <label
                                htmlFor="terms"
                                className="text-sm font-normal leading-[18px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                By clicking continue, you agree to our <Link href={APP_ROUTES.terms} className='h-fit font-dmsans font-normal text-secondary p-0' >Terms of service</Link> and <Link href={APP_ROUTES.privacyPolicy} className='h-fit font-dmsans font-normal text-secondary p-0' >Privacy policy</Link>
                            </label>
                        </div>

                        <SubmitButton
                            size="lg"
                            type="submit"
                            // disabled={!form.formState.isDirty}
                            className="w-full text-base font-medium mt-[8px]"
                        >
                            Continue
                        </SubmitButton>
                    </form>
                    <div className='w-full flex items-center justify-center gap-x-2 font-dmsans text-base'>
                        <p className='text-gray-700'>Already have an account?</p>
                        <Button variant="link" onClick={() => handleLoginRouting(params.slug)}>Log in</Button>
                    </div>
                </Form>
            </CardContent>
        </Card>
    )
}

