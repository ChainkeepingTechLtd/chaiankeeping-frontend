import AccountIcon from "../atoms/account-icon";
import WarningIcon from "../atoms/warning-icon";
import TaxesIcon from "../atoms/taxes-icon";
import { Button } from "@chainkeeping/ui";

const assetStats = [
	{
		title: "Accounts",
		icon: <AccountIcon />,
		warning: "(5)",
		warning_icon: <WarningIcon />,
		total: "40,453,456.26",
		connected_accounts: 11,
		total_transactions: 7679,
	},
];

const taxes = [
	{
		title: "Taxes",
		icon: <TaxesIcon />,
		reports: 2,
		concluded_taxes: 3,
		taxes_due: 5,
	},
];

const AccountsAndTaxes = () => {
	return (
		<div className='grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1 font-dmsans'>
			{assetStats.map((asset, idx) => {
				return (
					<div key={idx} className='space-y-2 bg-white rounded-lg p-4'>
						<div className='flex items-center gap-2 w-full mb-3'>
							{asset.icon}
							<p className='text-[#202B3C] font-medium'>{asset.title}</p>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>
						<div className='flex justify-between py-4'>
							<div className='flex py-2 px-3 min-h-[42px] sm:items-center bg-[#FEF6E1] w-full rounded-lg  gap-2 cursor-pointer'>
								{asset.warning_icon}
								<p className='text-[#202B3C] font-bold'>
									{asset.warning}{" "}
									<span className='font-normal'>
										Unresolved transactions, click to resolve{" "}
									</span>
								</p>
							</div>
						</div>

						<div className='justify-between items-end flex pt-3'>
							<p className='text-grey-400 text-sm'>
								Connected accounts{" "}
								<span className='font-bold text-[#202B3C]'>
									({asset.connected_accounts})
								</span>
							</p>
							<p className='text-grey-400 text-sm'>
								Total Transactions{" "}
								<span className='font-bold text-[#202B3C]'>
									({asset.total_transactions})
								</span>
							</p>
						</div>
					</div>
				);
			})}
			{taxes.map((asset, idx) => {
				return (
					<div key={idx} className='space-y-2 bg-[#FFFFFF] rounded-lg p-4'>
						<div className='flex items-center gap-2 w-full mb-3'>
							{asset.icon}
							<p className='text-[#202B3C] font-medium'>{asset.title}</p>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>
						<div className='flex justify-between py-5'>
							<p className='text-grey-400 text-sm'>
								Reports{" "}
								<span className='font-bold text-[#202B3C]'>
									({asset.reports})
								</span>
							</p>
							<p className='text-grey-400 text-sm'>
								Concluded Taxes{" "}
								<span className='font-bold text-[#202B3C]'>
									({asset.concluded_taxes})
								</span>
							</p>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>

						<div className='items-center justify-between flex pt-3'>
							<p className='text-[#202B3C] text-sm'>
								Taxes Due{" "}
								<span className='font-bold '>({asset.taxes_due})</span>
							</p>
							<Button variant='primaryOutline' size='sm'>
								Process
							</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AccountsAndTaxes;
