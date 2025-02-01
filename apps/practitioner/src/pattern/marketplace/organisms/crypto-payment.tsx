import React, { useState } from "react";
import DeleteIcon from "../atoms/delete-icon";
import DeletePaymentModal from "../molecules/delete-bank-account";

const CryptoPayment = () => {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const closeDeleteModal = () => setIsDeleteModalOpen(false);
	const openDeleteModal = () => setIsDeleteModalOpen(true);

	// Mock data for orders
	const payments = [
		{
			id: 1,
			wallet_address: "0x078395eec8b3b15888b70cf64d...",
			coin: "USDT",
			network: "TRC20",
			memo: "0123456789",
			added: "May 1, 2023",
		},
		{
			id: 2,
			wallet_address: "0x078395eec8b3b15888b70cf64d...",
			coin: "BTC",
			network: "SegWit",
			memo: "-",
			added: "May 1, 2023",
		},
		{
			id: 3,
			wallet_address: "0x078395eec8b3b15888b70cf64d...",
			coin: "USDT",
			network: "ERC20",
			memo: "0123456789",
			added: "May 1, 2023",
		},
	];

	return (
		<div className='p-6 '>
			<div className='grid xl:grid-cols-3 gap-4'>
				{payments.map((payment) => (
					<div key={payment.id} className='bg-white  w-full p-4 rounded-md'>
						<div className='bg-accent text-sm flex flex-col gap-4 p-4 rounded-md'>
							<p>
								<span className='text-grey-400'>Wallet Address: </span>
								{payment.wallet_address}
							</p>
							<p>
								<span className='text-grey-400'>Coin / Token: </span>
								{payment.coin}
							</p>
							<p>
								<span className='text-grey-400'>Network: </span>
								{payment.network}
							</p>
							<p>
								<span className='text-grey-400'>Memo: </span>
								{payment.memo}
							</p>
						</div>
						<div className='flex justify-between text-sm mt-4 w-full'>
							<p>
								<span className='text-grey-400'>Added: </span>
								{payment.added}
							</p>
							<div
								className='flex items-center gap-2 text-secondary cursor-pointer'
								onClick={openDeleteModal}
							>
								<DeleteIcon />
								<p>Delete</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<DeletePaymentModal
				isOpen={isDeleteModalOpen}
				onClose={closeDeleteModal}
			/>
		</div>
	);
};

export default CryptoPayment;
