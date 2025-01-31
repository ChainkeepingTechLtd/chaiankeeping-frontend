import React from "react";
import ClientsIcon from "../atoms/clients-icon";
import TaxesIcon from "../atoms/taxes-icon";
import TeamIcon from "../atoms/team-icon";
import MarketplaceIcon from "../atoms/marketplace-icon";
import { Button } from "@chainkeeping/ui";
import Link from "next/link";

export const DataStructure = [
	{
		id: 1,
		name: "Clients",
		icon: <ClientsIcon />,
		sub_title: "Active",
		number: 208,
		button_text: "Invite client",
		url: "/clients", // Add URL
	},
	{
		id: 2,
		name: "Taxes",
		icon: <TaxesIcon />,
		sub_title: "Taxes Due",
		number: 5,
		button_text: "View All",
		url: "/taxes", // Add URL
	},
	{
		id: 3,
		name: "Team",
		icon: <TeamIcon />,
		sub_title: "All",
		number: 11,
		button_text: "Add new Staff",
		url: "/team", // Add URL
	},
	{
		id: 4,
		name: "Marketplace",
		icon: <MarketplaceIcon />,
		sub_title: "Orders",
		number: 2,
		button_text: "View All",
		url: "/marketplace", // Add URL
	},
];

const DashboardWidget = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
			{DataStructure.map((info) => (
				<div
					key={info.id}
					className='bg-white p-6 rounded-lg shadow-md flex flex-col'
				>
					<div className='flex gap-2 items-center border-b pb-4'>
						<div className='bg-accent p-1 rounded-full'>{info.icon}</div>
						<h6 className='text-medium'>{info.name}</h6>
					</div>

					<div className='flex w-full justify-between items-center pt-4'>
						<div className='text-sm flex gap-1'>
							<p className='text-grey-400'>{info.sub_title}</p>
							<p className='font-bold'>({info.number})</p>
						</div>
						<Link href={info.url} passHref>
							<Button variant='primaryOutline' size='sm' className='text-base'>
								{info.button_text}
							</Button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default DashboardWidget;
