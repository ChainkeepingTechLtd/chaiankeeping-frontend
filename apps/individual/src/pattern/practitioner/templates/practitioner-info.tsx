import { useState } from "react";
import ClientsIcon from "../atoms/clients-icon";
import ReportIcons from "../atoms/reports-icon";
import { Button } from "@chainkeeping/ui";
import StarIcon from "../atoms/star-icon";
import HalfStarIcon from "../atoms/half-star-icon";
import ArrowIcon from "../atoms/arrow-icon";
import Link from "next/link";
import LinkIcon from "../atoms/link-icon";
import LinkedInIcon from "../atoms/linkedin-icon";
import XIcon from "../atoms/x-icon";
import FacebookIcon from "../atoms/facebook-icon";
import { useRouter } from "next/navigation";

const practitionersData = [
	{
		id: 1,
		name: "Adegboyega & Akinsanya LLC",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at...",
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

const SinglePractitioner = () => {
	const router = useRouter();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const handleHire = () => {
		router.push("/practitioner/order-configuration");
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
					{practitionersData.map((practitioner) => (
						<div
							key={practitioner.id}
							className='bg-white shadow-lg rounded-lg  p-4'
						>
							<div className='flex gap-4 '>
								<div className='h-[52px] w-[52px] relative'>
									<div className=' w-[48px] h-[48px] rounded-md bg-[#F5F8FA] flex items-center justify-center font-medium text-grey-600'>
										{practitioner.avatar}
									</div>
									<div
										className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
											practitioner.status === "online"
												? "bg-[#27AE60]"
												: "bg-[#94A3B8]"
										}`}
									></div>
								</div>

								<div className='flex-1'>
									<h3 className='font-bold text-lg '>{practitioner.name}</h3>
									<p className=' text-sm'>{practitioner.description}</p>
								</div>
							</div>

							<div className='flex justify-between items-center my-4'>
								<div className='flex items-center gap-2'>
									<div className='flex items-center gap-1'>
										<ClientsIcon />
										<span className='text-grey-400'>Clients:</span>
										<span className='font-medium'>{practitioner.clients}</span>
									</div>
								</div>

								<div className='flex flex-col items-end text-sm'>
									<span className='flex items-center gap-2'>
										<span className='font-semibold text-base'>
											{practitioner.rating}
											<span className='text-sm text-grey-300 font-normal'>
												/5
											</span>
										</span>
										<span className='text-[#D82E2E] text-sm'>
											({practitioner.reviews} Reviews)
										</span>
									</span>
								</div>
							</div>

							<div className='mt-2 flex items-center gap-2 text-sm justify-between'>
								<div className='flex items-center gap-2'>
									<ReportIcons />
									<span className='text-grey-400'>Reports:</span>
									<span className='font-medium'>{practitioner.reports}</span>
								</div>
								<div className='text-yellow-400 flex gap-1'>
									{Array(Math.floor(practitioner.rating))
										.fill(null)
										.map((_, index) => (
											<StarIcon key={index} />
										))}

									{practitioner.rating % 1 >= 0.1 && <HalfStarIcon />}

									{Array(5 - Math.ceil(practitioner.rating))
										.fill(null)
										.map((_, index) => (
											<HalfStarIcon key={index} />
										))}
								</div>
							</div>

							<div className='bg-gray-100 rounded-md p-3 mt-4 text-grey-600'>
								<div className='flex justify-between text-sm '>
									<span>Account Management:</span>
									<span className='text-grey-300'>
										NGN{" "}
										<span className='font-bold text-base text-[#202B3C]'>
											{practitioner.accountManagementPrice}
										</span>
										/month
									</span>
								</div>
								<div className='flex justify-between text-sm mt-2'>
									<span>Report Signing only:</span>
									<span className='text-grey-300'>
										NGN{" "}
										<span className='font-bold text-base text-[#202B3C]'>
											{practitioner.reportSigningPrice}
										</span>
										/report
									</span>
								</div>
							</div>
						</div>
					))}

					{practitionersData.map((practitioner) => (
						<div
							key={practitioner.id}
							className='bg-[#EBEFF3]  flex w-full flex-col rounded-lg gap-4 p-8'
						>
							<div className='flex w-full justify-between md:gap-4 max-sm:flex-col'>
								<div className='flex-1'>
									<h3 className='font-bold text-lg '>{practitioner.name}</h3>
									<p className=' lg:w-[454px] text-grey-600'>
										Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam
										integer porttitor nibh in elementum at libero. Gravida at
										sit et.
									</p>
								</div>
								<Button
									variant='secondary'
									size='md'
									className='text-base px-3 mt-4 gap-1'
									onClick={handleHire}
								>
									Hire Practitioner
								</Button>
							</div>
							<div className='flex gap-2  text-sm text-grey-600'>
								<div className='rounded-md bg-[#CBD5E1]  px-2 py-1'>
									<p>Financial reporting</p>
								</div>
								<div className='rounded-md bg-[#CBD5E1] px-2 py-1'>
									<p>Audit & Assurance</p>
								</div>
								<div className='rounded-md bg-[#CBD5E1] px-2 py-1'>
									<p>Tax</p>
								</div>
								<div className='rounded-md bg-[#CBD5E1] px-2 py-1'>
									<p>Advisory</p>
								</div>
							</div>

							<div className='flex w-full p-2 bg-[#DDE2E9]'>
								<p className='text-grey-600 text-sm'>BASIC INFO</p>
							</div>

							<div className=' rounded-md   text-grey-600 '>
								<div className='flex justify-between border-b py-2'>
									<span>Website:</span>
									<span className='text-[#202B3C]   hover:text-[#D82E2E] cursor-pointer transition-all ease-in-out duration-300'>
										<Link
											className='flex gap-1 items-center'
											target='_blank'
											href={practitioner.website}
										>
											{practitioner.website}

											<LinkIcon />
										</Link>
									</span>
								</div>
								<div className='flex justify-between border-b py-2'>
									<span>Chainkeeping ID:</span>
									<span className='text-[#202B3C] '>
										{practitioner.chainkeeping_id}
									</span>
								</div>
								<div className='flex justify-between border-b py-2'>
									<span>Staff:</span>
									<span className='text-[#202B3C] '>{practitioner.staff}</span>
								</div>
								<div className='flex flex-col  gap-4 py-2'>
									<span>Socials:</span>
									<div className='flex gap-1'>
										<Link href={practitioner.linkedIn}>
											<LinkedInIcon />
										</Link>

										<Link href={practitioner.twitter}>
											<XIcon />
										</Link>

										<Link href={practitioner.facebook}>
											<FacebookIcon />
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SinglePractitioner;
