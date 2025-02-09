"use client";
import TaxesTabs from "@/pattern/taxes/templates/taxes-tabs";

const Taxes = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<TaxesTabs />
		</div>
	);
};

export default Taxes;
