import Modal from "@/pattern/taxes/molecules/modal-compoent";
import { Button, Input } from "@chainkeeping/ui";
import React, { useState } from "react";
import AddIcon from "../atoms/add-icon";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";

const AddPractitionerWidget = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isInviteSentModalOpen, setIsInviteSentModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const openInviteSentModal = () => {
		setIsModalOpen(false); // Close the current modal
		setIsInviteSentModalOpen(true); // Open the confirmation modal
	};

	const closeInviteSentModal = () => {
		setIsInviteSentModalOpen(false);
	};

	return (
		<div className='flex w-full my-4 justify-end'>
			<Button
				variant='secondaryOutline'
				size='md'
				onClick={openModal}
				className='text-base flex gap-1'
			>
				<AddIcon />
				Add Practitioner
			</Button>

			{/* Main Modal */}
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title='Revoke Practitioner Access'
			>
				<div className='p-4 flex flex-col gap-4'>
					<div className='space-y-2 my-2'>
						<label htmlFor='text' className='text-sm'>
							Email address or ID
						</label>
						<Input
							id='text'
							type='text'
							placeholder='enter email address or chainkeeping ID'
						/>
					</div>
					<Button
						variant='default'
						onClick={openInviteSentModal} // Open confirmation modal on click
						className='w-full text-base'
					>
						Send invite
					</Button>
				</div>
			</Modal>

			{/* Confirmation Modal */}
			<Modal
				isOpen={isInviteSentModalOpen}
				onClose={closeInviteSentModal}
				title='Invite Sent'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<SuccesIcon />
					<p className='text-grey-400 text-sm text-center'>
						Your reports have beed signed
					</p>
					<Button
						variant='default'
						onClick={closeInviteSentModal}
						className='w-full text-base'
					>
						Go to reports
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default AddPractitionerWidget;
