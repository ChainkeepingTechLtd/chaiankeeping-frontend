import { FC, useEffect, useState } from "react";
import { Button, Input, SubmitButton } from "@chainkeeping/ui";

import CopyIcon from "@/pattern/taxes/atoms/copy-icon";
import Modal from "@/pattern/taxes/molecules/modal-compoent";

interface ModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
}

const EmailAuthModal: FC<ModalComponentProps> = ({ isOpen, onClose }) => {
	const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
	const [seconds, setSeconds] = useState(59);
	const [isCountdownFinished, setIsCountdownFinished] = useState(false);

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
					<div>
						<h6>Enter Authentication code</h6>
						<p className='text-grey-500 text-sm'>
							We’ve sent an authentication code to your email ex***le@gmail.com,
							enter it below.
						</p>
						<div className='flex gap-2 my-5'>
							{otp.map((digit, index) => (
								<input
									key={index}
									id={`otp-input-${index}`}
									type='text'
									value={digit}
									placeholder='-'
									onChange={(e) => handleInputChange(e.target.value, index)}
									onKeyDown={(e) => handleKeyDown(e, index)}
									maxLength={1}
									className='w-12 h-12 border rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-secondary'
								/>
							))}
						</div>
						<Button variant='default' size='md' className='w-full text-base'>
							Enable email authentication
						</Button>
						<p className='text-[#202B3C] pt-3 text-center cursor-pointer'>
							{isCountdownFinished ? (
								<span className='text-[#D82E2E] font-medium'>Resend code</span>
							) : (
								`Resend code in ${seconds}s`
							)}
						</p>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default EmailAuthModal;
