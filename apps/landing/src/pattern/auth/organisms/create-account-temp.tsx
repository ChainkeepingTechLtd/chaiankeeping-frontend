import React from 'react'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/lib/routes'
import { BrandLogo, Button, Card, CardContent, CardHeader, CardTitle, Checkbox, Form, FormField, FormItem, FormLabel, FormMessage, SubmitButton } from '@chainkeeping/ui'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import EmailInput from '@/pattern/common/molecules/email-input'
import PasswordInput from '@/pattern/common/molecules/password-input'
import SocialsLoginWidget from '../molecules/socials-login-widget'
import OrWidget from '../molecules/OR-widget'
import { handleLoginRouting } from '@/lib/utils/handle-login-routing'

const CreateAccountFormSchema = z.object({
    email: z
        .string()
        .email("Invalid email address") // Ensures it's a valid email format
        .min(1, "Email is required"), // Ensures it's not empty
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long") // Minimum length
        .max(64, "Password must not exceed 64 characters") // Maximum length
        .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase
        .regex(/\d/, "Password must contain at least one number") // At least one number
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character"), // At least one special character
});

const Socials: Array<"Apple" | "Google"> = [
    "Apple",
    "Google"
]

const CreateAccountTemp = () => {
    const { push } = useRouter()
    const pathname = usePathname();
    const params = useParams<{ slug: "" | "personal" | "company" | "practitioners" }>
()

    const defaultValues = {
        email: "",
        password: "",
    }

    const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
        resolver: zodResolver(CreateAccountFormSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: defaultValues
    })

    const {
        handleSubmit,
        formState: { errors, isDirty },
    } = form

    const onSubmit = (data: z.infer<typeof CreateAccountFormSchema>) => {
        console.log("Submitted: ", data)
        push(`${pathname}?additional-info=true`);
    }
    return (
        <div className='w-fit flex flex-col items-center gap-y-8 px-[18px] pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-fit max-w-[438px] lg:w-[438px] h-fit lg:h-[622px] flex flex-col gap-y-6 p-6 rounded-[8px] sahdow-md border-none">
                <CardHeader className="h-fit lg:h-[30px] flex items-start justify-start pb-2 border-b">
                    <CardTitle className="text-base font-bold font-sen">Create Account</CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                    <div className='w-full space-y-[16px]'>
                        <div className='w-full space-y-[16px]'>
                            {Socials?.map((social, idx) => (
                                <SocialsLoginWidget key={idx} social={social} onClick={() => { }} />
                            ))}
                        </div>
                        <OrWidget />
                    </div>

                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-start items-start gap-y-4 font-dmsans">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={() => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="email">Email Address</FormLabel>
                                        <EmailInput
                                            id="email"
                                            placeholder="johndoe@mail.com"
                                            autoComplete="email"
                                            name='email'
                                            error={errors['email']}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={() => (
                                    <FormItem className="w-full grid gap-2">
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <PasswordInput
                                            id="password"
                                            placeholder="At least 8 characters long"
                                            autoComplete="current-password"
                                            name="password"
                                            error={errors['password']}
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
                                disabled={!isDirty}
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
        </div>
    )
}

export default CreateAccountTemp