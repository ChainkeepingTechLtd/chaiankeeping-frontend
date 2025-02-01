import React from "react";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import { Button } from "@chainkeeping/ui";

interface PaymentSuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const DeletePaymentModal: React.FC<PaymentSuccessModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Delete bank'>
			<div className='p-4 flex flex-col gap-7 items-center'>
				<p className='text-grey-400 text-sm text-center'>
					Bank account{" "}
					<span className='text-accent-foreground'>
						[Bank_name][Account_Number]
					</span>{" "}
					will be removed. Are you sure about this?
				</p>
				<Button
					variant='destructive'
					onClick={onClose}
					className='w-full text-base'
				>
					Delete bank account
				</Button>
			</div>
		</Modal>
	);
};

export default DeletePaymentModal;
