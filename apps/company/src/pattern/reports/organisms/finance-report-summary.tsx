import React from "react";
import FinanceSummaryIcon from "../atoms/finance-summary-icon";
import TaxReportIcon from "../atoms/tax-report-icon";

const FinanceReportSummary: React.FC = () => {
	const taxData = [
		{ label: "Capital Gains", value: "36,098,765.67" },
		{ label: "Total Expenses", value: "3,609,876.67" },
		// { label: "Personal Income Tax Liability", value: "3,609,876.67" },
		{ label: "Taxable Income", value: "30,000,000.00" },
	];

	const otherIncome = [
		{ label: "Trading P&L", value: "****" },
		{ label: "Mining Income", value: "****" },
		// { label: "Personal Income Tax Liability", value: "3,609,876.67" },
		{ label: "Staking Yields", value: "****" },
		{ label: "Inheritance", value: "****" },
		{ label: "Inheritance", value: "****" },
	];
	return (
		<div className='flex flex-col gap-4'>
			<div className='p-4 bg-white rounded-[8px] text-[#202B3C]'>
				<div>
					<div className='flex items-center gap-2 border-b pb-2'>
						<FinanceSummaryIcon />
						<h2 className='font-semibold'>Finance report summary</h2>
					</div>
					<ul className='space-y-3'>
						{taxData.map((item, index) => {
							// Split the value into integer and decimal parts
							const [integerPart, decimalPart] = item.value.split(".");
							return (
								<li
									key={index}
									className='flex justify-between border-b pb-3 pt-1 mt-6'
								>
									<span className='text-sm text-[#4F627D]'>{item.label}</span>
									<span className='font-bold text-sm'>
										<span className='text-grey-300 pr-1 font-normal'>NGN</span>
										<span>{integerPart}.</span>
										<span className='text-grey-300 text-[10px] font-normal'>
											{decimalPart}
										</span>
									</span>
								</li>
							);
						})}
					</ul>
					<p className='text-xs mt-6'>
						<span className='text-[#D82E2E]'>**</span> This is a high-level
						summary of your tax report. Download your tax report to see more
						detailed information.
					</p>
				</div>
			</div>
			<div className='p-4 bg-white rounded-[8px] text-[#202B3C]'>
				<div>
					<div className='flex items-center gap-2 border-b pb-2'>
						<TaxReportIcon />
						<h2 className='font-semibold'>Finance report summary</h2>
					</div>
					<ul className='space-y-3'>
						{otherIncome.map((item, index) => {
							// Split the value into integer and decimal parts
							const [integerPart, decimalPart] = item.value.split(".");
							return (
								<li
									key={index}
									className='flex justify-between border-b pb-3 pt-1 mt-6'
								>
									<span className='text-sm text-[#4F627D]'>{item.label}</span>
									<span className='font-bold text-sm'>
										<span className='text-grey-300 pr-1 font-normal'>NGN</span>
										<span>{integerPart}</span>
										<span className='text-grey-300 text-[10px] font-normal'>
											{decimalPart}
										</span>
									</span>
								</li>
							);
						})}
					</ul>
					<p className='text-xs mt-6'>
						<span className='text-[#D82E2E]'>**</span> Download Financial report
						to see actual values
					</p>
				</div>
			</div>
		</div>
	);
};

export default FinanceReportSummary;
