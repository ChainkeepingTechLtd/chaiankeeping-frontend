import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@chainkeeping/ui";
import { ClientsData } from "../molecules/clients-data";
import GoBack from "../atoms/go-back";
import NoAccountIcon from "../atoms/no-account-icon";
import ClientsTable from "../organisms/clients-table";
import JJIcon from "../atoms/jj-icon";
import MessageIcon from "../atoms/message-icon";
import TabComponent from "./tab-component";

const ManageClient = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const router = useRouter();

	const handleAddAccount = () => {
		router.push("/add-account");
	};

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className='h-full'>
			{hasAccount ? (
				<div className='md:px-8  pt-6'>
					<div className='flex items-center gap-2 mb-10' onClick={handleGoBack}>
						<GoBack />
						<h6 className='font-bold'>Jerome Jenkins</h6>
					</div>
					<div className=' flex h-full gap-4 justify-between max-sm:px-4 max-sm:flex-col'>
						<div className=' flex xl:w-[35%] w-full gap-4 '>
							<div className='flex w-full items-start'>
								<div className='bg-[#EBEFF3]  flex w-full flex-col rounded-lg gap-4 p-4'>
									<div className='flex w-full border-b pb-3 justify-between md:gap-4 '>
										<div className='flex gap-2'>
											<JJIcon />
											<div>
												<h6 className='font-bold'>Jerome Jenkins</h6>
												<p className='text-xs text-grey-300'>
													Added: May 1, 2023
												</p>
											</div>
										</div>
										<Button
											variant='default'
											size='sm'
											className='text-base   gap-1'
										>
											<MessageIcon />
											Chat
										</Button>
									</div>
									<div className='w-full flex flex-col gap-2 border-b pb-3'>
										<p className='text-sm'>
											<span className='text-grey-400'>Email: </span>
											example@gmail.com
										</p>
										<p className='text-sm'>
											<span className='text-grey-400'>Client ID: </span>
											1104
										</p>
									</div>
									<div className='w-full  justify-between flex  gap-2'>
										<p className='text-sm'>
											<span className='text-grey-400'>Assigned to: </span>
											Mariam Basit
										</p>
										<div className='flex gap-2'>
											<div className='bg-[#27AE60] rounded-full px-2 py-1 text-[10px] text-white'>
												Active
											</div>
											<div className='bg-[#94A3B8] rounded-full px-2 py-1 text-[10px] text-white'>
												Shared
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex w-full'>
							<TabComponent />
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center items-center mt-40'>
					<NoAccountIcon />
					<p className='text-sm font-bold text-[#202B3C] mt-6'>
						No transaction yet
					</p>
					<p className='text-sm text-grey-400 pt-1 pb-8 sm:max-w-[420px] text-center'>
						Account transaction data will show up here when you add an exchange,
						wallet or make imports.
					</p>
					<Button
						variant='default'
						size='md'
						className='text-base'
						onClick={handleAddAccount}
					>
						Add new transaction
					</Button>
				</div>
			)}
		</div>
	);
};

export default ManageClient;
