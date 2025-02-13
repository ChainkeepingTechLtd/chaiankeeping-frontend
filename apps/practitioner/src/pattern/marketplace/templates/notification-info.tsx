import React, { useState } from "react";
import MainMenuIcon from "../atoms/menu-icon";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	SubmitButton,
} from "@chainkeeping/ui";
import ToggleIcon from "@/pattern/settings/atoms/toggle-icon";
import TwoFAModal from "@/pattern/settings/organisms/2FA-modal";
import EmailAuthModal from "@/pattern/settings/organisms/email-auth-modal";
import SmsAuthModal from "@/pattern/settings/organisms/SMS-auth-modal";
import RadioButtonIcon from "../atoms/radio-button-icon";
import EmailInput from "@/pattern/accounts/molecules/email-input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ActiveRadioButtonIcon from "../atoms/active-radio-icon";

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

const NotificationInfo = () => {
	const [activeTab, setActiveTab] = useState("Bank accounts");
	const router = useRouter();
	const handleGoBack = () => {
		router.back();
	};
	const params = useParams<{
		slug: "" | "personal" | "company" | "practitioners";
	}>();
	const pathname = usePathname();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
	const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(false);
	const [emailToggled, setEmailToggled] = useState(true);
	const [smsToggled, setSmsToggled] = useState(false);
	const [paymentEmailToggled, setPaymentEmailToggled] = useState(true);
	const [paymentSmsToggled, setPaymentSmsToggled] = useState(false);
	const [chatsEmailToggled, setChatsEmailToggled] = useState(true);
	const [chatSmsToggled, setChatSmsToggled] = useState(false);
	const [reviewsEmailToggled, setReviewsEmailToggled] = useState(false);
	const [reviewsSmsToggled, setReviewsSmsToggled] = useState(false);

	// State for selected email option
	const [selectedEmailOption, setSelectedEmailOption] = useState("default");

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openEmailModal = () => setIsEmailModalOpen(true);
	const closeEmailModal = () => setIsEmailModalOpen(false);

	const openSmsModal = () => setIsSmsModalOpen(true);
	const closeSmsModal = () => setIsSmsModalOpen(false);

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

	return (
		<div className=' w-full bg-[#F4F7F9] flex flex-col'>
			{/* Fixed Tabs */}
			<div className='fixed max-sm:pt-[70px] left-0 w-full bg-white shadow-md z-10 pt-3'>
				<div className='flex flex-col justify-between md:px-8 mx-auto px-4'>
					<div className='flex justify-between items-center py-4'>
						<div
							className='flex items-center gap-2 cursor-pointer'
							onClick={handleGoBack}
						>
							<MainMenuIcon />
							<h6 className='font-bold fomt-sen'>Notification Settings</h6>
						</div>
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 max-sm:pt-36 md:px-8  w-full'>
				<div className='w-fit flex  flex-col items-center px-[18px] pb-[144px]'>
					<Card className='bg-white w-fit max-w-[856px] lg:w-[856px] h-fit flex flex-col p-6 max-sm:p-4 rounded-[8px] shadow-md border-none'>
						<div className='flex w-full max-sm:flex-col gap-3 bg-accent p-4 rounded-md justify-between'>
							<div className='text-sm'>
								<h6 className='font-bold'>Contact details</h6>
								<p className=' text-grey-500'>
									Choose where we will send you email for your notifications
								</p>
							</div>

							<div className='flex flex-col gap-6'>
								{/* Default Email Option */}
								<div
									className='flex gap-2 cursor-pointer'
									onClick={() => setSelectedEmailOption("default")}
								>
									{selectedEmailOption === "default" ? (
										<ActiveRadioButtonIcon />
									) : (
										<RadioButtonIcon />
									)}
									<div className='text-sm mt-1'>
										<h6 className='font-bold'>Send to my default email</h6>
										<p className='text-grey-500'>example@gmail.com</p>
									</div>
								</div>

								{/* Alternate Email Option */}
								<div
									className='flex gap-2 cursor-pointer'
									onClick={() => setSelectedEmailOption("alternate")}
								>
									{selectedEmailOption === "alternate" ? (
										<ActiveRadioButtonIcon />
									) : (
										<RadioButtonIcon />
									)}
									<div className='text-sm'>
										<h6 className='font-bold mb-3 mt-1'>
											Send to an alternate email
										</h6>

										<Form {...form}>
											<div className='flex items-center gap-2'>
												<FormField
													control={form.control}
													name='email'
													render={() => (
														<FormItem className='w-full grid '>
															<EmailInput
																id='email'
																className='h-9 text-sm'
																placeholder='johndoe@mail.com '
																autoComplete='email'
																name='email'
																error={errors["email"]}
															/>
															<FormMessage />
														</FormItem>
													)}
												/>
												<SubmitButton
													size='sm'
													type='submit'
													disabled={!isDirty}
													className='bg-destructive text-base font-medium '
												>
													Save
												</SubmitButton>
											</div>
										</Form>
									</div>
								</div>
							</div>
						</div>
						<CardHeader className='h-fit lg:h-[30px] flex  items-start justify-start pb-2'>
							<CardTitle className='text-base font-bold font-sen text-grey-300'>
								NOTIFICATIONS
							</CardTitle>
						</CardHeader>
						<CardContent className='w-full h-full flex flex-col !mt-0'>
							<form className='flex flex-col gap-2 md:mt-5'>
								{/* Google enticator */}
								<div className='flex  justify-between border-b py-3   w-full'>
									<div className='flex max-sm:flex-col justify-between  w-full md:gap-10'>
										<div className='flex flex-col w-full'>
											<h6 className='font-medium'>Orders</h6>
											<p className='text-grey-400 text-sm'>
												Receive notifications about new orders and order status
												changes
											</p>
										</div>
										<div className='justify-between items-center  flex w-full'>
											<div className='flex-col flex gap-5 max-sm:gap-3'>
												<p>Email</p>
												<p>SMS</p>
											</div>
											<div>
												<ToggleIcon
													toggled={emailToggled}
													onToggle={() => setEmailToggled(!emailToggled)}
												/>

												<ToggleIcon
													toggled={smsToggled}
													onToggle={() => setSmsToggled(!smsToggled)}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='flex justify-between border-b py-3   w-full'>
									<div className='flex max-sm:flex-col justify-between  w-full md:gap-10'>
										<div className='flex flex-col w-full'>
											<h6 className='font-medium'>Payments</h6>
											<p className='text-grey-400 text-sm'>
												Receive notifications when a client makes a payment
											</p>
										</div>
										<div className='justify-between items-center  flex w-full'>
											<div className='flex-col flex gap-5 max-sm:gap-3'>
												<p>Email</p>
												<p>SMS</p>
											</div>
											<div>
												<ToggleIcon
													toggled={paymentEmailToggled}
													onToggle={() =>
														setPaymentEmailToggled(!paymentEmailToggled)
													}
												/>

												<ToggleIcon
													toggled={paymentSmsToggled}
													onToggle={() =>
														setPaymentSmsToggled(!paymentSmsToggled)
													}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='flex justify-between border-b py-3   w-full'>
									<div className='flex max-sm:flex-col justify-between  w-full md:gap-10'>
										<div className='flex flex-col w-full'>
											<h6 className='font-medium'>Chats</h6>
											<p className='text-grey-400 text-sm'>
												Receive notifications when a client messages you
											</p>
										</div>
										<div className='justify-between items-center  flex w-full'>
											<div className='flex-col flex gap-5 max-sm:gap-3'>
												<p>Email</p>
												<p>SMS</p>
											</div>
											<div>
												<ToggleIcon
													toggled={chatsEmailToggled}
													onToggle={() =>
														setChatsEmailToggled(!chatsEmailToggled)
													}
												/>

												<ToggleIcon
													toggled={chatSmsToggled}
													onToggle={() => setChatSmsToggled(!chatSmsToggled)}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='flex justify-between  py-3   w-full'>
									<div className='flex max-sm:flex-col justify-between  w-full md:gap-10 '>
										<div className='flex flex-col w-full'>
											<h6 className='font-medium'>Reviews</h6>
											<p className='text-grey-400 text-sm'>
												Receive notifications when a client leaves feedback or
												reviews for you
											</p>
										</div>
										<div className='justify-between items-center  flex w-full'>
											<div className='flex-col flex gap-5 max-sm:gap-3'>
												<p>Email</p>
												<p>SMS</p>
											</div>
											<div>
												<ToggleIcon
													toggled={reviewsEmailToggled}
													onToggle={() =>
														setReviewsEmailToggled(!reviewsEmailToggled)
													}
												/>

												<ToggleIcon
													toggled={reviewsSmsToggled}
													onToggle={() =>
														setReviewsSmsToggled(!reviewsSmsToggled)
													}
												/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</CardContent>
					</Card>
					<TwoFAModal isOpen={isModalOpen} onClose={closeModal} />
					<EmailAuthModal isOpen={isEmailModalOpen} onClose={closeEmailModal} />
					<SmsAuthModal isOpen={isSmsModalOpen} onClose={closeSmsModal} />
				</div>
			</div>
		</div>
	);
};

export default NotificationInfo;
