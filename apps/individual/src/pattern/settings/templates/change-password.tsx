import React from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	SubmitButton,
} from "@chainkeeping/ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordInput from "@/pattern/accounts/molecules/password-input";
import { useChangePasswordMutation } from "@/redux/services/settings/change-password.api-slice";
import { toast } from "sonner"; // Import Sonner Toast

const ChangePasswordSchema = z
	.object({
		password: z.string().min(1, "Current password is required"),
		newPassword: z
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
		confirmPassword: z.string().min(1, "Confirm password is required"),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

const ChangePasswordSettings = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const [changePassword, { isLoading }] = useChangePasswordMutation(); // Use the mutation hook

	const defaultValues = {
		password: "",
		newPassword: "",
		confirmPassword: "",
	};

	const form = useForm<z.infer<typeof ChangePasswordSchema>>({
		resolver: zodResolver(ChangePasswordSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
	} = form;

	const onSubmit = async (data: z.infer<typeof ChangePasswordSchema>) => {
		try {
			const response = await changePassword({
				password: data.password,
				newPassword: data.newPassword,
			}).unwrap();

			// Show success toast
			toast.success("Password changed successfully!", {
				description: "Your password has been updated.",
			});

			console.log("Password changed successfully:", response);
			push(`${pathname}?success=true`); // Redirect or show success message
		} catch (error) {
			// Show error toast
			toast.error("Failed to change password", {
				description: "Please check your current password and try again.",
			});

			console.error("Failed to change password:", error);
		}
	};

	return (
		<div className='w-fit flex pt-24 flex-col items-center px-[18px] pb-[144px]'>
			<Card className='bg-white w-fit max-w-[454px] lg:w-[454px] h-fit flex flex-col p-6 rounded-[8px] shadow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2'>
					<CardTitle className='text-base font-bold font-sen text-grey-300'>
						CHANGE PASSWORD
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col !mt-0'>
					<Form {...form}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col gap-3'
						>
							{/* Current Password */}
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem className='w-full grid gap-2'>
										<FormLabel htmlFor='password'>Current Password</FormLabel>
										<PasswordInput
											id='password'
											placeholder='Enter your current password'
											autoComplete='current-password'
											{...field}
											error={errors.password}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* New Password */}
							<FormField
								control={form.control}
								name='newPassword'
								render={({ field }) => (
									<FormItem className='w-full grid gap-2'>
										<FormLabel htmlFor='newPassword'>New Password</FormLabel>
										<PasswordInput
											id='newPassword'
											placeholder='Enter your new password'
											autoComplete='new-password'
											{...field}
											error={errors.newPassword}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Confirm New Password */}
							<FormField
								control={form.control}
								name='confirmPassword'
								render={({ field }) => (
									<FormItem className='w-full grid gap-2'>
										<FormLabel htmlFor='confirmPassword'>
											Confirm New Password
										</FormLabel>
										<PasswordInput
											id='confirmPassword'
											placeholder='Confirm your new password'
											autoComplete='new-password'
											{...field}
											error={errors.confirmPassword}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>

							<SubmitButton
								size='sm'
								type='submit'
								disabled={!isDirty || isLoading}
								className='bg-destructive text-base font-medium mt-[8px]'
							>
								{isLoading ? "Saving..." : "Save"}
							</SubmitButton>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ChangePasswordSettings;
