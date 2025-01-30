import InfoButtonIcon from "@/pattern/reports/atoms/info-button-icon";
import React from "react";

export const SelectedPlan = [
	{
		title: "Premium Plan - 2022",
		id: 1,
		plan: "USD 200.00",
		equivalent: "NGN 150,000.00",
		code: "#CK01234567",
	},
	{
		title: "Premium Plan - 2023",
		id: 2, // Updated id to avoid duplicate keys
		plan: "USD 200.00",
		equivalent: "NGN 150,000.00",
		code: "#CK01234568", // Updated code for differentiation
	},
];

const OrderSummary = () => {
	return (
		<div className='flex flex-col'>
			<div className=' flex flex-col bg-[#EBEFF3] rounded-md p-6 space-y-4 xl:min-w-[468px]'>
				<div className='bg-[#DDE2E9] rounded w-full p-2 font-semibold text-center'>
					ORDER SUMMARY
				</div>
				{SelectedPlan.map(({ title, plan, equivalent, code, id }) => (
					<div key={id} className='flex flex-col gap-2 border-b pb-3 '>
						<div className='flex justify-between text-sm text-gray-600 '>
							<span>{title}:</span>
							<span className='font-medium'>{plan}</span>
						</div>
						<div className='flex justify-between text-sm text-gray-600'>
							<span className='text-sm text-grey-400'>{code}:</span>
							<span className='text-sm text-grey-400'>{equivalent}</span>
						</div>
					</div>
				))}
				<div className='flex w-full justify-between border-b pb-3 '>
					<p>Total:</p>
					<div>
						<p className='text-end'>USD 400.00</p>
						<p className='text-sm text-grey-400'>(NGN 300,000.00)</p>
					</div>
				</div>
			</div>
			<div className='flex items-center py-2 my-4 px-3 min-h-[42px] max-sm:items-center bg-[#E9F2FE] w-full rounded-lg gap-2 cursor-pointer transition-opacity duration-300 opacity-100'>
				<InfoButtonIcon />
				<p className='text-[#202B3C] lg:max-w-[370px] text-sm'>
					Payments may take up to 15 minutes to be confirmed.
				</p>
			</div>
		</div>
	);
};

export default OrderSummary;
