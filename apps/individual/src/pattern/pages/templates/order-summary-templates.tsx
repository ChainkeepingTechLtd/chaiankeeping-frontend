import React, { useState } from "react";

import PricingCards from "../organisms/pricing-card";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/pattern/practitioner/atoms/arrow-icon";
import OrderSummaryCard from "../organisms/order-summary-card";

const OrderSummaryTemplates = () => {
	const router = useRouter();
	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(false);

	const handleGoBack = () => {
		router.back();
	};

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
