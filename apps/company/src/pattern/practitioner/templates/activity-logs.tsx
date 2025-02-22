import { useState } from "react";
import { Button } from "@chainkeeping/ui";
import ArrowIcon from "../atoms/arrow-icon";
import Link from "next/link";
import LinkIcon from "../atoms/link-icon";
import LinkedInIcon from "../atoms/linkedin-icon";
import XIcon from "../atoms/x-icon";
import FacebookIcon from "../atoms/facebook-icon";
import { useRouter } from "next/navigation";
import CommentIcon from "../atoms/comment-icon";
import UserIcon from "../atoms/user-icon";

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

const ActivityLogs = () => {
	const router = useRouter();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState("All time");

	const activityData = [
		{
			date: "August 13, 2023",
			entries: [
				{
					time: "11:45 am",
					category: "Account",
					name: "Peter Sutherland",
					description: " imported transactions to",
					wallet: "Trust wallet 2",
				},
				{
					time: "12:05 am",
					category: "Account",
					name: "Peter Sutherland",
					description: " imported transactions to",
					wallet: "Trust wallet 2",
				},
				{
					time: "12:18 am",
					category: "Account",
					name: "Peter Sutherland",
					description: " imported transactions to",
					wallet: "Trust wallet 2",
				},
			],
		},
		{
			date: "August 9, 2023",
			entries: [
				{
					time: "11:45 am",
					category: "Settings",
					name: "Peter Sutherland ",
					description: "updated billing information",
					wallet: "",
				},
			],
		},
		{
			date: "July 29, 2023",
			entries: [
				{
					time: "11:45 am",
					category: "Taxes",
					name: "Mariam Basit",
					description: "processed tax ",
					wallet: "#01234567",
				},
			],
		},
	];

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const handleHire = () => {
		router.push("/practitioner/order-configuration");
	};

	const handleFilterClick = (filter: string) => {
		setActiveFilter(filter);
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
				<div className='flex max-sm:flex-col items-start w-full gap-10 '>
					{practitionersData.map((practitioner, idx) => (
						<div
							key={idx}
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
									variant='default'
									size='md'
									className='text-base px-6 mt-4 gap-1'
									onClick={handleHire}
								>
									<CommentIcon />
									Chat
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
							</div>

							<div className='flex w-full p-2 bg-[#DDE2E9]'>
								<p className='text-grey-600 text-sm'>CHAINKEEPING STATS</p>
							</div>

							<div className=' rounded-md   text-grey-600 '>
								<div className='flex justify-between border-b py-2'>
									<span>Active clients:</span>
									<span className='text-[#202B3C] '>7</span>
								</div>
								<div className='flex justify-between border-b py-2'>
									<span>Signed reports:</span>
									<span className='text-[#202B3C] '>7</span>
								</div>
								<div className='flex justify-between border-b py-2'>
									<span>Rating & Reviews:</span>
									<span className='text-[#D82E2E]'>4.5 12 Reviews</span>
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

					<div className='w-full'>
						<h3 className='text-xl font-bold mb-4'>Activity Log</h3>
						<div className='my-5 flex gap-3 text-sm text-grey-600 transition-all ease-in-out duration-300'>
							<div
								className={`rounded-full py-2 px-4 cursor-pointer ${
									activeFilter === "Last 7 days"
										? "bg-[#FAE5E5] text-[#D82E2E]"
										: "bg-[#E5EBEF]"
								}`}
								onClick={() => handleFilterClick("Last 7 days")}
							>
								<span>Last 7 days</span>
							</div>
							<div
								className={`rounded-full py-2 px-4 cursor-pointer ${
									activeFilter === "This month"
										? "bg-[#FAE5E5] text-[#D82E2E]"
										: "bg-[#E5EBEF]"
								}`}
								onClick={() => handleFilterClick("This month")}
							>
								<span>This month</span>
							</div>
							<div
								className={`rounded-full py-2 px-4 cursor-pointer ${
									activeFilter === "All time"
										? "bg-[#FAE5E5] text-[#D82E2E]"
										: "bg-[#E5EBEF]"
								}`}
								onClick={() => handleFilterClick("All time")}
							>
								<span>All time</span>
							</div>
						</div>

						{activityData.map((activity, idx) => (
							<div key={idx} className='mb-6 relative'>
								<div className='relative pl-6 border-l '>
									<p className='font-bold italic  mb-2'>{activity.date}</p>
									{activity.entries.map((entry, idx) => (
										<div key={idx} className='mb-6 relative'>
											{/* Activity Entry */}
											<div>
												<p className='text-sm text-grey-500'>
													<span>{entry.time}</span> &bull;{" "}
													<span className='text-[#D82E2E] font-semibold'>
														{entry.category}
													</span>
												</p>
												<div className='flex items-center gap-2 my-3'>
													<UserIcon />
													<p className='text-sm'>
														{entry.name}
														<span className='text-grey-500'>
															{" "}
															{entry.description}
														</span>{" "}
														<span className='text-[#D82E2E]'>
															{entry.wallet}
														</span>
													</p>
												</div>
											</div>
										</div>
									))}

									{/* Dot at the bottom of each activity log */}
									<div className='absolute bottom-[-15px] left-0 transform translate-x-[-50%] h-3 w-3 rounded-full bg-[#94A3B8]'></div>
								</div>
							</div>
						))}
						<button className='text-[#D82E2E] pl-6  mt-4'>Load more...</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityLogs;
