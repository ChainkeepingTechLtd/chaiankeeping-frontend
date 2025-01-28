import React, { useState } from "react";
import { Button } from "@chainkeeping/ui";
import ToggleIcon from "../atoms/toggle-icon";
import InfoButtonIcon from "@/pattern/reports/atoms/info-button-icon";
import SubscriptionWidget from "../organisms/subscription-widget";
import { InvoiceData } from "../molecules/invoice-data";
import InvoicesTable from "../organisms/invoices-table";
import Closeicon from "../atoms/close-icon";
import VisaCardIcon from "../atoms/visa-card";
import MastercardIcon from "../atoms/mastercard-icon";
import AddIcon from "../atoms/add-icon";
import SmsIcon from "../atoms/sms-icon";

const BillingSettings = () => {
	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(false);

	return (
		<div className='w-full h-full flex relative   pt-24 flex-col gap-10 xl:pr-16 pb-[144px] '>
			{/* Main Content */}
			<div
				className={`transition-all duration-300 ease-in-out ${
					googleAuthToggled ? "w-[calc(100%-400px)]" : "w-full"
				}`}
			>
				<div className='bg-white w-full mb-10  h-fit flex flex-col rounded-[8px] border-none border-b'>
					<div className='h-fit flex justify-between items-center border-b pb-2 px-6 py-4'>
						<h6 className='text-base font-bold font-sen text-grey-300'>
							Basic Plan
						</h6>
						<Button
							size='sm'
							variant='secondary'
							type='button'
							className='text-base font-medium '
						>
							Change plan
						</Button>
					</div>
					<div className='w-full h-full flex flex-col px-6 pb-6 !mt-0'>
						{/* Google Authenticator */}
						<div className='flex justify-between w-full mt-3'>
							<h6 className='font-medium text-sm text-grey-400'>
								Next Payment
							</h6>

							<div className='flex gap-2 items-center'>
								<p className='text-sm text-grey-300'>
									Show payment information
								</p>
								<ToggleIcon
									toggled={googleAuthToggled}
									onToggle={() => setGoogleAuthToggled(!googleAuthToggled)}
								/>
							</div>
						</div>
						<div className='bg-[#E9F2FE] rounded-md p-3 gap-1 flex w-full items-center text-sm'>
							<InfoButtonIcon />
							<p>
								Your next bill of $50.00 is scheduled for April 28, 2023, your
								default payment method below will be charged.
							</p>
						</div>
					</div>
					<div className='border-t w-full flex px-6 py-4'>
						<SubscriptionWidget />
					</div>
				</div>

				<InvoicesTable data={InvoiceData} />
			</div>

			{/* Sliding Payment Information Panel */}
			<div
				className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out 2xl:w-[400px] w-[360px] ${
					googleAuthToggled ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className=' flex flex-col h-full mt-16'>
					<div className='flex p-6 justify-between items-center mb-4 border-b pb-3'>
						<h5 className='font-sen font-bold'>Payment Information</h5>
						<button onClick={() => setGoogleAuthToggled(false)}>
							<Closeicon />
						</button>
					</div>
					<div className='flex flex-col gap-4 px-6 border-b pb-3'>
						<p>Pay from</p>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col  justify-between border  p-3 rounded-xl'>
								<div className='flex gap-2 w-full  items-center border-b  pb-5'>
									<VisaCardIcon className='w-9 h-6' />
									<span className='font-bold text-sm'>Visa ****1234</span>
								</div>
								<div className='mt-3 flex gap-3 items-center'>
									<p className='border rounded-full px-2 py-1 text-[10px]'>
										Default
									</p>
									<Button
										size='sm'
										variant='link'
										className='text-sm text-grey-300 no-underline'
									>
										Delete
									</Button>
								</div>
							</div>
							<div className='flex flex-col  justify-between border  p-3 rounded-xl'>
								<div className='flex gap-2 w-full  items-center border-b  pb-5'>
									<MastercardIcon className='w-9 h-6' />
									<span className='font-bold text-sm'>MasterCard ****5678</span>
								</div>
								<div className='mt-3 flex gap-3 items-center'>
									<p className='text-sm text-grey-300'>Make default</p>
									<Button
										size='sm'
										variant='link'
										className='text-sm text-grey-300 no-underline'
									>
										Delete
									</Button>
								</div>
							</div>

							<Button size='sm' variant='link' className='text-sm '>
								<AddIcon />
								Add new payment method
							</Button>
						</div>
					</div>

					<div className='p-6 flex flex-col gap-3 border-b'>
						<p>Send invoices to</p>
						<div className='flex w-full border   rounded-lg p-2 items-center justify-between'>
							<div className='flex gap-1 items-center'>
								<SmsIcon />
								<p className='text-sm text-grey-300'>dev@example.com</p>
							</div>
							<Button size='sm' variant='secondaryOutline' className='text-sm '>
								Save
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingSettings;
