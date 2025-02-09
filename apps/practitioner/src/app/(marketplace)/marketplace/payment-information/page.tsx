"use client";
import PaymentInfoTabs from "@/pattern/marketplace/templates/payment-info-tabs";

const PaymentMethod = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<PaymentInfoTabs />
		</div>
	);
};

export default PaymentMethod;
