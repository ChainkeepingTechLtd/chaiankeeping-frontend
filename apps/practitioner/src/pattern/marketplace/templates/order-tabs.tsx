import React, { useState } from "react";
import ActiveOrderTab from "../organisms/active-order-tab";
import OrderHistoryTab from "../organisms/order-history-tab";
import { MenuIcon } from "lucide-react";
import MainMenuIcon from "../atoms/menu-icon";
import { useRouter } from "next/navigation";

const OrderTabs = () => {
	const [activeTab, setActiveTab] = useState("Active");
	const router = useRouter();
	const handleGoBack = () => {
		router.back();
	};

	const renderContent = () => {
		switch (activeTab) {
			case "Active":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<ActiveOrderTab />
					</div>
				);
			case "Order History":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<OrderHistoryTab />
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className='h-full w-full flex flex-col'>
			{/* Fixed Tabs */}
			<div className='fixed left-0 w-full bg-white shadow-md z-10 pt-3'>
				<div className='flex flex-col justify-between md:px-8 mx-auto px-4'>
					<div
						className='flex items-center gap-2 cursor-pointer'
						onClick={handleGoBack}
					>
						<MainMenuIcon />
						<h6 className='font-bold'>Orders</h6>
					</div>

					<div className='flex'>
						<button
							className={`px-4 py-4 font-medium ${
								activeTab === "Active"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Active")}
						>
							Active
						</button>
						<button
							className={`px-4 py-2 font-medium ${
								activeTab === "Order History"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Order History")}
						>
							Order History
						</button>
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 md:px-8 w-full'>{renderContent()}</div>
		</div>
	);
};

export default OrderTabs;
