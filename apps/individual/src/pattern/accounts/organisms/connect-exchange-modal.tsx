import { FC } from "react";
import Modal from "../molecules/import-file-modal"; // Adjust the path if necessary.
import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import { CopyIcon, FileIcon } from "lucide-react";
import InfoIcon from "@/pattern/transaction/atoms/info-icon";
import ImportTransactionIcon from "../atoms/import-transaction-icon";

interface ModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
}

const ConnectExchangeModal: FC<ModalComponentProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Connect [Exchange_Name] by API'
		>
			<div className='p-4 flex flex-col gap-4 items-center'>
				<div className='flex w-full gap-1 mb-3 items-start p-2 bg-[#E9F2FE] rounded-md'>
					<InfoIcon />
					<p className='text-sm w-[470px]'>
						We use read-only access to import and sync your transactions, we do
						not have access to your private keys and can’t move your funds.
					</p>
				</div>
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
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						API Key
					</label>
					<Input id='api_key' type='text' placeholder='enter API key' />
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Secret Key
					</label>
					<Input id='api_key' type='text' placeholder='enter secret key' />
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Secret Key
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='First Transaction' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='First Transaction'>
								First Transaction
							</SelectItem>
							<SelectItem value='Set custom date'>Set custom date</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<Button onClick={onClose} className='w-full gap-2 text-base'>
					<ImportTransactionIcon />
					Import Transaction
				</Button>
			</div>
		</Modal>
	);
};

export default ConnectExchangeModal;
