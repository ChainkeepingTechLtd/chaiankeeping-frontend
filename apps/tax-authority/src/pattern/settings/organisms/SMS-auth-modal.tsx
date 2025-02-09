import { FC, useEffect, useState } from "react";
import {
	Button,
	CardContent,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@chainkeeping/ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import PhoneNumberInput from "../molecules/phone-number-input";

const CreateAccountFormSchema = z.object({
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
		.min(1, "Phone Number is required"),
});

interface ModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
}

const SmsAuthModal: FC<ModalComponentProps> = ({ isOpen, onClose }) => {
	const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
	const [seconds, setSeconds] = useState(59);
	const [isCountdownFinished, setIsCountdownFinished] = useState(false);

	const defaultValues = {
		phoneNumber: "",
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
	};

	useEffect(() => {
		if (seconds === 0) {
			setIsCountdownFinished(true); // Countdown finished
			return;
		}

		const intervalId = setInterval(() => {
			setSeconds((prev: number) => prev - 1);
		}, 1000);

		return () => clearInterval(intervalId); // Cleanup the interval on unmount
	}, [seconds]);

	const handleInputChange = (value: string, index: number) => {
		if (value.length > 1) return; // Prevent more than one character
		const updatedOtp = [...otp];
		updatedOtp[index] = value;
		setOtp(updatedOtp);

		// Focus the next input field if available
		if (value && index < otp.length - 1) {
			const nextInput = document.getElementById(`otp-input-${index + 1}`);
			nextInput?.focus();
		}
	};

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (event.key === "Backspace" && !otp[index] && index > 0) {
			const prevInput = document.getElementById(`otp-input-${index - 1}`);
			prevInput?.focus();
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Email Authentication'>
			<div className='p-4 flex justify-between gap-4'>
				<div className='w-full lg:max-w-[437px] flex flex-col gap-4'>
					<CardContent className='w-full h-full flex flex-col  !mt-0'>
						<Form {...form}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='grid  gap-4 mb-5'>
									{/* Email */}
									<p className='text-grey-500 text-sm'>
										Enter your mobile phone number and click on send code.
									</p>
									<FormField
										control={form.control}
										name='phoneNumber'
										render={() => (
											<FormItem className='w-full grid gap-2'>
												<FormLabel htmlFor='phoneNumber'>
													Phone Number
												</FormLabel>
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

									<p className='text-[#202B3C]   cursor-pointer'>
										{isCountdownFinished ? (
											<span className='text-[#D82E2E] font-medium'>
												Resend code
											</span>
										) : (
											`Resend code in ${seconds}s`
										)}
									</p>
								</div>
								<div>
									<h6>Enter Authentication code</h6>
									<p className='text-grey-500 text-sm'>
										Enter the authentication code sent to your phone number
									</p>
									<div className='flex gap-2 my-5'>
										{otp.map((digit, index) => (
											<input
												key={index}
												id={`otp-input-${index}`}
												type='text'
												value={digit}
												placeholder='-'
												onChange={(e) =>
													handleInputChange(e.target.value, index)
												}
												onKeyDown={(e) => handleKeyDown(e, index)}
												maxLength={1}
												className='w-12 h-12 border rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-secondary'
											/>
										))}
									</div>
									<Button
										variant='default'
										size='md'
										className='w-full text-base'
									>
										Enable SMS authentication
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</div>
			</div>
		</Modal>
	);
};

export default SmsAuthModal;
