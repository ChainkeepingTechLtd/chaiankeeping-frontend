import React from "react";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
import { Button } from "@chainkeeping/ui";

interface PaymentSuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Payment Successful'>
			<div className='p-4 flex flex-col gap-7 items-center'>
				<SuccesIcon />
				<p className='text-grey-400 text-sm text-center'>
					15 recipients have been credited and notified
				</p>
				<Button
					variant='default'
					onClick={onClose}
					className='w-full text-base'
				>
					Ok, got it
				</Button>
			</div>
		</Modal>
	);
};

export default PaymentSuccessModal;
