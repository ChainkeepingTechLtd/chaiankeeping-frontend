import React, { useState } from "react";
import TaxReportPage from "../organisms/tax-report-page";
import TaxReportForm from "../organisms/tax-report-form";
import ReportTaxCard from "../organisms/report-tax-card";
import FinanceReportSummary from "../organisms/finance-report-summary";
import FinanceReportForm from "../organisms/finance-report-form";
import { DateSelect } from "../organisms/date-selector";

const TaxReports = () => {
	const [activeTab, setActiveTab] = useState("Tax Reports");
	const [selectedDate, setSelectedDate] = useState("2022");

	const renderContent = () => {
		switch (activeTab) {
			case "Tax Reports":
				return (
					<div className='grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4 w-full items-start'>
						<TaxReportPage />
						<TaxReportForm />
						<ReportTaxCard />
					</div>
				);
			case "Financial Reports":
				return (
					<div className='grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4 w-full items-start'>
						<FinanceReportSummary />
						<FinanceReportForm />
						<ReportTaxCard />
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className='h-full w-full flex flex-col'>
			<div className='fixed left-0 w-full bg-white shadow-md z-10 pt-3'>
				<div className='flex justify-between md:px-8 mx-auto px-4'>
					<div className='flex'>
						<button
							className={`px-4 py-5 font-medium ${
								activeTab === "Tax Reports"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Tax Reports")}
						>
							Tax Reports
						</button>
						<button
							className={`px-4 py-5 font-medium ${
								activeTab === "Financial Reports"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Financial Reports")}
						>
							Financial Reports
						</button>
					</div>
					<div className='flex gap-2 '>
						<div>
							<h1 className='font-bold text-2xl'>
								{selectedDate} Assessment Year
							</h1>
							<p className='text-grey-300 text-sm'>
								Jan 1, {selectedDate} - Dec 31, {selectedDate}
							</p>
						</div>
						<DateSelect value={selectedDate} setValue={setSelectedDate} />
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 md:px-8 w-full'>{renderContent()}</div>
		</div>
	);
};

export default TaxReports;
