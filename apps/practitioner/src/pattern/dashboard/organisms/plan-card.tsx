import React from "react";
import { Button } from "@chainkeeping/ui";
import Image from "next/image";
import PlanLabel from "../molecules/plans-types";

function PlanCard() {
	return (
		<div className='bg-background rounded-lg p-4 flex flex-col w-full xl:min-w-[350px] 2xl:min-w-[400px] 3xl:min-w-[420px] lg:min-w-[300px] text-grey-400 '>
			<div className='flex justify-between w-full'>
				<div>
					<PlanLabel type='Basic' />
					<h5 className='text-[#202B3C] font-bold mt-1'>Current Plan</h5>
				</div>
				<Button variant='default' size='lg' className='text-base px-4'>
					Upgrade Plan
				</Button>
			</div>
		</div>
	);
}

export default PlanCard;
