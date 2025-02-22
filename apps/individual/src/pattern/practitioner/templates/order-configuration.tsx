import React, { useState } from "react";
import { Button, Checkbox, Input } from "@chainkeeping/ui";
import ArrowIcon from "../atoms/arrow-icon";
import { useRouter } from "next/navigation";
import StarRatingIcon from "../atoms/star-rating-icon";
import ClientsIcon from "../atoms/clients-icon";
import ReportIcons from "../atoms/reports-icon";

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
			{ id: "report", name: "Report Signing", pricePerReport: 5000 },
			{ id: "advisory", name: "Advisory", pricePerSession: 5000 },
			{ id: "auditing", name: "Auditing", pricePerYear: 50000 },
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

const OrderConfiguration = () => {
	const router = useRouter();
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
		<div className='flex flex-col pt-10 px-16 w-full max-sm:px-4'>
			<div className='flex flex-col w-full'>
				<div className='flex max-sm:flex-col items-start w-full gap-6'>
					{/* Practitioner Details */}
					{practitionersData.map((practitioner) => (
						<div
							key={practitioner.id}
							className='bg-white  shadow-lg rounded-lg p-6'
						>
							<h3 className='font-bold text-base'>{practitioner.name}</h3>
							<p className='text-sm'>{practitioner.description}</p>
							<div className='flex flex-wrap gap-3 my-5'>
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
							<div className='mt-4'>
								{practitioner.services.map((service) => {
									const isSelected = selectedServices.some(
										(s: any) => s.id === service.id
									);
									return (
										<div
											key={service.id}
											className='flex  max-sm:flex-col justify-between md:items-center border-b pb-3 mt-2'
										>
											<div>
												<p className='font-medium mb-1'>{service.name}</p>
												<p className='text-sm text-grey-400'>
													{service.pricePerYear
														? `(NGN ${service.pricePerYear.toLocaleString()} /year)`
														: service.pricePerSession
															? `(NGN ${service.pricePerSession.toLocaleString()} /session)`
															: service.pricePerReport
																? `(NGN ${service.pricePerReport.toLocaleString()} /report)`
																: `(Price not available)`}
												</p>
											</div>
											<div className='max-sm:flex max-sm:w-full max-sm:justify-end'>
												<Button
													variant={isSelected ? "secondaryOutline" : "default"}
													size='sm'
													className='text-base transition-all ease-in-out duration-300'
													onClick={() => handleAddOrRemoveService(service)}
												>
													{isSelected ? "Remove Service" : "Add Service"}
												</Button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					))}

					{/* Order Configuration */}
					<div className='bg-[#EBEFF3] flex max-sm:w-full lg:w-[60%] flex-col rounded-lg p-6 transition-all ease-in-out duration-300'>
						<div className='flex w-full p-2 bg-[#DDE2E9]'>
							<p className='text-grey-600 text-sm'>ORDER CONFIGURATION</p>
						</div>

						<div className='mt-4 space-y-4'>
							{selectedServices.map((service: any) => (
								<div key={service.id} className='flex flex-col gap-3'>
									<p className='font-bold'>{service.name}</p>
									{service.id === "advisory" && (
										<div>
											<label htmlFor='sessions'>
												Select Number of Sessions
											</label>
											<Input
												id='sessions'
												type='number'
												min={1}
												value={service.sessions}
												onChange={(e) =>
													handleSessionChange(service.id, +e.target.value)
												}
												className='bg-[#F5F8FA] mt-2'
											/>
										</div>
									)}

									{service.id === "report" && (
										<div>
											<p>Select reports to be signed</p>
											<div className='flex flex-col gap-4 mt-2'>
												<label className='flex items-center gap-2'>
													<Checkbox
														checked={service.reports.includes("Tax")}
														onCheckedChange={() =>
															toggleReportSelection(service.id, "Tax")
														}
													/>
													<span>Tax Report</span>
												</label>
												<label className='flex items-center gap-2'>
													<Checkbox
														checked={service.reports.includes("Financial")}
														onCheckedChange={() =>
															toggleReportSelection(service.id, "Financial")
														}
													/>
													<span>Financial Report</span>
												</label>
											</div>
										</div>
									)}

									{/* Year Selection for Other Services */}
									{service.pricePerYear && (
										<>
											<p>Select your assessment year(s)</p>
											<div className='flex gap-2 flex-wrap'>
												{years.map((year) => (
													<button
														key={year}
														className={`px-4 py-2 rounded-full text-sm ${
															service.selectedYears.includes(year)
																? "bg-[#FDF3F3] text-[#D82E2E]"
																: "bg-[#DDE2E9] text-grey-600"
														}`}
														onClick={() =>
															toggleYearSelection(service.id, year)
														}
													>
														{year}
													</button>
												))}
											</div>
										</>
									)}

									{/* Cost */}
									<div className='space-y-2 mb-3'>
										<label
											htmlFor={`total-cost-${service.id}`}
											className='font-bold'
										>
											Cost
										</label>
										<Input
											id={`total-cost-${service.id}`}
											type='text'
											value={`NGN ${service.totalCost.toLocaleString()}`}
											readOnly
											className='bg-[#F5F8FA]'
										/>
									</div>
								</div>
							))}
						</div>

						{/* Total Cost */}
						<div className='space-y-2 my-4'>
							<label htmlFor='total-cost' className='font-bold'>
								Total Cost
							</label>
							<Input
								id='total-cost'
								type='text'
								value={`NGN ${selectedServices
									.reduce((sum: any, s: any) => sum + s.totalCost, 0)
									.toLocaleString()}`}
								readOnly
								className='bg-[#F5F8FA]'
							/>
						</div>

						{/* Payment Button */}
						<Button
							variant='secondary'
							size='md'
							className='mt-4 w-full text-base'
							onClick={() => router.push("make-payment")}
						>
							Proceed to Payment
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderConfiguration;
