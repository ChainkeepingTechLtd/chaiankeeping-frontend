import React, { useState } from "react";
import ActiveOrderTab from "../organisms/active-order-tab";
import OrderHistoryTab from "../organisms/order-history-tab";
import { MenuIcon } from "lucide-react";
import MainMenuIcon from "../atoms/menu-icon";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Input } from "@chainkeeping/ui";
import ProfileImage from "../atoms/profile-image";
import WebsiteIcon from "../atoms/website-icon";
import TwitterIcon from "../atoms/twitter-icon";
import LinkedInIcon from "../atoms/linkedin-icon";
import SidebarAccordion from "../organisms/sidebar-accordion";
import PreviewIcon from "../atoms/preview-icon";

const practitionersData = [
	{
		id: 1,
		name: "Adegboyega & Akinsanya LLC",
		description:
			"Lorem ipsum dolor sit amet consectetur. Lorem ornare nullam integer porttitor nibh in elementum at libero. Gravida at sit et.",
		clients: 7,
		reports: 106,
		rating: 4.5,
		reviews: 12,
		status: "online",
		services: [
			{ id: "tax", name: "Tax Management", pricePerYear: 80000 },
			{ id: "financial", name: "Financial Reporting", pricePerYear: 70000 },
			// { id: "report", name: "Report Signing", pricePerReport: 5000 },
			// { id: "advisory", name: "Advisory", pricePerSession: 5000 },
			// { id: "auditing", name: "Auditing", pricePerYear: 50000 },
		],
	},
];

type Service = {
	id: string;
	name: string;
	pricePerYear?: number;
	pricePerSession?: number;
	pricePerReport: number;
};

type Practitioner = {
	id: number;
	name: string;
	description: string;
	clients: number;
	reports: number;
	rating: number;
	reviews: number;
	status: string;
	services: Service[];
};

type SelectedService = Service & {
	selectedYears: number[];
	totalCost: number;
	sessions: number;
	reports: string[];
};

const generateYears = () => Array.from({ length: 12 }, (_, i) => 2025 - i);

const MarketplaceProfile = () => {
	const [activeTab, setActiveTab] = useState("Active");
	const router = useRouter();
	const handleGoBack = () => {
		router.back();
	};

	const [selectedServices, setSelectedServices] = useState<Service[]>([]);

	const years = generateYears();

	const handleAddOrRemoveService = (service: any) => {
		if (selectedServices.find((s: any) => s.id === service.id)) {
			setSelectedServices((prev: any) =>
				prev.filter((s: any) => s.id !== service.id)
			);
		} else {
			setSelectedServices((prev: any) => [
				...prev,
				{
					...service,
					selectedYears: [],
					totalCost: 0,
					sessions: 0,
					reports: [],
				},
			]);
		}
	};

	const toggleYearSelection = (serviceId: string, year: number) => {
		setSelectedServices((prev: any) =>
			prev.map((s: any) =>
				s.id === serviceId
					? {
							...s,
							selectedYears: s.selectedYears.includes(year)
								? s.selectedYears.filter((y: any) => y !== year)
								: [...s.selectedYears, year],
							totalCost:
								(s.selectedYears.includes(year)
									? s.selectedYears.length - 1
									: s.selectedYears.length + 1) * s.pricePerYear,
						}
					: s
			)
		);
	};

	const handleSessionChange = (serviceId: string, sessions: number) => {
		setSelectedServices((prev: any) =>
			prev.map((s: any) =>
				s.id === serviceId
					? {
							...s,
							sessions,
							totalCost: sessions * s.pricePerSession,
						}
					: s
			)
		);
	};

	const toggleReportSelection = (serviceId: any, reportType: any) => {
		setSelectedServices((prev: any) =>
			prev.map((s: any) =>
				s.id === serviceId
					? {
							...s,
							reports: s.reports.includes(reportType)
								? s.reports.filter((r: any) => r !== reportType)
								: [...s.reports, reportType],
							totalCost: s.reports.includes(reportType)
								? (s.reports.length - 1) * (s.pricePerReport ?? 0)
								: (s.reports.length + 1) * (s.pricePerReport ?? 0),
						}
					: s
			)
		);
	};

	return (
		<div className='flex w-full h-svh max-sm:flex-col'>
			{/* Fixed Tabs */}
			<div className='fixed left-0 w-full bg-white shadow-md z-10 '>
				<div className='flex f justify-between md:px-8 mx-auto p-4'>
					<div
						className='flex items-center gap-2 cursor-pointer'
						onClick={handleGoBack}
					>
						<MainMenuIcon />
						<h6 className='font-bold'>Marketplace Profile</h6>
					</div>
					<Button
						variant={"secondary"}
						size='sm'
						className='text-base transition-all ease-in-out duration-300'
					>
						Save Changes
					</Button>
				</div>
			</div>

			<SidebarAccordion />

			{/* Tab Content */}
			<div className='pt-24 md:px-8 w-full'>
				<div className='flex flex-col pt-10 px-16 w-full max-sm:px-4'>
					<div className='flex flex-col w-full'>
						<div className='flex flex-col justify-center  items-start w-full gap-6'>
							<div className='flex text-lg items-center gap-1'>
								<p>Preview</p>
								<PreviewIcon />
							</div>
							<div className='bg-white shadow-xl flex lg:w-[90%] flex-col rounded-lg p-6 transition-all ease-in-out duration-300'>
								<div className='flex w-full items-start gap-2'>
									<ProfileImage />
									<div>
										<p className='font-bold text-lg mt-1'>
											Adegboyega & Akinsanya LLC
										</p>
										<p className='text-sm'>
											Lorem ipsum dolor sit amet consectetur. Lorem ornare
											nullam integer porttitor nibh in elementum at libero.
											Gravida at sit et.
										</p>
										<div className='my-4 flex gap-2 text-sm text-grey-600'>
											<div className='bg-accent px-3 py-1 rounded-md '>
												Tax Management
											</div>
											<div className='bg-accent px-3 py-1 rounded-md '>
												Financial reporting
											</div>
										</div>
										<div className='mb-3 flex gap-3 text-sm text-grey-600'>
											<div className='bg-accent p-1 flex items-center  rounded-md '>
												<WebsiteIcon />
											</div>
											<div className='bg-accent p-1 flex items-center  rounded-md '>
												<TwitterIcon />
											</div>
											<div className='bg-accent p-1 flex items-center  rounded-md '>
												<LinkedInIcon />
											</div>
										</div>
									</div>
								</div>

								<div className='flex w-full p-2 bg-accent'>
									<p className='text-grey-600'>BOOK SERVICES</p>
								</div>

								{practitionersData.map((practitioner) => (
									<div key={practitioner.id} className=''>
										<div className='mt-4'>
											{practitioner.services.map((service) => {
												const isSelected = selectedServices.some(
													(s: any) => s.id === service.id
												);
												return (
													<div
														key={service.id}
														className='flex justify-between items-center border-b pb-3 mt-2'
													>
														<div>
															<p className='font-medium mb-1'>{service.name}</p>
														</div>
														<Button
															variant={
																isSelected ? "secondaryOutline" : "default"
															}
															size='sm'
															className='text-base transition-all ease-in-out duration-300'
															onClick={() => handleAddOrRemoveService(service)}
														>
															{isSelected ? "Remove Service" : "Add Service"}
														</Button>
													</div>
												);
											})}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketplaceProfile;
