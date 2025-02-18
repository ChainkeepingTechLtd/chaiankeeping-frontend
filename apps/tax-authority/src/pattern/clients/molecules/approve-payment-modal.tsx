import React from "react";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import { Button } from "@chainkeeping/ui";

interface ApprovePaymentModalProps {
	isOpen: boolean;
	onClose: () => void;
	onApprove: () => void;
	loading: boolean;
}

const ApprovePaymentModal: React.FC<ApprovePaymentModalProps> = ({
	isOpen,
	onClose,
	onApprove,
	loading,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Approve Payment'>
			<div className='p-4 flex flex-col gap-7 items-center'>
				<p className='text-grey-400 text-sm text-center'>
					You are about to approve a bulk payment. This action cannot be undone.
				</p>
				<Button
					variant='default'
					onClick={onApprove}
					className='w-full text-base'
					disabled={loading}
				>
					{loading ? "Processing..." : "Approve 350 USDT"}
				</Button>
				<Button variant='link' onClick={onClose} className='w-full text-base'>
					Cancel
				</Button>
			</div>
		</Modal>
	);
};

export default ApprovePaymentModal;
