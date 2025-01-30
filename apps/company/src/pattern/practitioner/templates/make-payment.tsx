import { useState } from "react";
import ClientsIcon from "../atoms/clients-icon";
import ReportIcons from "../atoms/reports-icon";
import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SubmitButton,
} from "@chainkeeping/ui";
import ArrowIcon from "../atoms/arrow-icon";
import { useRouter } from "next/navigation";
import StarRatingIcon from "../atoms/star-rating-icon";
import CopyIcon from "@/pattern/taxes/atoms/copy-icon";
import SelectFileWidget from "../organisms/select-file-widget";
import InfoWidget from "../organisms/info-widget";
import WalletAddress from "../organisms/wallet-address";
import LoaderIcon from "../atoms/loader-icon";
import InfoWidgetTwo from "../organisms/info-widget-two";
import Modal from "@/pattern/taxes/molecules/modal-compoent";
import SuccesIcon from "@/pattern/taxes/atoms/success-icon";

const practitionersData = [
	{
		id: 1,
		name: "Adegboyega & Akinsanya LLC",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at libero. Gravida at sit et..",
		clients: 7,
		reports: 106,
		rating: 4.5,
		reviews: 12,
		status: "online",
		accountManagementPrice: "80,000",
		reportSigningPrice: "10,000",
		avatar: "AA",
		website: "https://adegboakintax.com",
		chainkeeping_id: "CK0002354",
		staff: "5",
		linkedIn: "https://adegboakintax.com",
		twitter: "https://adegboakintax.com",
		facebook: "https://adegboakintax.com",
	},
];

