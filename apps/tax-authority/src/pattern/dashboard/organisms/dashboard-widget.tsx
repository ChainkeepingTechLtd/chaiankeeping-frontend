import React from "react";
import ClientsIcon from "../atoms/clients-icon";
import TaxesIcon from "../atoms/taxes-icon";
import TeamIcon from "../atoms/team-icon";
import MarketplaceIcon from "../atoms/marketplace-icon";
import { Button } from "@chainkeeping/ui";
import Link from "next/link";
import TaxPayerIcon from "../atoms/tax-payers";
import TaxesPaidIcon from "../atoms/taxes-paid-icon";
import TaxesPending from "../atoms/taxes-pending";

export const DataStructure = [
	{
		id: 1,
		name: "Tax Payers",
		icon: <TaxPayerIcon />,
		total_title: "Transaction count:",
		total: "7,679",
		volume_value: "Total Volume:",
		volume: "40,453,456.26",
	},
	{
		id: 2,
		name: "Taxes",
		icon: <TaxesIcon />,
		total_title: "Total:",
		total: "5,011",
		volume_value: "Volume:",
		volume: "30,340,430.40",
	},
	{
		id: 3,
		name: "Taxes Paid",
		icon: <TaxesPaidIcon />,
		total_title: "Total:",
		total: "456",
		volume_value: "Volume:",
		volume: "15,097,280.54",
	},
	{
		id: 4,
		name: "Taxes Pending",
		icon: <TaxesPending />,
		total_title: "Total:",
		total: "110",
		volume_value: "Volume:",
		volume: "8,453,456.96",
	},
];

const DashboardWidget = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
			{DataStructure.map((info) => (
				<div
					key={info.id}
					className='bg-white p-6 rounded-lg shadow-md flex flex-col'
				>
					<div className='flex gap-2 items-center border-b pb-4'>
						<div className='bg-accent p-1 rounded-full'>{info.icon}</div>
						<h6 className='text-medium'>{info.name}</h6>
					</div>

					<div className='flex flex-col gap-4 w-full  items-center pt-4'>
						<div className='text-sm flex w-full justify-between gap-1'>
							<p className='text-grey-400'>{info.total_title}</p>
							<p className='font-bold'>{info.total}</p>
						</div>
						<div className='text-sm flex w-full justify-between gap-1'>
							<p className='text-grey-400'>{info.volume_value}</p>
							<p className='font-bold'>
								<span className='text-grey-400 font-normal'>NGN </span>
								{info.volume}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default DashboardWidget;
