import React from "react";
import InactiveRadioIcon from "../atoms/inactive-radio-icon";
import { Button } from "@chainkeeping/ui";
import KeyIcon from "../atoms/key-icon";
import Image from "next/image";

const SelectPayment = () => {
	return (
		<div className='flex flex-col gap-6 items-center justify-center'>
			<div className='xl:max-w-[512px] w-full p-6 bg-white rounded-md'>
				<h4 className='text-xl font-bold'>How do you want to pay?</h4>
				<p className='text-grey-600'>
					Select a payment method that is most convenient for you
				</p>
				<div className='flex w-full items-center flex-col gap-4 mt-4'>
					<div className='border justify-between items-center rounded-md flex w-full p-4'>
						<Image
							src='/Paystack_Logo 1 (1).png'
							width={136.19}
							height={75}
							alt='paystack'
						/>
						<InactiveRadioIcon />
					</div>
					<div className='border justify-between items-center rounded-md flex w-full p-4'>
						<Image src='/image 67 (1).png' width={92} height={50} alt='Image 67' />
						<InactiveRadioIcon />
					</div>
					<div className='border justify-between items-center rounded-md flex w-full p-4'>
						<Image src='/Frame 218.png' width={144} height={50} alt='Frame 218' />
						<InactiveRadioIcon />
					</div>

					<Button
						variant='secondary'
						size='md'
						className='w-full text-base font-medium'
					>
						Pay now $400
					</Button>

					<Button
						variant='link'
						size='md'
						className='w-full  text-base font-medium '
					>
						Cancel
					</Button>
				</div>
			</div>
			<div className='flex gap-2 items-center'>
				<KeyIcon />
				<p className='text-xs text-[#4F627D]'>
					You will be redirected to the third party’s webpage to make this
					payment
				</p>
			</div>
		</div>
	);
};

export default SelectPayment;
