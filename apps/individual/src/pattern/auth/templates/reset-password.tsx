import { useState, useEffect } from "react";
import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo } from "@chainkeeping/ui";
import Link from "next/link";
import InfoIcon from "../atoms/info-icon";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
	const [seconds, setSeconds] = useState(119); // Starting countdown from 119 seconds
	const [isCountdownFinished, setIsCountdownFinished] = useState(false);
	const searchParams = useSearchParams(); // Get query parameters
	const email = searchParams.get("email"); // Extract the email from the query parameters

	// Function to mask the email
	const maskEmail = (email: string | null) => {
		if (!email) return ""; // Return empty string if email is null

		const [localPart, domain] = email.split("@");

		if (localPart.length <= 3) {
			// If the local part is too short, return only the first letter + ***
			return `${localPart[0]}****@${domain}`;
		}

		// Show first 2 letters, hide the middle, and show last letter
		return `${localPart.slice(0, 2)}****${localPart.slice(-1)}@${domain}`;
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

	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>

				<p className='max-sm:mt-14 font-bold'>Forgot password</p>
				<p className='mt-4 text-sm text-grey-500'>
					Click on the password reset link from your email to change your
					password.
				</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>

				<div className='space-y-2'>
					<div className='bg-[#E9F2FE] w-full p-4 rounded-md flex gap-2'>
						<InfoIcon />
						<p className='text-sm text-[#131319]'>
							Password reset link has been sent to your email address{" "}
							<b>{maskEmail(email)}</b>
						</p>
					</div>
				</div>
			</div>
			<div className='mt-6 sm:w-[438px] max-sm:px-6'>
				<p className='text-grey-400'>
					Didn’t receive the email? Please check your spam folder or try to
					resend.
				</p>
				<p className='text-[#202B3C] pt-3'>
					{isCountdownFinished ? (
						<span className='text-[#D82E2E] font-semibold'>
							Resend password reset link
						</span>
					) : (
						`Resend password reset link in ${seconds}s`
					)}
				</p>
			</div>
		</div>
	);
};

export default ResetPassword;
