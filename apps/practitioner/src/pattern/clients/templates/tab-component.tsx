import SettingsMenuIcon from "@/pattern/common/atoms/settings-menu-icon";
import { Button } from "@chainkeeping/ui";
import React, { useState } from "react";
import AccountTable from "../organisms/account-table";
import {
	AccountData,
	ClientsData,
	TaxesDueData,
} from "../molecules/clients-data";
import TaxesDueTable from "../organisms/taxes-due-table";
import GoBack from "../atoms/go-back";

const TabComponent = () => {
	// State to manage the active tab
	const [activeTab, setActiveTab] = useState<"Account" | "Tax Due">("Account");

	return (
		<div className='w-full'>
			{/* Tab Navigation */}
			<div className='flex border-b border-gray-200 justify-between'>
				<div className='flex gap-1'>
					<button
						className={`px-4 py-2 text-sm font-medium ${
							activeTab === "Account"
								? "text-[#202B3C] border-b-2 pb-3 border-secondary"
								: "text-grey-300 hover:text-gray-700"
						}`}
						onClick={() => setActiveTab("Account")}
					>
						Account
					</button>
					<button
						className={`px-4 py-2 text-sm font-medium ${
							activeTab === "Tax Due"
								? "text-[#202B3C] border-b-2 pb-3 border-secondary"
								: "text-grey-300 hover:text-gray-700"
						}`}
						onClick={() => setActiveTab("Tax Due")}
					>
						Tax Due
					</button>
				</div>
				<Button variant='secondary' size='sm' className='text-base   gap-1'>
					<SettingsMenuIcon className='text-white' />
					View client account
				</Button>
			</div>

			{/* Tab Content */}
			<div className='mt-4'>
				{activeTab === "Account" && (
					<div>
						<AccountTable data={AccountData as any} />
					</div>
				)}
				{activeTab === "Tax Due" && (
					<div>
						<TaxesDueTable data={TaxesDueData as any} />
					</div>
				)}
			</div>
		</div>
	);
};

export default TabComponent;
