import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@chainkeeping/ui";
import MarketplaceWidget from "../organisms/marketplace-widget";

const MarketplaceTemplate = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const { push } = useRouter();

	const handleAddAccount = () => {
		push("/add-account");
	};

	return (
		<div className='h-full'>
			{hasAccount ? (
				<div className='md:px-8 flex w-full h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col '>
					<div className='w-full  gap-4  max-sm:w-full'>
						<MarketplaceWidget />
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center items-center mt-40'>
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

export default MarketplaceTemplate;
