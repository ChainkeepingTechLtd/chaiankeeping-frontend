"use client";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Checkbox,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	SubmitButton,
} from "@chainkeeping/ui";
import Link from "next/link";
import { LoginFormData, loginInfoSchema } from "@/pattern/schema/auth-schema";
import EmailInput from "@/pattern/accounts/molecules/email-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordInput from "@/pattern/accounts/molecules/password-input";
import { useLoginMutation } from "@/redux/services/auth/login.api-slice";
import { useDispatch } from "react-redux";
import {
	loginStart,
	loginSuccess,
	loginFailure,
} from "@/redux/slices/auth-slice";
import { RootState } from "@/redux/root-reducer";
import { useSelector } from "react-redux";
import { toast } from "sonner"; // Import toast from sonner

const CreateAccountFormSchema = z.object({
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.max(64, "Password must not exceed 64 characters")
		.regex(/[a-z]/, "Password must contain at least one lowercase letter")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(/\d/, "Password must contain at least one number")
		.regex(
			/[@$!%*?&#]/,
			"Password must contain at least one special character"
		),
});

const LoginBody = () => {
	const pathname = usePathname();
	const { push } = useRouter();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();
	const loginState = useSelector((state: RootState) => state.loginState) || {
		error: null,
	};

	const defaultValues = {
		email: "",
		password: "",
	};

	const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
		resolver: zodResolver(CreateAccountFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
	} = form;

	const onSubmit = async (data: z.infer<typeof CreateAccountFormSchema>) => {
		try {
			dispatch(loginStart());
			const response = await login(data).unwrap();
			dispatch(loginSuccess(response));

			// Show success toast
			toast.success("Login Successful", {
				description: "You have successfully logged in.",
				duration: 5000,
				cancel: {
					label: "Close",
					onClick: () => {},
				},
			});

			push(APP_ROUTES.dashboard);
		} catch (error) {
			dispatch(loginFailure("Login failed"));

			// Show error toast
			toast.error("Login Failed", {
				description: "Invalid email or password. Please try again.",
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
			<Card className='bg-white mt-10 w-fit max-w-[438px] lg:w-[438px] h-fit  flex flex-col p-6 rounded-[8px] sahdow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2 border-b'>
					<CardTitle className='text-base font-bold font-sen'>
						Log in to your account
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col  !mt-0'>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid  gap-4 my-5 '>
								{/* Email */}
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
								{/* Password */}
								<FormField
									control={form.control}
									name='password'
									render={() => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel>Password</FormLabel>
											<PasswordInput
												id='password'
												placeholder='At least 8 characters long'
												autoComplete='current-password'
												name='password'
												error={form.formState.errors["password"]}
											/>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex justify-between items-center mb-4'>
								<div className='flex items-center gap-1'>
									<Checkbox />
									<p className='text-sm text-[#202B3C]'>Keep me logged in</p>
								</div>
								<Link
									className='text-[#D82E2E] hover:border-b border-[#D82E2E] text-sm'
									href='/forgot-password'
								>
									Forgot Password?
								</Link>
							</div>

							<SubmitButton
								size='md'
								type='submit'
								disabled={!isDirty || isLoading}
								className='bg-primary w-full text-base font-medium mt-[8px]'
							>
								{isLoading ? "Logging in..." : "Log in"}
							</SubmitButton>

							<div className='flex text-[#202B3C] items-center w-full justify-center gap-3 mt-6'>
								<p>Don’t have an account?</p>{" "}
								<Link
									className='text-[#D82E2E] hover:border-b border-[#D82E2E]'
									href='/sign-up'
								>
									Sign Up
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginBody;
