import React from "react";
import { Button, Input } from "@chainkeeping/ui";
import { useRouter } from "next/navigation";
import SmsIcon from "../atoms/sms-icon";
import Image from "next/image";

const ConnectAPractioner = () => {
	const { push } = useRouter();

	// Function to handle login click
	const handleConnect = () => {
		push("/practitioner/practitioners");
	};

	return (
		<div className='md:container flex flex-col h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col'>
			<div className='w-full flex max-sm:flex-col  gap-4  rounded-lg sm:bg-[#E6E9EE] '>
				<div className='w-full flex max-sm:flex-col-reverse justify-between bg-white py-6 px-8 max-sm:px-6 max-sm:rounded-lg sm:rounded-l-lg gap-14'>
					<div className='flex flex-col gap-4'>
						<h6 className='font-bold '>Connect to a practitioner</h6>
						<p className='text-grey-600 md:max-w-[400px]  '>
							Simplify your tax management with the help of a professional, let
							our network of certified practitioners take care of your account.
						</p>
						<Button
							onClick={handleConnect}
							variant='secondary'
							size='md'
							className='text-base px-3 gap-1'
						>
							Connect to a Practitioner
						</Button>
					</div>
					<Image
						src='/connect.gif'
						className='w-[189px] h-[189px] max-sm:w-full max-sm:h-full'
						alt='connect-to-practioner'
					/>
				</div>
				<div className='px-8 py-6 bg-[#E6E9EE] max-sm:rounded-lg max-sm:px-6 rounded-r-lg'>
					<div className='flex flex-col gap-4'>
						<h6 className='font-bold '>Already have a practitioner?</h6>
						<p className='text-grey-600 sm:w-[400px]'>
							Well, that's not an issue, if they are already on Chainkeeping,
							provide their user ID or else, their email address to invite them
							to manage your account.
						</p>
						<div className='flex gap-2 max-sm:flex-col'>
							<Input id='email' type='text' placeholder='Email address or ID' />
							<Button
								onClick={handleConnect}
								variant='default'
								size='md'
								className='text-base px-3 gap-1 max-sm:w-full'
							>
								<SmsIcon />
								Send invite
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectAPractioner;
