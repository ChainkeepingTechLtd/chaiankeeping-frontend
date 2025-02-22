import React from "react";
import Link from "next/link";
import { z } from "zod";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Button,
	SubmitButton,
} from "@chainkeeping/ui";
import { formatTextWithBoldMarkers } from "@/lib/utils/format-text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const emailAddress = "example@gmail.com";

const VerifyEmailFormSchema = z.object({
	code: z
		.string()
		.min(4, "First Name is required")
		.max(6, "First Name must not exceed 56 characters"),
});

const ResendResetEmailTemp = () => {
	const { push } = useRouter();

	const defaultValues = {
		code: "",
	};

	const form = useForm<z.infer<typeof VerifyEmailFormSchema>>({
		resolver: zodResolver(VerifyEmailFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
	} = form;

	console.log("ERRORS: ", errors);

	const onSubmit = (data: z.infer<typeof VerifyEmailFormSchema>) => {
		console.log("Submitted: ", data);
		push(APP_ROUTES.signupEmailVerified);
	};
	return (
		<div className='w-fit max-w-[437px] flex flex-col items-center gap-y-8 pb-[144px]'>
			<Link href={APP_ROUTES.index}>
				<BrandLogo />
			</Link>

			<Card className='bg-white w-[438px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] card-shadow border-none shadow-none'>
				<CardHeader className='h-[91px] border-b space-y-[16px] pb-2'>
					<CardTitle className='text-base font-bold font-sen'>
						Email Verification
					</CardTitle>
					<CardDescription className='text-sm text-[hsla(215,16%,47%,1)]'>
						{formatTextWithBoldMarkers(
							`We've sent a verification code to your email address **${emailAddress}**, enter verification code here..`
						)}
					</CardDescription>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col gap-y-6 !mt-0'>
					<Form {...form}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='w-full h-full flex flex-col justify-start items-start gap-y-4 font-dmsans'
						>
							{/* First Name */}
							<FormField
								control={form.control}
								name='code'
								render={({ field }) => (
									<FormItem className='w-full grid gap-2'>
										<FormLabel htmlFor='code'>Verification Code</FormLabel>
										<FormControl>
											<Input
												id='code'
												placeholder='enter verification code'
												type='text'
												autoComplete='code'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<SubmitButton size='lg' className='w-full text-base font-medium'>
								Verify
							</SubmitButton>
						</form>
					</Form>
				</CardContent>
			</Card>
			<div className='w-full flex flex-col items-start gap-y-2'>
				<p className='text-gray-400'>
					Didn't receive the email? Please check your spam folder or try to
					resend.
				</p>
				<Button variant='link' className='text-base'>
					Resend verification code
				</Button>
			</div>
		</div>
	);
};

export default ResendResetEmailTemp;
