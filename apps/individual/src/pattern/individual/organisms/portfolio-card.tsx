import React from "react";
import PortfolioIcon from "../atoms/portfolio-icon";
import { Button } from "@chainkeeping/ui";
import PortfolioTable from "../molecules/porfolio-table";

function PortfolioCard() {
	return (
		<div className='bg-background rounded-lg p-4 flex flex-col w-full md:min-w-[300px] xl:min-w-[350px] 2xl:min-w-[400px] 3xl:min-w-[420px] lg:min-w-[300px] text-grey-400 '>
			<div className='flex justify-between w-full pb-3'>
				<div className='flex items-center gap-3'>
					<PortfolioIcon />
					<p className='font-medium text-[#202B3C]'>Portfolio</p>
				</div>
				<div className='flex gap-3 items-center '>
					<p className='text-grey-300 text-sm'>
						NGN{" "}
						<span className='font-bold text-[#202B3C]'>
							40,453,456.<span className='text-[10px] text-grey-300'>26</span>
						</span>
					</p>
					<p className='text-[10px] text-[#27AE60]'>+15%</p>
				</div>
			</div>
			<div className='border-b flex w-full border-[#E6E9EE]'></div>
			<div className='flex w-full justify-between py-4 items-center'>
				<p className='font-bold text-sm'>Top holdings</p>
				<div className='flex items-center gap-2'>
					<p>
						Assets <span className='text-[#202B3C] pr-2'>(18)</span>
					</p>
					<Button variant='primaryOutline' size='sm'>
						View All
					</Button>
				</div>
			</div>
			<PortfolioTable />
		</div>
	);
}

export default PortfolioCard;
