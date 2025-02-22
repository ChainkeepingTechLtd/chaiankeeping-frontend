import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@chainkeeping/ui";
import { exchangeData } from "../molecules/transaction-data";
import ExchangeTable from "../organisms/exchange-table";
import ExchangeTransactionCard from "../organisms/exchange-transaction-card";

const ExchangeTransactionSection = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const router = useRouter();

	const handleAddAccount = () => {
		router.push("/add-account");
	};

	return (
		<div className='h-full flex w-full'>
			{hasAccount ? (
				<div className='md:pr-8 flex w-full h-full gap-4 pt-24 max-sm:px-4 max-sm:flex-col'>
					<div className='flex-col flex gap-4 w-full'>
						<ExchangeTransactionCard />
						<ExchangeTable data={exchangeData} />
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center w-full items-center mt-40'>
					{/* <NoAccountIcon /> */}
					<span>No Account Icon</span>
					<p className='text-sm font-bold text-accent-foreground mt-6'>
						No transaction yet
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
						Add new transaction
					</Button>
				</div>
			)}
		</div>
	);
};

export default ExchangeTransactionSection;
