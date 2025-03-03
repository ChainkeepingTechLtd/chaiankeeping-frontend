import React, { useState, useEffect } from "react";
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
import { useGetUserProfileQuery } from "@/redux/services/settings/user-profile.api-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner"; // Import sonner toast
import { useUpdateProfileMutation } from "@/redux/services/settings/update-profile.api-slice";
import EmailInput from "@/pattern/accounts/molecules/email-input";
import PhoneNumberInput from "../molecules/phone-number-input";
import LocationSelector from "../organisms/locator-selector";

const CreateAccountFormSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
		.min(1, "Phone Number is required"),
	country: z.string().min(1, "Country is required"),
	state: z.string().min(1, "State of residence is required"),
	nin: z.string().min(1, "National Identity Number is required"),
	id: z.string().min(1, "Registration ID is required"),
});

const Socials: Array<"Apple" | "Google"> = ["Apple", "Google"];

const ProfileSettings = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const [countryName, setCountryName] = useState<string>("");
	const [stateName, setStateName] = useState<string>("");
	const params = useParams<{
		slug: "" | "personal" | "company" | "practitioners";
	}>();

	const { data: userProfile, error, isLoading } = useGetUserProfileQuery();
	const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
	const accessToken = useSelector(
		(state: RootState) => state.loginState.accessToken
	);

	const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
		resolver: zodResolver(CreateAccountFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			country: "",
			state: "",
			nin: "",
			id: "",
		},
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = form;

	useEffect(() => {
		if (userProfile) {
			reset({
				firstName: userProfile.data.user.firstname,
				lastName: userProfile.data.user.lastname,
				email: userProfile.data.user.email,
				phoneNumber: userProfile.data.user.phonenumber,
				country: userProfile.data.user.country,
				state: userProfile.data.user.state,
				nin: userProfile.data.user.kyc.tin || "",
				id: userProfile.data.user.ckId || "",
			});
		}
	}, [userProfile, reset]);

	useEffect(() => {
		if (error) {
			console.error("Failed to fetch user profile:", error);
		}
	}, [error]);

	const onSubmit = async (data: z.infer<typeof CreateAccountFormSchema>) => {
		try {
			const response = await updateProfile({
				firstname: data.firstName,
				lastname: data.lastName,
			}).unwrap();

			if (!response.error) {
				toast.success("Profile updated successfully!");
			} else {
				toast.error("Failed to update profile.");
			}
		} catch (err) {
			toast.error("An error occurred while updating the profile.");
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error loading user profile</div>;
	}

	return (
		<div className='w-fit flex  pt-24 flex-col items-center  px-[18px] pb-[144px]'>
			<Card className='bg-white w-fit max-w-[850px] lg:w-[850px] h-fit  flex flex-col p-6 rounded-[8px] sahdow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2 '>
					<CardTitle className='text-base font-bold font-sen text-grey-300'>
						BASIC INFORMATION
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col  !mt-0'>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid grid-cols-2 gap-4 my-5 '>
								<FormField
									name='firstName'
									render={({ field }) => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='firstName'>First Name</FormLabel>
											<FormControl>
												<Input
													id='firstName'
													placeholder='First name'
													type='text'
													autoComplete='firstName'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name='lastName'
									render={({ field }) => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='lastName'>Last Name</FormLabel>
											<FormControl>
												<Input
													id='lastName'
													placeholder='Last name'
													type='text'
													autoComplete='lastName'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
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
							</div>

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

							<CardHeader className='h-fit my-5 lg:h-[30px] flex items-start justify-start pb-2 '>
								<CardTitle className='text-base font-bold font-sen text-grey-300'>
									OTHER INFORMATION
								</CardTitle>
							</CardHeader>

							<div className='grid grid-cols-2 gap-4 mb-5 '>
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
								<FormField
									name='id'
									render={({ field }) => (
										<FormItem className='w-full grid gap-2'>
											<FormLabel htmlFor='id'>Registration ID</FormLabel>
											<FormControl>
												<Input
													id='id'
													placeholder='TW0000001'
													type='text'
													autoComplete='id'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<SubmitButton
								size='sm'
								type='submit'
								disabled={!isDirty || isUpdating}
								className='bg-destructive text-base font-medium mt-[8px]'
							>
								{isUpdating ? "Saving..." : "Save"}
							</SubmitButton>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProfileSettings;
