import React, { useState } from "react";
import TaxesDueTable from "../organisms/taxes-due-table";
import UnifiedTaxes from "../organisms/unfilled-taxes-table";
import TaxesConcluded from "../organisms/taxes-concluded";

const TaxesTabs = () => {
	const [activeTab, setActiveTab] = useState("Taxes Due");

	const renderContent = () => {
		switch (activeTab) {
			case "Taxes Due":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<p className='font-sen font-bold mb-6 text-[#202B3C]'>
							Taxes - Due
						</p>
						<TaxesDueTable />
					</div>
				);
			case "Unfilled Taxes":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<p className='font-sen font-bold mb-6 text-[#202B3C]'>
							Taxes - Unfilled
						</p>
						<UnifiedTaxes />
					</div>
				);
			case "Concluded Taxes":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<p className='font-sen font-bold mb-6 text-[#202B3C]'>
							Taxes - Concluded
						</p>
						<TaxesConcluded />
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
				<div className='flex justify-between md:px-8 mx-auto px-4'>
					<div className='flex'>
						<button
							className={`px-4 py-4 font-medium ${activeTab === "Taxes Due"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-[#94A3B8]"
								}`}
							onClick={() => setActiveTab("Taxes Due")}
						>
							Taxes Due
						</button>
						<button
							className={`px-4 py-2 font-medium ${activeTab === "Unfilled Taxes"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-[#94A3B8]"
								}`}
							onClick={() => setActiveTab("Unfilled Taxes")}
						>
							Unfilled Taxes
						</button>
						<button
							className={`px-4 py-2 font-medium ${activeTab === "Concluded Taxes"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-[#94A3B8]"
								}`}
							onClick={() => setActiveTab("Concluded Taxes")}
						>
							Concluded Taxes
						</button>
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 md:px-8 w-full'>{renderContent()}</div>
		</div>
	);
};

export default TaxesTabs;
