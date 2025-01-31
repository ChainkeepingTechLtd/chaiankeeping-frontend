import React from "react";
import Link from "next/link";
import { Button } from "@chainkeeping/ui";
import ClientsIcon from "@/pattern/dashboard/atoms/clients-icon";
import TaxesIcon from "@/pattern/dashboard/atoms/taxes-icon";
import TeamIcon from "@/pattern/dashboard/atoms/team-icon";
import MarketplaceIcon from "@/pattern/dashboard/atoms/marketplace-icon";
import OrderIcon from "../atoms/order-icon";
import ProfileSettings from "../atoms/profile-settings-icon";
import PaymentInformationIcon from "../atoms/payment-information-icon";
import NotificationIcon from "../atoms/notification-icon";
import Reviewicon from "../atoms/reviews-icon";
import ReviewIcon from "../atoms/reviews-icon";

export const DataStructure = [
	{
		id: 1,
		name: "Orders",
		icon: <OrderIcon />,
		message:
			"View and confirm all your active orders, active orders and order history.",
		sub_title: "Pending orders",
		value: "12",
		url: "/marketplace/orders", // Add URL
	},
	{
		id: 2,
		name: "Profile Settings",
		icon: <ProfileSettings />,
		message:
			"Set up how you show up to clients on the P2B marketplace, services, costs etc.",
		sub_title: "selected",
		value: "Account management, Report signing ",
		url: "/marketplace/profile-settings", // Add URL
	},
	{
		id: 3,
		name: "Payment Information",
		icon: <PaymentInformationIcon />,
		message:
			"Add and manage your bank accounts to receive payments for services offered.",
		sub_title: "Bank accounts added",
		value: "3",
		url: "/marketplace/payment-information", // Add URL
	},
	{
		id: 4,
		name: "Notification Settings",
		icon: <NotificationIcon />,
		message:
			"Get notified on incoming orders, set up your notification preferences.",
		sub_title: "turned on",
		value: "Email, SMS",
		url: "/marketplace/notificaton-settings", // Add URL
	},
	{
		id: 5,
		name: "Review",
		icon: <ReviewIcon />,
		message:
			"See what your clients think about your services, suggestions and feedback.",
		sub_title: "Reviews so far",
		value: "15",
		url: "/marketplace/reviews", // Add URL
	},
];

const MarketplaceWidget = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4'>
			{DataStructure.map((info) => (
				<Link key={info.id} href={info.url} passHref>
					<div className='bg-white p-6 rounded-lg shadow-md flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300'>
						{/* Top Section */}
						<div className='flex flex-col flex-grow pb-4'>
							<div className='flex gap-2 items-center pb-4'>
								<div className='p-1 rounded-full'>{info.icon}</div>
								<h6 className='text-medium'>{info.name}</h6>
							</div>
							<p className='text-grey-500 my-2 flex-grow'>{info.message}</p>
						</div>

						{/* Bottom Section */}
						<div className='flex w-full justify-between items-center border-t  pt-4'>
							<div className='text-sm flex gap-1'>
								<p className='font-bold'>{info.value}</p>
								<p className='text-grey-400'>{info.sub_title}</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MarketplaceWidget;
