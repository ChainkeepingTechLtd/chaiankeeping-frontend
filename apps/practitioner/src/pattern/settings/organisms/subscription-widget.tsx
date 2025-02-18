import React from "react";
import VisaCardIcon from "../atoms/visa-card";
import { Button } from "@chainkeeping/ui";

const SubscriptionWidget = () => {
	return (
		<div className='flex w-full justify-between'>
			<div className='flex items-center justify-between w-full gap-2'>
				<div className='flex gap-3'>
					<VisaCardIcon />
					<div>
						<h6 className='font-medium'>Visa ending 1234</h6>
						<div className='flex text-grey-300 text-sm   gap-2'>
							<p className='flex pr-3 border-r'>Expiry: 03/2026</p>
							<p>Mailed to: dev@example.com</p>
						</div>
					</div>
				</div>
				<Button
					size='md'
					variant='link'
					type='button'
					className='text-base font-medium '
				>
					Cancel subscription
				</Button>
			</div>
		</div>
	);
};

export default SubscriptionWidget;
