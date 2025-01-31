import { useState } from "react";
import TotalAssetsIcon from "../atoms/total-assets-icon";
import UnrealizeAssetsIcon from "../atoms/unrealized-assets-icons";

const assetStats = [
	{
		id: 1,
		title: "Total Assets",
		icon: <TotalAssetsIcon />,
		basis: "(Cost Basis)",
		total: "40,453,456.26",
		rate: "",
	},
	{
		id: 2,
		title: "Total Assets",
		icon: <TotalAssetsIcon />,
		basis: "(Market Value)",
		total: "36,098,765.67",
		rate: "",
	},
	{
		id: 3,
		title: "Unrealized Gain / Loss",
		icon: <UnrealizeAssetsIcon />,
		basis: "",
		total: "8,543,087.43",
		rate: "+5%",
	},
];

const AssetsCard = () => {
	const formatTotal = (total: string) => {
		const [whole, decimal] = total.split(".");
		return { whole, decimal };
	};

	return (
		<div className='grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 font-dmsans'>
			{assetStats.map((asset) => {
				const { whole, decimal } = formatTotal(asset.total);

				const isPositiveRate = asset.rate.startsWith("+");
				const isNegativeRate = asset.rate.startsWith("-");
				const totalColor = isPositiveRate
					? "#27AE60"
					: isNegativeRate
						? "#D82E2E"
						: "#202B3C";

				const decimalColor = isPositiveRate
					? "#27AE60"
					: isNegativeRate
						? "#D82E2E"
						: "#94A3B8";

				return (
					<div className='space-y-2 bg-[#FFFFFF] rounded-lg p-4' key={asset.id}>
						<div className='flex items-center gap-2 w-full mb-3'>
							{asset.icon}
							<p className='text-grey-400 text-sm'>{asset.title}</p>
							<p className='text-[#202B3C]'>{asset.basis}</p>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>
						<div className='flex justify-between pt-7'>
							<div className='flex items-center gap-1'>
								<p className='text-grey-300 text-base'>NGN</p>
								<p className='font-bold' style={{ color: totalColor }}>
									{whole}
									{decimal && (
										<span
											className='text-[10px] font-normal'
											style={{ color: decimalColor }}
										>
											.{decimal}
										</span>
									)}
								</p>
							</div>
							<p style={{ color: totalColor }}>{asset.rate}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AssetsCard;
