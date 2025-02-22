import { FC } from "react";
import Modal from "../molecules/import-file-modal"; // Adjust the path if necessary.
import { Button, Input } from "@chainkeeping/ui";
import ImportIcon from "../atoms/import-icon";
import { CopyIcon, FileIcon } from "lucide-react";

interface ModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
}

const ModalComponent: FC<ModalComponentProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Tax Processed'>
			<div className='p-4 flex flex-col gap-4 items-center'>
				<div className='flex w-full rounded-lg bg-accent py-4 px-3 justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<FileIcon />
						<p className='text-sm font-bold'>
							[Exchange_Name] transaction history file import guide
						</p>
					</div>
					<CopyIcon />
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='exchange_name' className='text-sm'>
						Account Name / Alias
					</label>
					<Input id='exchange_name' type='text' placeholder='[Exchange_Name]' />
				</div>
				<div className='mb-4 p-4 flex w-full bg-[#F8F9FA] rounded-md hover:bg-transparent transition-all ease-in-out duration-300'>
					<div className='w-full gap-1 border border-dashed rounded-md border-[#CBD5E1] flex items-center justify-center flex-col h-[120px] transition-all ease-in-out duration-300 hover:bg-[#FDF3F3] hover:border-[#D82E2E]'>
						{/* <DocIcon /> */}
						<span>Doc Icon</span>
						<h6 className='text-xs font-bold'>Drag & drop file or select</h6>
						<p className='text-[10px] text-grey-400'>
							Supports .csv, .xls, .xlsx files up to 20MB
						</p>
					</div>
				</div>

				<Button onClick={onClose} className='w-full gap-2 text-base'>
					<ImportIcon className='text-white' />
					Upload file & Import transactions
				</Button>
			</div>
		</Modal>
	);
};

export default ModalComponent;
