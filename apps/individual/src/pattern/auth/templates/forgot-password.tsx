"use client";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	SubmitButton,
} from "@chainkeeping/ui";
import Link from "next/link";
import EmailInput from "@/pattern/accounts/molecules/email-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/redux/services/auth/forgot-password-slice";
import { toast } from "sonner"; // Import toast from sonner

// Schema for the forgot password form
const ForgotPasswordSchema = z.object({
	email: z.string().email("Invalid email address").min(1, "Email is required"),
});

const ForgotPassword = () => {
	const { push } = useRouter();
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation(); // Use the forgot password mutation

	const defaultValues = {
		email: "",
	};

	const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
		resolver: zodResolver(ForgotPasswordSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
	} = form;

	const onSubmit = async (data: z.infer<typeof ForgotPasswordSchema>) => {
		try {
			const response = await forgotPassword(data).unwrap();

			// Show success toast
			toast.success("Password Reset Email Sent", {
				description: "Check your email for a password reset link.",
				duration: 5000,
				cancel: {
					label: "Close",
					onClick: () => {},
				},
			});

			// Redirect to the change password page with the email as a query parameter
			push(
				`${APP_ROUTES.reset_password}?email=${encodeURIComponent(data.email)}`
			);
		} catch (error) {
			// Show error toast
			toast.error("Failed to Send Reset Email", {
				description:
					"An error occurred while sending the reset email. Please try again.",
				duration: 8000,
				cancel: {
					label: "Close",
					onClick: () => {},
				},
			});
		}
	};

	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<Card className='bg-white mt-4 w-fit max-w-[438px] lg:w-[438px] h-fit  flex flex-col p-6 rounded-[8px] sahdow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2 '>
					<CardTitle className='text-base font-bold font-sen'>
						Forgot Password
					</CardTitle>
					<p className=' text-sm text-grey-500'>
						Can’t remember your password? Enter your registered email address,
						and we’ll send you a password reset link.
					</p>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col pt-6 reset_password'>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid gap-4 my-5'>
								{/* Email Field */}
								<FormField
									control={form.control}
									name='email'
									render={() => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='email'>Email Address</FormLabel>
											<EmailInput
												id='email'
												placeholder='johndoe@mail.com'
												autoComplete='email'
												name='email'
												error={errors["email"]}
											/>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* Submit Button */}
							<SubmitButton
								size='md'
								type='submit'
								disabled={!isDirty || isLoading}
								className='bg-primary w-full text-base font-medium mt-[8px]'
							>
								{isLoading ? "Sending..." : "Send Reset Link"}
							</SubmitButton>

							{/* Back to Login Link */}
							<div className='flex text-[#202B3C] items-center w-full justify-center gap-3 mt-6'>
								<p>Remember your password?</p>{" "}
								<Link
									className='text-[#D82E2E] hover:border-b border-[#D82E2E]'
									href={APP_ROUTES.reset_password}
								>
									Log In
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ForgotPassword;
