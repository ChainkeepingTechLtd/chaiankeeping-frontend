import { Check } from "lucide-react";
import React from "react";
import PlanCard from "./plan-cards";
import ReceiptIcon from "../atoms/receipt-icon";

const AdditionalBenefits = () => {
	return (
		<div className='w-full lg:min-h-[400px] h-fit space-y-[32px] lg:space-y-[104px] bg-white'>
			<div className='w-full space-y-[10px] px-6 py-5'>
				<div className='flex gap-2 items-center border-b border-b-border pb-3'>
					<div className='bg-accent p-1 rounded-full'>
						<ReceiptIcon className='text-accent-foreground' />
					</div>
					<h6 className='font-sen font-bold'>Inclusive in all plans</h6>
				</div>
				<div className='w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-10'>
					{/* Basic */}

					{/* Premium */}

					<div className='  '>
						<h6 className='text-sm font-bold'>Basic</h6>
						<ul className='space-y-4 mt-4'>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>7 days free trial</span>
							</li>
						</ul>
					</div>
					<div className='  '>
						<h6 className='text-sm font-bold'>Premium</h6>
						<ul className='space-y-4 mt-4'>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									One 30 minutes consultations with tax experts annually
								</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									Historical Tax forms – <b>2 Years</b>
								</span>
							</li>
						</ul>
					</div>
					<div className='  '>
						<h6 className='text-sm font-bold'>Customized</h6>
						<ul className='space-y-4 mt-4'>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									One-time <span className='font-bold'>60</span> minutes
									consultations with tax experts annually
								</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									Historical Tax forms – <b>Unlimited</b>
								</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>Live chat support</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='min-h-5 min-w-5 text-secondary mt-0.5' />
								<span className='text-sm'>Unlimited Transactions</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									Crypto and Non-Crypto Tax Reporting
								</span>
							</li>
							<li className='flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]'>
								<Check className='h-5 w-5 text-secondary mt-0.5' />
								<span className='text-sm'>
									Tax optimization and Tax-loss Harvesting
								</span>
							</li>
						</ul>
					</div>
				</div>

				<p className='text-xs'>
					<span className='text-destructive'>*</span> Discount T&C here, if any
				</p>
			</div>
		</div>
	);
};

export default AdditionalBenefits;
