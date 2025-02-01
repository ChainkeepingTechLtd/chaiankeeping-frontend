import React, { useState } from "react";
import DeleteIcon from "../atoms/delete-icon";
import DeletePaymentModal from "@/pattern/clients/molecules/delete-payment-modal";

const CBDCPayment = () => {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const closeDeleteModal = () => setIsDeleteModalOpen(false);
	const openDeleteModal = () => setIsDeleteModalOpen(true);

	// Mock data for orders
	const payments = [
		{
			id: 1,
			cbdc: "eNaira",
			wallet_id: "1234567",
			added: "May 1, 2023",
		},
		{
			id: 2,
			cbdc: "eNaira",
			wallet_id: "1234567",
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
								<span className='text-grey-400'>CBDC: </span>
								{payment.cbdc}
							</p>
							<p>
								<span className='text-grey-400'>Wallet ID: </span>
								{payment.wallet_id}
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

export default CBDCPayment;
