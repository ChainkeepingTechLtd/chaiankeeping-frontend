import { useState } from "react";
import ClientsIcon from "../atoms/clients-icon";
import ReportIcons from "../atoms/reports-icon";
import { Button } from "@chainkeeping/ui";
import StarIcon from "../atoms/star-icon";
import HalfStarIcon from "../atoms/half-star-icon";
import EmptyStarIcon from "../atoms/empty-star-icon";
import ArrowIcon from "../atoms/arrow-icon";
import FilterIcon from "../atoms/filter-icon";
import FilterSection from "../organisms/filter-section";
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
	},
	{
		id: 2,
		name: "Johnson & Partners",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at...",
		clients: 10,
		reports: 150,
		rating: 4.8,
		reviews: 20,
		status: "online",
		accountManagementPrice: "100,000",
		reportSigningPrice: "15,000",
		avatar: "JP",
	},
	{
		id: 3,
		name: "Kalu Consulting Firm",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at...",
		clients: 5,
		reports: 80,
		rating: 4.2,
		reviews: 8,
		status: "offline",
		accountManagementPrice: "60,000",
		reportSigningPrice: "8,000",
		avatar: "KC",
	},
	{
		id: 4,
		name: "Kalu Consulting Firm",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at...",
		clients: 5,
		reports: 80,
		rating: 4.2,
		reviews: 8,
		status: "offline",
		accountManagementPrice: "60,000",
		reportSigningPrice: "8,000",
		avatar: "KC",
	},
];

const ListOfPractitioners = () => {
	const router = useRouter();

	// Function to handle login click
	const handleHire = () => {
		router.push("/practitioner/practitioner-info");
	};
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};
	return (
		<div className='flex w-full h-screen max-sm:flex-col'>
			{/* Main Content */}
			<div
				className={`flex-1 px-16 pt-10 w-full max-sm:px-4 ${
					isFilterOpen ? "mr-0" : ""
				}`}
			>
				<div className='flex justify-between items-center mb-5'>
					<div className='gap-2 flex items-center'>
						<p className='text-grey-300 text-sm'>Practitioner</p>
						<ArrowIcon />
						<p>P2B</p>
					</div>
					<Button
						onClick={toggleFilter}
						variant='default'
						size='sm'
						className='text-base px-2 gap-2 bg-[#E5EBEF] text-grey-500'
					>
						<FilterIcon />
						Filter
					</Button>
				</div>
				<div
					className={`grid 2xl:grid-cols-4 w-full   gap-4 lg:grid-cols-3 max-sm:grid-cols-1 max-sm:px-4 ${
						isFilterOpen ? "2xl:grid-cols-3 lg-grid-cols-2" : ""
					}`}
				>
					{practitionersData.map((practitioner, idx) => (
						<div key={idx} className='bg-white shadow-lg rounded-lg  p-4'>
							<div className='flex gap-4 '>
								<div className='h-[52px] w-[52px] relative'>
									<div className=' w-[48px] h-[48px] rounded-md bg-[#F5F8FA] flex items-center justify-center font-medium text-grey-600'>
										{practitioner.avatar}
									</div>
									<div
										className={cn(
											"absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
											practitioner.status === "online"
												? "bg-success"
												: "bg-[#94A3B8]"
										)}
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

							<div className='bg-[#F5F8FA] rounded-md p-3 mt-4 text-grey-600'>
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

							<Button
								variant='default'
								size='md'
								className='text-base px-3 mt-4 gap-1'
								onClick={handleHire}
							>
								Hire Practitioner
							</Button>
						</div>
					))}
				</div>
			</div>
			{/* Filter Panel */}
			<FilterSection isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
		</div>
	);
};

export default ListOfPractitioners;
