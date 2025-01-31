import { Check } from "lucide-react";
import React, { useState } from "react";
import PlanCard from "./plan-cards";
import ReceiptIcon from "../atoms/receipt-icon";
import OrderSummary from "../molecules/order-summary";
import SelectPayment from "../molecules/select-payment";

const OrderSummaryCard = () => {
	const [activeYears, setActiveYears] = useState<number[]>([2022]);

	// Toggle year selection
	const toggleYear = (year: number) => {
		setActiveYears((prev) =>
			prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
		);
	};

	return (
		<div className='w-full lg:min-h-[400px] h-fit space-y-[32px] lg:space-y-[10px]'>
			<div className=' space-y-[32px]'>
				<div className=' h-full flex  gap-10'>
					<OrderSummary />

					<SelectPayment />
				</div>
			</div>
		</div>
	);
};

export default OrderSummaryCard;
