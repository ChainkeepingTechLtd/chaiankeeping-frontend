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
									<div className='flex w-full border-b pb-3 justify-between md:gap-4 max-sm:flex-col'>
										<div className='flex gap-2'>
											<JJIcon />
											<div>
												<h6 className='font-bold'>Jerome Jenkins</h6>
												<p className='text-xs text-grey-300'>
													Added: May 1, 2023
												</p>
											</div>
										</div>
									</div>
									<div className='w-full flex flex-col gap-4  pb-3'>
										<p className='text-sm'>
											<span className='text-grey-400'>Email: </span>
											example@gmail.com
										</p>
										<p className='text-sm'>
											<span className='text-grey-400'>Chainkeeping ID: </span>
											ck_1120919
										</p>
										<p className='text-sm'>
											<span className='text-grey-400'>Taxes paid: </span>
											10
										</p>
										<p className='text-sm'>
											<span className='text-grey-400'>TIN: </span>
											12345678-0001
										</p>
										<p className='text-sm'>
											<span className='text-grey-400'>Type: </span>
											Individual
										</p>
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
