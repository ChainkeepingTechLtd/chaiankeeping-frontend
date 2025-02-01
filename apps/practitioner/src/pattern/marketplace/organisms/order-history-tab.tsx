import { Button } from "@chainkeeping/ui";
import { Checkbox } from "@chainkeeping/ui"; // Import the custom Checkbox
import React, { useState } from "react";
import WarningIcon from "../atoms/warning-icon";
import CheckIcon from "../atoms/check-icon";
import MessageIcon from "@/pattern/clients/atoms/message-icon";

import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
import Modal from "@/pattern/taxes/molecules/modal-compoent";

const OrderHistoryTab = () => {
	// State to track which row's checkbox is checked
	const [checkedRow, setCheckedRow] = useState<number | null>(null);

	// Handle checkbox change for a specific row
	const handleCheckboxChange = (rowId: number) => (checked: boolean) => {
		setCheckedRow(checked ? rowId : null);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Mock data for orders
	const orders = [
		{
			id: 1,
			client: "Jerome Jenkins",
			amount: "NGN 10,000",
			request: "Report signing",
			paymentMethod: "Bank Transfer",
			reference: "190867543912",
			status: "Completed",
		},
		{
			id: 2,
			client: "Ann Clare",
			amount: "NGN 80,000",
			request: "Account management",
			paymentMethod: "Bank Transfer",
			reference: "190867543912",
			status: "Cancelled",
		},
	];

	return (
		<div className='p-6 bg-white rounded-lg shadow-md'>
			<h2 className='font-medium mb-6'>My orders (2)</h2>
			<div className='flex gap-4 mb-6'>
				<span className='text-secondary flex items-center gap-2 bg-destructive-foreground px-2 py-1 text-sm rounded-md'>
					<CheckIcon /> Paid
				</span>
				<span className='text-secondary rounded-md flex gap-2 items-center bg-destructive-foreground p-2 text-sm round-md'>
					<CheckIcon /> Pending payment
				</span>
			</div>

			<div className='flex flex-col gap-4'>
				{orders.map((order) => (
					<div key={order.id} className='overflow-x-auto border p-4 rounded-md'>
						<table className='min-w-full bg-grey-100 rounded-md '>
							<thead>
								<tr className='text-left text-sm text-grey-600'>
									<th className='p-4 w-1/6'>Client</th>
									<th className='p-4 w-1/6'>Amount Paid</th>
									<th className='p-4 w-1/6'>Request</th>
									<th className='p-4 w-1/6'>Payment method</th>
									<th className='p-4 w-1/6'>
										{order.paymentMethod === "Crypto" ? "TxHash" : "Reference"}
									</th>
									<th className='p-4'>Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='px-4 pb-4'>{order.client}</td>
									<td className='px-4 pb-4'>{order.amount}</td>
									<td className='px-4 pb-4'>{order.request}</td>
									<td className='px-4 pb-4'>{order.paymentMethod}</td>
									<td className='px-4 pb-4'>
										{order.paymentMethod === "Crypto" ? (
											<span className='text-secondary underline px-2 py-1 rounded-md'>
												{order.txhash}
											</span>
										) : (
											<span className='text-grey-700'>{order.reference}</span>
										)}
									</td>
									<td className='px-4 pb-4'>
										<span
											className={`px-2 py-1 rounded-full text-xs  ${
												order.status === "Completed"
													? "bg-[#2F80ED] text-white"
													: "bg-grey-300 text-white"
											}`}
										>
											{order.status}
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Payment Confirmed'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<SuccesIcon />

					<p className='text-grey-400 text-sm text-center'>
						Client’s report has been signed
					</p>

					<Button onClick={closeModal} className='w-full text-base'>
						Ok, got it
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default OrderHistoryTab;
