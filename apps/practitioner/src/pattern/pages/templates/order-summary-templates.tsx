import React from "react";
import OrderSummaryCard from "../organisms/order-summary-card";
import ArrowIcon from "@/pattern/clients/atoms/arrow-icon";

const OrderSummaryTemplates = () => {
	return (
		<div className='w-full h-full flex relative   pt-24 flex-col gap-10 xl:pr-16 pb-[144px] '>
			<div className='gap-2 flex items-center text-sm'>
				<p className='text-grey-300'>Plans</p>
				<ArrowIcon />

				<p>Order summary</p>
			</div>
			<OrderSummaryCard />
		</div>
	);
};

export default OrderSummaryTemplates;
