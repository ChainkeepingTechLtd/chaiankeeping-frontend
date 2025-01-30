import React, { useState } from "react";
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
	Checkbox,
	Form,
	FormControl,
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

import EmailInput from "@/pattern/accounts/molecules/email-input";
import PasswordInput from "@/pattern/accounts/molecules/password-input";
import OrWidget from "../molecules/or-widget";
import SocialsLoginWidget from "../molecules/social-login-widget";
import PhoneNumberInput from "../molecules/phone-number-input";
import LocationSelector from "../organisms/locator-selector";
import LinkIcon from "../atoms/link-icon";

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
		.regex(
			/[@$!%*?&#]/,
			"Password must contain at least one special character"
		), // At least one special character
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
		.min(1, "Phone Number is required"),
	country: z.string().min(1, "Country is required"),
	state: z.string().min(1, "State of residence is required"),
});

const Socials: Array<"Apple" | "Google"> = ["Apple", "Google"];

const VerificationSettings = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const [countryName, setCountryName] = useState<string>("");
	const [stateName, setStateName] = useState<string>("");
	const params = useParams<{
		slug: "" | "personal" | "company" | "practitioners";
	}>();

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

	const onSubmit = (data: z.infer<typeof CreateAccountFormSchema>) => {
		console.log("Submitted: ", data);
		push(`${pathname}?additional-info=true`);
	};
	return (
		<div className='w-fit flex  pt-24 flex-col items-center  px-[18px] pb-[144px]'>
			<Card className='bg-white w-fit max-w-[600px] lg:w-[600px] h-fit  flex flex-col p-6 rounded-[8px] sahdow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2 '>
					<CardTitle className='text-base font-bold font-sen text-grey-300'>
						VERIFICATION
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col  !mt-0'>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid grid-cols-1 gap-4 my-5 '>
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
								<FormField
									control={form.control}
									name='phoneNumber'
									render={() => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
											<PhoneNumberInput
												id='phoneNumber'
												placeholder='At least 8 characters long'
												autoComplete='current-password'
												name='phoneNumber'
												error={errors["phoneNumber"]}
											/>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Country */}
							</div>
							<div className='flex bg-[#F8F9FA] gap-4 flex-col p-4 rounded-md'>
								<FormField
									control={form.control}
									name='country'
									render={({ field }) => (
										<FormItem className='w-full flex flex-col gap-2'>
											<FormLabel>Country</FormLabel>
											<LocationSelector
												onCountryChange={(country) => {
													setCountryName(country?.name || "");
													form.setValue(field.name, country?.name || "");
												}}
												onStateChange={(state) => {
													setStateName(state?.name || "");
													form.setValue("state", state?.name || "");
												}}
											/>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Email */}

								<FormField
									name='nin'
									render={({ field }) => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='nin'>
												National Identity Number (NIN)
											</FormLabel>
											<FormControl>
												<Input
													id='nin'
													placeholder='0123456789'
													type='text'
													autoComplete='nin'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className='flex gap-2'>
									<p className='text-xs'>Generate:</p>
									<Link
										target='_blank'
										href='https://tin.jtb.gov.ng/TinIndividualRequestExternal'
										className='text-xs text-grey-300 underline cursor-pointer hover:text-secondary duration-300 transition-all ease-in-out'
									>
										{" "}
										https://tin.jtb.gov.ng/TinIndividualRequestExternal
									</Link>
									<LinkIcon />
								</div>
							</div>

							<SubmitButton
								size='sm'
								type='submit'
								disabled={!isDirty}
								className='bg-destructive text-base mt-5 font-medium '
							>
								Save
							</SubmitButton>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default VerificationSettings;
