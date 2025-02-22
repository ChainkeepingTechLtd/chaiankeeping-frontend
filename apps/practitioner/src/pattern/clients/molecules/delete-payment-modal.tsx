import React from "react";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
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
		<Modal isOpen={isOpen} onClose={onClose} title='Delete bulk payment entry'>
			<div className='p-4 flex flex-col gap-7 items-center'>
				<p className='text-grey-400 text-sm text-center'>
					You are about to delete this entry from your bulk payment. Are you
					sure about this?
				</p>
				<Button
					variant='destructive'
					onClick={onClose}
					className='w-full text-base'
				>
					Delete Entry
				</Button>
			</div>
		</Modal>
	);
};

export default DeletePaymentModal;
