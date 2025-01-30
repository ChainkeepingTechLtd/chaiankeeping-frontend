import React, { useState } from "react";
import { Button } from "@chainkeeping/ui";
import PricingCards from "../organisms/pricing-card";
import AdditionalBenefits from "../organisms/additional-benefit";
import { useRouter } from "next/navigation";
import GoBack from "@/pattern/transaction/atoms/go-back";

const PlansTemplates = () => {
	const router = useRouter();
	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(false);

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className='w-full h-full flex relative   pt-24 flex-col gap-10 xl:pr-16 pb-[144px] '>
			<div className='flex items-center gap-2 ' onClick={handleGoBack}>
				<GoBack />
				<h6 className='font-bold'>Plans</h6>
			</div>
			<PricingCards />
			<AdditionalBenefits />
		</div>
	);
};

export default PlansTemplates;
