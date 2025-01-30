import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
	Button,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import WalletSearch from "../molecules/wallet-search";
import MetamaskIcon from "../atoms/metamask-icon";
import WalletConnectIcon from "../atoms/walletconnect-icon";
import TwtWalletIcon from "../atoms/twt-large-icon";
import BCWIcon from "../atoms/bcw-icon";
import CoinbaseIcon from "../atoms/coinbase-icon";
import CloseIcon from "../atoms/close-icon";
import InfoIcon from "../atoms/info-icon";
import FileNameIcon from "../atoms/file-name-icon";
import { DownloadIcon } from "lucide-react";
import Downloadicon2 from "../atoms/download-icon2";
import DocIcon from "../atoms/doc-icon";
import InactiveStep from "../atoms/inactive-step";
import ActiveStep from "../atoms/active-step";
import FinishedStep from "../atoms/finished-step"; // Assuming a FinishedStep component exists

const PaymentSection = () => {
	const router = useRouter();
	const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	const [connectedWalletAddress, setConnectedWalletAddress] = useState<
		string | null
	>(null);
	const [activeStep, setActiveStep] = useState(1); // 1: Connect Wallet, 2: Upload File, 3: Preview & Approve

	const handleGoBack = () => router.back();

	const handleConnect = async () => {
		if (selectedWallet === "Metamask" && (window as any).ethereum) {
			try {
				const accounts = await (window as any).ethereum.request({
					method: "eth_requestAccounts",
				});
				setConnectedWalletAddress(accounts[0]);
				setIsConnected(true);
				setActiveStep(2);
			} catch (error) {
				console.error("Error connecting to Metamask:", error);
			}
		} else {
			alert("Wallet connection not yet implemented or wallet not installed.");
		}
	};

	const handlePreview = () => {
		router.push("/bulk-payments/preview-and-approve");
	};

	const renderStepIcon = (step: number) => {
		if (step < activeStep) return <FinishedStep />;
		if (step === activeStep) return <ActiveStep />;
		return <InactiveStep />;
	};

	const getStepTextClass = (step: number) => {
		if (step < activeStep) return "text-[#202B3C] "; // Finished state
		if (step === activeStep) return "text-[#202B3C] font-medium"; // Active state
		return "text-grey-300"; // Inactive state
	};

	const renderUploadFile = () => (
		<div>
			<h2 className='text-xl font-semibold mb-2'>Upload bulk payment file</h2>
			<p className='text-grey-600 text-sm mb-4 max-w-md'>
				Download our custom excel template, if you don’t already have it. File
				upload may take a few minutes.
			</p>
			<div className='flex flex-col items-center bg-white max-w-md p-6 rounded-md'>
				<div className='flex gap-1 mb-3 items-start p-2 bg-[#E9F2FE] rounded-md'>
					<InfoIcon />
					<p className='text-sm'>
						The wallet address, amount, and currency fields are mandatory.
					</p>
				</div>
				<div className='flex w-full justify-between items-center bg-[#F8F9FA] border-[#E6E9EE] border border-dashed p-2 rounded-md'>
					<div className='flex items-center gap-1'>
						<FileNameIcon />
						<p className='text-sm'>chainkeeping_bulk_payment.xlsx</p>
					</div>
					<Downloadicon2 />
				</div>
				<div className='my-4 p-4 flex w-full bg-[#F8F9FA] rounded-md hover:bg-transparent transition-all ease-in-out duration-300'>
					<div className='w-full gap-1 border border-dashed rounded-md border-[#CBD5E1] flex items-center justify-center flex-col h-[120px] transition-all ease-in-out duration-300 hover:bg-[#FDF3F3] hover:border-[#D82E2E]'>
						<DocIcon />
						<h6 className='text-xs font-bold'>Drag & drop file or select</h6>
						<p className='text-[10px] text-grey-400'>
							Supports .csv, .xls, .xlsx files up to 20MB
						</p>
					</div>
				</div>
				<div className='space-y-2 w-full'>
					<label htmlFor='payment-method' className='text-sm'>
						Payment Currency
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Select a currency' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='usdt'>USDT</SelectItem>
							<SelectItem value='usdc'>USDC</SelectItem>
							<SelectItem value='ethereum'>Ethereum</SelectItem>
							<SelectItem value='bitcoin'>Bitcoin</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<Button
					variant='default'
					size='md'
					className='w-full text-base mt-4'
					onClick={handlePreview} // Move to the next step
				>
					Preview & Pay
				</Button>
			</div>
		</div>
	);

	return (
		<div className='md:px-8 flex h-full gap-4 justify-between pt-10 max-sm:px-4 max-sm:flex-col'>
			{/* Steps Section */}
			<div className='flex flex-col  max-sm:w-full relative'>
				{/* Step 1 */}
				<div className='font-medium flex  gap-2 relative'>
					<div className='flex flex-col '>
						{renderStepIcon(1)}
						{/* Vertical Line for Step 1 */}
						<div className='border-l my-1 border-[#CBD5E1] h-6 mx-auto' />
					</div>
					<span className={getStepTextClass(1)}>Connect wallet</span>
				</div>

				{/* Step 2 */}
				<div className='font-medium flex  gap-2 relative'>
					<div className='flex flex-col items-center'>
						{renderStepIcon(2)}
						{/* Vertical Line for Step 2 */}
						<div className='border-l my-1 border-[#CBD5E1] h-6 mx-auto' />
					</div>
					<span className={getStepTextClass(2)}>Upload bulk payment file</span>
				</div>

				{/* Step 3 */}
				<div className='font-medium flex items-center gap-2 relative'>
					<div className='flex flex-col items-center'>
						{renderStepIcon(3)}
						{/* No vertical line for the last step */}
					</div>
					<span className={getStepTextClass(3)}>Preview & approve payment</span>
				</div>
			</div>

			{/* Main Content */}
			<div>
				{activeStep === 1 && (
					<div>
						<h2 className='text-xl font-semibold mb-2'>Connect wallet</h2>
						<p className='text-gray-500 text-sm mb-4 max-w-md'>
							You’ll need to connect a non-custodial wallet to continue. Select
							your wallet provider below or search.
						</p>
						<div className='flex flex-col items-center bg-white p-6 rounded-md'>
							<WalletSearch value='search' placeholder='Search...' />
							<div className='flex flex-col space-y-4 w-full mt-6'>
								{[
									{ name: "Metamask", icon: <MetamaskIcon /> },
									{ name: "TrustWallet", icon: <TwtWalletIcon /> },
									{ name: "WalletConnect", icon: <WalletConnectIcon /> },
									{ name: "Binance Chain Wallet", icon: <BCWIcon /> },
									{ name: "Coinbase Wallet", icon: <CoinbaseIcon /> },
								].map((wallet) => (
									<Button
										key={wallet.name}
										variant={
											selectedWallet === wallet.name
												? "default"
												: "primaryOutline"
										}
										className={`flex w-full text-[#01092C] items-center justify-between px-4 py-3 ${
											selectedWallet === wallet.name ? "bg-gray-100" : ""
										}`}
										onClick={() => setSelectedWallet(wallet.name)}
									>
										{wallet.name}
										{wallet.icon}
									</Button>
								))}
							</div>
							<Button
								variant='default'
								size='md'
								className='w-full mt-6 text-base'
								disabled={!selectedWallet}
								onClick={handleConnect}
							>
								{isConnected ? "Disconnect" : "Connect"}
							</Button>
						</div>
					</div>
				)}
				{activeStep === 2 && renderUploadFile()}
			</div>

			{/* Close Button */}
			<div className='cursor-pointer' onClick={handleGoBack}>
				<CloseIcon />
			</div>
		</div>
	);
};

export default PaymentSection;
