import { Button } from "@chainkeeping/ui";
import React, { useState } from "react";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import DeleteIcon from "../atoms/delete-icon";
import DeletePaymentModal from "@/pattern/clients/molecules/delete-payment-modal";

const BankAccount = () => {
	// State to track which row's checkbox is checked
	const [checkedRow, setCheckedRow] = useState<number | null>(null);

	// Handle checkbox change for a specific row
	const handleCheckboxChange = (rowId: number) => (checked: boolean) => {
		setCheckedRow(checked ? rowId : null);
	};

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const closeDeleteModal = () => setIsDeleteModalOpen(false);
	const openDeleteModal = () => setIsDeleteModalOpen(true);

	// Mock data for orders
	const payments = [
		{
			id: 1,
			bank_name: "GTCO",
			number: "00000000000",
			account_name: "Convexity LLC",
			sort_code: "GTBLAG",
			added: "May 1, 2023",
		},
		{
			id: 2,
			bank_name: "First Bank",
			number: "00000000000",
			account_name: "Convexity LLC",
			sort_code: "FBNLAG",
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
								<span className='text-grey-400'>Bank Name: </span>
								{payment.bank_name}
							</p>
							<p>
								<span className='text-grey-400'>Account Number: </span>
								{payment.number}
							</p>
							<p>
								<span className='text-grey-400'>Account Name: </span>
								{payment.account_name}
							</p>
							<p>
								<span className='text-grey-400'>Sort Code: </span>
								{payment.sort_code}
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

export default BankAccount;