const MakePayment = () => {
	const router = useRouter();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState("bank");
	const [paymentConfirmed, setPaymentConfirmed] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const [loading, setLoading] = useState(false);
	const [buttonText, setButtonText] = useState("I have made this payment");

	const handleHire = async () => {
		setPaymentConfirmed(true);
		setLoading(true);
		setButtonText("Confirmed");

		await new Promise((resolve) => setTimeout(resolve, 2000));

		setLoading(false);

		setIsModalOpen(true);
	};

	const handleConfirmHire = () => {
		router.push("/practitioner/");
	};

	return (
		<div className='flex flex-col pt-10 px-16 w-full max-sm:px-4'>
			{/* Main Content */}
			<div className='flex flex-col  w-full '>
				<div className='flex justify-between items-center mb-5'>
					<div className='gap-2 flex items-center text-sm'>
						<p className='text-grey-300'>Practitioner</p>
						<ArrowIcon />
						<p className='text-grey-300'>P2B</p>
						<ArrowIcon />
						<p>Adegboyega & Akinsanya LLC</p>
					</div>
				</div>
				<div className='flex max-sm:flex-col items-start w-full gap-6'>
					{practitionersData.map((practitioner, idx) => (
						<div key={idx} className='bg-white lg:w-[60%] rounded-lg p-6'>
							<h3 className='font-bold text-lg'>{practitioner.name}</h3>
							<p className='text-sm'>{practitioner.description}</p>

							<div className='flex gap-3 my-5'>
								<div className='flex bg-[#F5F8FA]  rounded-md items-center gap-1 py-1 px-2'>
									<StarRatingIcon />
									<p className='text-grey-600'>Rating</p>
									<p className='font-medium'>{practitioner.rating}</p>
								</div>

								<div className='flex bg-[#F5F8FA]  rounded-md items-center gap-1 py-1 px-2'>
									<ClientsIcon />
									<p className='text-grey-600'>Clients</p>
									<p className='font-medium'>{practitioner.clients}</p>
								</div>
								<div className='flex bg-[#F5F8FA]  rounded-md items-center gap-1 py-1 px-2'>
									<ReportIcons />
									<p className='text-grey-600'>Reports</p>
									<p className='font-medium'>{practitioner.reports}</p>
								</div>
							</div>

							<div className='flex w-full p-2 bg-[#DDE2E9]'>
								<p className='text-grey-600'>BOOK SERVICES</p>
							</div>

							<Button
								variant='default'
								size='sm'
								className='text-base px-3 mt-4 gap-1'
								// onClick={handleHire}
								disabled={loading} // Disable the button while loading
							>
								Edit services
							</Button>
						</div>
					))}

					{practitionersData.map((practitioner, idx) => (
						<div key={idx} className='flex flex-col gap-4 w-full lg:w-[40%]'>
							<div
								key={practitioner.id}
								className='bg-[#EBEFF3] w-full flex flex-col rounded-lg gap-4 p-8'
							>
								<div className='flex w-full p-2 bg-[#DDE2E9]'>
									<p className='text-grey-600 text-sm'>
										ORDER SUMMARY / PAYMENT
									</p>
								</div>

								<div className='rounded-md text-grey-600'>
									<div className='flex justify-between border-b py-2'>
										<span>Tax Management x 12:</span>
										<span className='text-[#202B3C] hover:text-[#D82E2E] cursor-pointer transition-all ease-in-out duration-300'>
											NGN 960,000
										</span>
									</div>
									<div className='flex justify-between border-b py-2'>
										<span>TOTAL</span>
										<span className='text-[#202B3C]'>NGN 960,000</span>
									</div>
								</div>

								{!paymentConfirmed && (
									<div className='space-y-2'>
										<label htmlFor='payment-method' className='text-sm'>
											Payment Method
										</label>
										<Select
											value={paymentMethod}
											onValueChange={(value) => setPaymentMethod(value)}
										>
											<SelectTrigger>
												<SelectValue placeholder='Bank Transfer' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='bank'>Bank Transfer</SelectItem>
												<SelectItem value='wallet'>Wallet Transfer</SelectItem>
												<SelectItem value='cbdc'>CBDC</SelectItem>
												<SelectItem value='e-naira'>E-Naira</SelectItem>
											</SelectContent>
										</Select>
									</div>
								)}

								{!paymentConfirmed && (
									<div className='flex flex-col gap-3'>
										<h5>Payment Information</h5>
										<div className='flex flex-col gap-3'>
											{paymentMethod === "bank" && (
												<>
													<div className='flex bg-[#F5F8FA] text-sm flex-col gap-3 p-4 rounded-md'>
														<div className='flex justify-between items-center'>
															<p className='text-grey-600'>Account Name:</p>
															<div className='flex items-center gap-1'>
																<p className='font-bold'>
																	Adegboyega & Akinsanya LLC
																</p>
																<CopyIcon />
															</div>
														</div>
														<div className='flex justify-between items-center'>
															<p className='text-grey-600'>Account Number:</p>
															<div className='flex items-center gap-1'>
																<p className='font-bold'>0234632030</p>
																<CopyIcon />
															</div>
														</div>

														<div className='flex justify-between items-center'>
															<p className='text-grey-600'>Bank Name:</p>
															<div className='flex items-center gap-1'>
																<p className='font-bold'>GTCO</p>
															</div>
														</div>
													</div>
													<SelectFileWidget />
												</>
											)}
											{paymentMethod === "wallet" && (
												<>
													<WalletAddress />
													<div>
														<label htmlFor='hash'>Transaction Hash</label>
														<Input
															id='hash'
															type='text'
															value=''
															className='bg-[#F5F8FA] mt-2'
														/>
													</div>
												</>
											)}
											{paymentMethod === "cbdc" && (
												<>
													<WalletAddress />
													<div>
														<label htmlFor='hash'>Transaction Hash</label>
														<Input
															id='hash'
															type='text'
															value=''
															className='bg-[#F5F8FA] mt-2'
														/>
													</div>
												</>
											)}
											{paymentMethod === "e-naira" && (
												<>
													<WalletAddress />
													<div>
														<label htmlFor='hash'>Transaction Hash</label>
														<Input
															id='hash'
															type='text'
															value=''
															className='bg-[#F5F8FA] mt-2'
														/>
													</div>
												</>
											)}
										</div>
									</div>
								)}

								<div className='w-full flex justify-between items-center'>
									<Button
										variant='secondary'
										size='md'
										className='mt-4  gap-2 w-full text-base'
										onClick={handleHire}
									>
										{loading ? (
											<>
												Confirming Payment
												<LoaderIcon />
											</>
										) : (
											buttonText
										)}
									</Button>
								</div>
							</div>
							{paymentConfirmed ? <InfoWidgetTwo /> : <InfoWidget />}
						</div>
					))}
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Revoke Practitioner Access'
			>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<SuccesIcon />
					<p className='text-grey-400 text-sm text-center'>
						[Practitioner_name] has been added to your account, they’ll now have
						full access to your Chainkeeping profile.
					</p>
					{/* <div className='flex w-full rounded-lg border border-dashed py-4 px-3 justify-between items-center'>
						<p className='text-sm text-grey-500'>0123-5678-9012</p>
						<CopyIcon />
					</div> */}
					<Button
						variant='default'
						className='w-full text-base'
						onClick={handleConfirmHire}
					>
						Ok, got it
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default MakePayment;
