import React, { useState } from "react";
import MainMenuIcon from "../atoms/menu-icon";
import { useRouter } from "next/navigation";
import BankAccount from "../organisms/bank-accounts";
import CryptoPayment from "../organisms/crypto-payment";
import CBDCPayment from "../organisms/cbdc-payment";
import { Button } from "@chainkeeping/ui";

const PaymentInfoTabs = () => {
	const [activeTab, setActiveTab] = useState("Bank accounts");
	const router = useRouter();
	const handleGoBack = () => {
		router.back();
	};

	const renderContent = () => {
		switch (activeTab) {
			case "Bank accounts":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<BankAccount />
					</div>
				);
			case "Crypto":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<CryptoPayment />
					</div>
				);

			case "CBDC":
				return (
					<div className=' gap-4 w-full items-start mt-4'>
						<CBDCPayment />
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
				<div className='flex flex-col justify-between md:px-8 mx-auto px-4'>
					<div className='flex justify-between items-center'>
						<div
							className='flex items-center gap-2 cursor-pointer'
							onClick={handleGoBack}
						>
							<MainMenuIcon />
							<h6 className='font-bold fomt-sen'>Payment Information</h6>
						</div>
						<Button variant='secondary' size='md' className='text-base gap-2'>
							New payment info
						</Button>
					</div>

					<div className='flex'>
						<button
							className={`px-4 py-4 font-medium ${
								activeTab === "Bank accounts"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Bank accounts")}
						>
							Bank Accounts
						</button>
						<button
							className={`px-4 py-2 font-medium ${
								activeTab === "Crypto"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("Crypto")}
						>
							Crypto
						</button>
						<button
							className={`px-4 py-2 font-medium ${
								activeTab === "CBDC"
									? "border-b-2 border-[#D82E2E] text-[#202B3C] font-medium"
									: "text-grey-300"
							}`}
							onClick={() => setActiveTab("CBDC")}
						>
							CBDC
						</button>
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<div className='pt-24 md:px-8 w-full'>{renderContent()}</div>
		</div>
	);
};

export default PaymentInfoTabs;
