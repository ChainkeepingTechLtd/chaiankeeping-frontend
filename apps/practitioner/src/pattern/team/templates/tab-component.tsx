import AccountTable from "@/pattern/clients/organisms/account-table";
import SettingsMenuIcon from "@/pattern/common/atoms/settings-menu-icon";
import { Button } from "@chainkeeping/ui";
import React, { useState } from "react";
import { AccountData, TaxesDueData } from "../molecules/team-data";
import TaxesDueTable from "@/pattern/clients/organisms/taxes-due-table";
import ClientsTable from "../organisms/client-tables";
import { ClientsData } from "@/pattern/clients/molecules/clients-data";

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
						Clients
					</button>
				</div>
			</div>

			{/* Tab Content */}
			<div className='mt-10'>
				{activeTab === "Account" && (
					<div>
						<ClientsTable data={ClientsData as any} />
					</div>
				)}
			</div>
		</div>
	);
};

export default TabComponent;
