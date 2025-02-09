import React from "react";
import NavListItem from "../molecules/nav-list-item";
import CryptoPlatformsIcon from "../atoms/nav-icons/crypto-platforms-icon";
import AccountingSoftwaresIcon from "../atoms/nav-icons/accounting-softwares-icon";
import { INTEGRATIONS_ROUTES } from "@/lib/routes";

const IntegrationsNavContent = () => {
	return (
		<div className='bg-white lg:w-[1100px]  h-[164px] flex items-center justify-center p-9  data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 transition-all'>
			<ul className='bg-inherit w-full h-full grid grid-cols-3 gap-12 mx-auto'>
				{/* Crypto platforms */}
				<li className='w-full flex items-center justify-center'>
					<NavListItem
						icon={<CryptoPlatformsIcon />}
						href={INTEGRATIONS_ROUTES.cryptoPlatforms}
						title='Crypto platforms'
						description='Connect your Wallets, Exchanges, DeFi platforms.'
					/>
				</li>
				{/* Accounting softwares */}
				<li className='w-full flex items-center justify-center'>
					<NavListItem
						icon={<AccountingSoftwaresIcon />}
						href={INTEGRATIONS_ROUTES.accountingSoftwares}
						title='Accounting softwares'
						description='Connect (QuickBooks, Xero, FreshBooks, Sage, ZohoBooks).'
					/>
				</li>
			</ul>
		</div>
	);
};

export default IntegrationsNavContent;
