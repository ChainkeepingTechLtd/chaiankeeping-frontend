import Link from "next/link";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import MoreIcon from "../atoms/more-icon";
import ViewDetailsIcon from "../atoms/view-details-icon";
import RefreshIcon from "../atoms/refresh-icon";
import CommandIcon from "../atoms/command-icon";
import { useState } from "react";
import SpinnerIcon from "../atoms/spinner-icon";
import SuccessIcon from "../atoms/success-icon";
import ImportIcon from "../atoms/import-icon";
import CmdIcon from "../atoms/cmd-icon";
import NofileIcon from "../atoms/nofile-icon";
import ApiIcon from "../atoms/api-icon";
import { useRouter } from "next/navigation";
import CoinbaseAccountIcon from "../atoms/coinbase-account-icon";
import ExchangeIcon from "../atoms/exchange-icon";
import LinkIcon2 from "../atoms/link-icon2";
import ModalComponent from "./import-file-modal-body";
import ConnectExchangeModal from "./connect-exchange-modal";

const assetStats = [
	{
		title: "Coinbase",
		added: "Feb 2, 2023",
		icon: <CoinbaseAccountIcon />,
		basis: "Total Transactions:",
		value: "0",
		volume_name: "Asset Count:",
		total: "0.00",
		rate: "",
	},
];

const syncImports = [
	{
		title: "Connect Exchange",
		last_updated: "Feb 2, 2023",
		text: "Connect and sync your exchange account via read only API.",
		connected: false,
	},
];

const importsFiles = [
	{
		title: "Imports File",
		last_updated: "Feb 2, 2023",
		text: "Upload csv/xlsx transaction history file from your exchange.",
		connected: false,
	},
];

