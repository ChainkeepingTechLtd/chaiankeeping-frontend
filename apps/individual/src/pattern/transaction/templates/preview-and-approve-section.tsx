import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@chainkeeping/ui";
import NoAccountIcon from "@/pattern/individual/atoms/no-account-icon";
import { BulkPaymentTransactionData } from "../molecules/bulk-payement-data";
import PreviewPayment from "../organisms/preview-payment";

const PreviewAndApproveSection = () => {
	const [hasAccount, setHasAccount] = useState<boolean>(true);

	const router = useRouter();

	const handleAddAccount = () => {
		router.push("/bulk-payments/payment");
	};

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className='h-full'>
			{hasAccount ? (
				<div className='md:px-8 flex h-full gap-4 justify-between pt-10 max-sm:pt-24 max-sm:px-4 max-sm:flex-col'>
					<div className='flex-col flex gap-4 w-full'>
						<PreviewPayment data={BulkPaymentTransactionData as any} />
					</div>
				</div>
			) : (
				<div className='flex flex-col h-full justify-center items-center mt-40'>
					<NoAccountIcon />
					<p className='text-sm font-bold text-[#202B3C] mt-6'>
						No payments yet
					</p>
					<p className='text-sm text-grey-400 pt-1 pb-8 sm:max-w-[420px] text-center'>
						Your bulk payment transactions will show up here.
					</p>
					<Button
						variant='default'
						size='md'
						className='text-base'
						onClick={handleAddAccount}
					>
						Add new bulk payment
					</Button>
				</div>
			)}
		</div>
	);
};

export default PreviewAndApproveSection;
