import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@chainkeeping/ui";
import GoBack from "../atoms/go-back";
import NoAccountIcon from "../atoms/no-account-icon";
import MoreIcon from "../atoms/more-icon";
import AccountIcon from "../atoms/account-icon";

const ViewMessage = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const router = useRouter();

	const handleAddAccount = () => {
		router.push("/add-account");
	};

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className='bg-[#F4F7F9] pb-4'>
			{hasAccount ? (
				<div className='md:px-8 max-sm:pt-24 pt-6'>
					<div
						className='flex items-center gap-2 md:mb-10 max-sm:mb-6 max-sm:px-4'
						onClick={handleGoBack}
					>
						<GoBack />
						<h6 className='font-bold'>Jerome Jenkins</h6>
					</div>
					<div className='items-start flex h-full gap-4 justify-between max-sm:px-4 max-sm:flex-col'>
						<div className=' flex xl:w-[35%] w-full gap-4 '>
							<div className='flex flex-col gap-[10px] w-full items-start'>
								<div className='bg-[#ffffff]  flex w-full flex-col rounded-lg gap-4 p-4'>
									<div className='flex w-full justify-between border-b pb-3'>
										<p className='text-sm font-bold text-grey-400'>
											Message Overview
										</p>
										<MoreIcon />
									</div>
									<p className='mt-2  text-accent-foreground'>Recipient</p>
									<div className='flex  w-full justify-between md:gap-4 max-sm:flex-col'>
										<div className='flex gap-2'>
											<AccountIcon />
											<div>
												<p className='font-bold text-sm'>John Doe</p>
												<p className='text-xs text-grey-300'>
													johndoe@gmail.com
												</p>
											</div>
										</div>
									</div>
									<p>User ID</p>
									<p className='text-sm font-bold'>cus_1234eRFDS</p>

									<Button
										variant='secondary'
										size='md'
										className='text-base w-full '
										onClick={handleAddAccount}
										disabled
									>
										Submit report
									</Button>
								</div>
								<p className='text-xs text-grey-400'>
									Created Jun 11, 2023, 3:16 PM PST
								</p>
							</div>
						</div>
						<div className='flex rounded-md flex-col gap-4 w-full bg-white p-8 max-sm:p-4'>
							<h5 className='font-sen font-bold text-2xl max-sm:text-base'>
								Cannot import transactions from Binance
							</h5>
							<p className='text-sm text-grey-500 font-bold'>CONTENT </p>
							<p className='text-accent-foreground'>
								Lorem ipsum dolor sit amet consectetur. Pharetra risus nullam
								lectus sed est pellentesque ac consectetur nisi. Justo amet
								donec bibendum in ac. Faucibus mi viverra justo vitae lacinia.
								Vitae sed ipsum nibh ac aliquet pellentesque elementum est dui.
							</p>

							<p className='text-accent-foreground'>
								Lorem ipsum dolor sit amet consectetur. Pharetra risus nullam
								lectus sed est pellentesque ac consectetur nisi. Justo amet
								donec bibendum in ac. Faucibus mi viverra justo vitae lacinia.
								Vitae sed ipsum nibh ac aliquet pellentesque elementum est dui.
							</p>
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

export default ViewMessage;
