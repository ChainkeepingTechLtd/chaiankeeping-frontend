import CloseModalIcon from "@/pattern/taxes/atoms/close-modal-icon";
import React, { useEffect, useState } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string; // Add a title prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
	const [show, setShow] = useState(false);

	// Trigger the show animation when the modal is open
	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				setShow(true);
			}, 300);
		} else {
			setTimeout(() => {
				setShow(false);
			}, 300);
		}
	}, [isOpen]);

	if (!show) return null;

	return (
		<div
			className={`fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 transition-all ease-in-out duration-300 ${
				isOpen ? "opacity-100" : "opacity-0"
			}`}
			onClick={onClose}
		>
			<div
				className={`bg-white rounded-lg w-11/12 sm:w-1/2 md:w-[506px] shadow-lg transform transition-all duration-300 ease-in-out ${
					isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex justify-between w-full items-center bg-[#F5F8FA] p-4 overflow-hidden rounded-t-lg'>
					<p className='font-bold'>{title || "Default Title"}</p>{" "}
					<button
						className=' text-xl text-gray-500 hover:text-gray-700'
						onClick={onClose}
					>
						<CloseModalIcon />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