const ExchangeTransactionCard = () => {
	const router = useRouter();
	const formatTotal = (total: string) => {
		const [whole, decimal] = total.split(".");
		return { whole, decimal };
	};
	const [isScanning, setIsScanning] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const handleClick = () => {
		setIsScanning(true);
		setIsCompleted(false);

		// Simulate the delay for the syncing process
		setTimeout(() => {
			setIsScanning(false); // Stop scanning
			setIsCompleted(true); // Mark as completed
		}, 5000); // 5 seconds
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
	const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

	const openExchangeModal = () => {
		setIsExchangeModalOpen(true);
	};

	const closeExchangeModal = () => {
		setIsExchangeModalOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleHoldings = () => {
		router.push("/assets-holdings");
	};

	return (
		<div className='grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 font-dmsans'>
			{assetStats.map((asset, idx) => {
				const { whole, decimal } = formatTotal(asset.total);

				return (
					<div key={idx} className='space-y-2 bg-primary-foreground rounded-lg p-4'>
						<div className='flex w-full justify-between'>
							<div className='flex items-center gap-2 w-full mb-3'>
								{asset.icon}
								<div>
									<p className=' font-medium'>{asset.title}</p>
									<p className='text-xs text-grey-300'>Added: {asset.added}</p>
								</div>
							</div>
							<div className='flex gap-2 items-center'>
								<div className='border py-1 px-2 border-border rounded-full text-[10px]'>
									<p>Exchange</p>
								</div>
								<MoreIcon />
							</div>
						</div>
						<div className='border-b border-[#E6E9EE]'></div>
						<div className='flex justify-between pt-4 flex-col gap-4'>
							<div className='flex items-center gap-1 justify-between w-full text-sm'>
								<p className='text-grey-600 '>{asset.basis}</p>
								<p className='font-bold flex items-center '>
									{asset.value}
									{asset.rate && (
										<Link
											href='/transactions/unresolved-transactions'
											className='font-normal text-grey-500 pl-3'
										>
											{asset.rate}
										</Link>
									)}
								</p>
							</div>
							<div className='flex items-center justify-between w-full gap-1 text-sm'>
								<p className='text-grey-600 '>{asset.volume_name}</p>
								<p className='font-bold flex items-center'>
									<span className='font-normal text-grey-300'>NGN </span>{" "}
									{asset.total}{" "}
									<span
										className='pl-2 cursor-pointer'
										onClick={handleHoldings}
									>
										<ViewDetailsIcon />
									</span>
								</p>
							</div>
						</div>
					</div>
				);
			})}

			{syncImports.map((asset, idx) => {
				return (
					<div key={idx} className='space-y-2 bg-primary-foreground rounded-lg p-4 flex flex-col justify-between h-full'>
						{/* Top Section */}
						<div>
							<div className='flex w-full justify-between gap-2 items-start'>
								<div className='flex items-start gap-2 w-full mb-3'>
									{asset.connected ? (
										<div
											onClick={handleClick}
											className={` ${isCompleted
													? "bg-[#27AE60]" // Green background for success
													: isScanning
														? "bg-[#F9CC59]" // Yellow background during scanning
														: "bg-accent hover:bg-destructive"
												} flex cursor-pointer hover:bg-destructive transition-all ease-in-out duration-300 rounded-full min-h-11 min-w-11 items-center justify-center group`}
										>
											{isCompleted ? (
												<SuccessIcon />
											) : isScanning ? (
												<SpinnerIcon className='animate-spin text-white' />
											) : (
												<RefreshIcon className='transform transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:text-white' />
											)}
										</div>
									) : (
										<div
											onClick={openExchangeModal}
											className='bg-accent flex cursor-pointer hover:bg-destructive transition-all ease-in-out duration-300 rounded-full min-h-11 min-w-11 items-center justify-center group'
										>
											<LinkIcon2 className='transform transition-transform duration-300 ease-in-out group-hover:text-white' />
										</div>
									)}

									<div>
										<p className='font-medium'>
											{isCompleted
												? "Sync Completed"
												: isScanning
													? "Syncing..."
													: asset.title}
										</p>
										<p className='text-sm text-grey-500'>
											{isCompleted
												? "103 transactions added, your transactions are up to date"
												: isScanning
													? "Fetching your transaction, might take a while, We will notify you on completion" // Text during syncing
													: asset.text}
										</p>
									</div>
								</div>
								<div className='flex gap-2 bg-accent h-9 w-9 rounded-md items-center justify-center'>
									<ExchangeIcon />
								</div>
							</div>
							<div className='border-b border-[#E6E9EE]'></div>
						</div>

						{/* Bottom Section */}
						<div className='flex justify-between pt-4 flex-col gap-4'>
							<div className='flex items-center justify-between w-full gap-1 text-sm'>
								<p className='text-grey-600 '>
									{asset.connected ? (
										<div className='bg-[#E4FAED] flex gap-1 items-center px-2 py-1 rounded-md text-[#27AE60]'>
											<ApiIcon />
											<p>API connected</p>
										</div>
									) : (
										<div className='bg-destructive-foreground flex gap-1 items-center px-2 py-1 rounded-md text-destructive'>
											<ApiIcon className='text-destructive' />
											<p>Not Connected</p>
										</div>
									)}
								</p>
								<p className='flex items-center text-grey-300'>
									<span className='font-normal text-grey-300'>
										Last Updated:
									</span>{" "}
									{asset.last_updated}{" "}
								</p>
							</div>
						</div>
					</div>
				);
			})}

			{importsFiles.map((asset, idx) => {
				return (
					<div key={idx} className='space-y-2 bg-primary-foreground rounded-lg p-4 flex flex-col justify-between h-full'>
						{/* Top Section */}
						<div>
							<div className='flex w-full justify-between gap-2 items-start'>
								<div className='flex items-start gap-2 w-full mb-3'>
									<div
										onClick={openModal}
										className='bg-accent flex cursor-pointer hover:bg-destructive transition-all ease-in-out duration-300 rounded-full min-h-11 min-w-11 items-center justify-center group'
									>
										<ImportIcon className='transform transition-transform duration-300 ease-in-out group-hover:text-white' />
									</div>

									<div>
										<p className='font-medium'>{asset.title}</p>
										<p className='text-sm text-grey-500'>{asset.text}</p>
									</div>
								</div>
								<div
									onClick={openModal}
									className='flex gap-2 bg-accent h-9 w-9 rounded-md items-center justify-center'
								>
									<CmdIcon />
								</div>
							</div>
							<div className='border-b border-[#E6E9EE]'></div>
						</div>

						{/* Bottom Section */}
						<div className='flex justify-between pt-4 flex-col gap-4'>
							<div className='flex items-center justify-between w-full gap-1 text-sm'>
								<p className='text-grey-600 '>
									{asset.connected ? (
										<div className='bg-[#E4FAED] px-2 py-1 rounded-md text-[#27AE60]'>
											<p>File Added</p>
										</div>
									) : (
										<div className='bg-destructive-foreground flex gap-1 items-center px-2 py-1 rounded-md text-secondary'>
											<NofileIcon />
											<p>No file</p>
										</div>
									)}
								</p>
								<p className='flex items-center text-grey-300'>
									<span className='font-normal text-grey-300'>
										Last Updated:
									</span>{" "}
									{asset.last_updated}{" "}
								</p>
							</div>
						</div>
					</div>
				);
			})}
			<ModalComponent isOpen={isModalOpen} onClose={closeModal} />
			<ConnectExchangeModal
				isOpen={isExchangeModalOpen}
				onClose={closeExchangeModal}
			/>
		</div>
	);
};

export default ExchangeTransactionCard;
