import React from "react";

import SuccesIcon from "@/pattern/taxes/atoms/success-icon";
import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@chainkeeping/ui";
import EditModalCOmponent from "@/pattern/taxes/molecules/edit-modal-component";

interface PaymentSuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const EditPaymentModal: React.FC<PaymentSuccessModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<EditModalCOmponent
			isOpen={isOpen}
			onClose={onClose}
			title='Edit bulk payment entry'
		>
			<div className='p-4 flex flex-col gap-4 items-center'>
				<div className='space-y-2 flex flex-col w-full'>
					<label htmlFor='email' className='text-sm'>
						Wallet Address
					</label>
					<Input
						type='text'
						placeholder='0x078395eec8b3b15888b70cf64db2fadc12b6d860'
					/>
				</div>
				<div className='flex w-full gap-3'>
					<div className='space-y-2 flex flex-col w-full'>
						<label htmlFor='email' className='text-sm'>
							Amount
						</label>
						<Input type='text' placeholder='100' />
					</div>
					<div className='space-y-2 flex flex-col w-full'>
						<label htmlFor='country' className='text-sm'>
							Currency
						</label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder='Usdt' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='nigeria'>USDT</SelectItem>
								<SelectItem value='united-state'>USDC</SelectItem>
								<SelectItem value='united-kingdom'>BTC</SelectItem>
								<SelectItem value='canada'>ETH</SelectItem>
								<SelectItem value='australia'>BNB</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className='flex w-full gap-3'>
					<div className='space-y-2 flex flex-col w-full'>
						<label htmlFor='email' className='text-sm'>
							Recipient
						</label>
						<Input type='text' placeholder='Nick Hunterman' />
					</div>
					<div className='space-y-2 flex flex-col w-full'>
						<label htmlFor='email' className='text-sm'>
							Recipient Email
						</label>
						<Input type='text' placeholder='example@gmail.com' />
					</div>
				</div>
				<div className='space-y-2 flex w-full flex-col'>
					<label htmlFor='inquiry' className='text-sm'>
						Payment Description
					</label>
					<Textarea
						id='inquiry'
						placeholder='Your text here...'
						className='min-h-[96px]'
					/>
				</div>
				<Button
					variant='default'
					onClick={onClose}
					className='w-full text-base'
				>
					Save changes
				</Button>
				<Button variant='link' onClick={onClose} className='w-full text-base'>
					Cancel
				</Button>
			</div>
		</EditModalCOmponent>
	);
};

export default EditPaymentModal;
