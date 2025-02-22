import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AssetsCard from "../organisms/assets-card";
import AccountsAndTaxes from "../organisms/accounts-and-taxes";
import PortfolioCard from "../organisms/portfolio-card";
import ConnectToPractioner from "../organisms/contect-to-practitioner";
import PlanCard from "../organisms/plan-card";
import TransactionList from "../organisms/transactions";
import NoAccountIcon from "../atoms/no-account-icon";
import { Button } from "@chainkeeping/ui";

const AssetsSection = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const { push } = useRouter();

	const handleAddAccount = () => {
		push("/add-account");
	};

	return (
		<div className='h-full'>
			{hasAccount ? (
				<div className='md:px-8 flex h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col'>
					<div className='flex-col flex gap-4 w-full'>
						<AssetsCard />
						<AccountsAndTaxes />
						<TransactionList />
					</div>
					<div className='w-auto flex flex-col gap-4'>
						<PortfolioCard />
						<ConnectToPractioner />
						<PlanCard />
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center items-center mt-40'>
					<NoAccountIcon />
					<p className='text-sm font-bold text-[#202B3C] mt-6'>
						No account yet
					</p>
					<p className='text-sm text-grey-400 pt-1 pb-8 sm:max-w-[420px] text-center'>
						Account transaction data will show up here when you add an exchange,
						wallet or make imports.
					</p>
					<Button
						variant='default'
						size='md'
						className='text-base'
						onClick={handleAddAccount}
					>
						Add new account
					</Button>
				</div>
			)}
		</div>
	);
};

export default AssetsSection;
