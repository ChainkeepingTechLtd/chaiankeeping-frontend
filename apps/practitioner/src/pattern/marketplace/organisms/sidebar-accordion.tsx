import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
	Card,
	CardContent,
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProfileContent from "../molecules/profile-content";
import PaymentContent from "../molecules/payment-content";
import SocialContent from "../molecules/social-content";

const CreateAccountFormSchema = z.object({
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.max(64, "Password must not exceed 64 characters")
		.regex(/[a-z]/, "Password must contain at least one lowercase letter")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(/\d/, "Password must contain at least one number")
		.regex(
			/[@$!%*?&#]/,
			"Password must contain at least one special character"
		),
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
	country: z.string().min(1, "Country is required"),
	state: z.string().min(1, "State of residence is required"),
});

const AccordionItem = ({
	title,
	children,
	isOpen,
	onClick,
}: {
	title: string;
	children: React.ReactNode;
	isOpen: boolean;
	onClick: () => void;
}) => {
	const [maxHeight, setMaxHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen && contentRef.current) {
			setMaxHeight(contentRef.current.scrollHeight);
		} else {
			setMaxHeight(0);
		}
	}, [isOpen]);

	return (
		<div className='border-b'>
			<button
				onClick={onClick}
				className='w-full flex justify-between items-center px-4 py-3 bg-[#F8F9FA] mb-4 transition-all duration-300'
			>
				<span className='font-semibold'>{title}</span>
				{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
			</button>
			<div
				ref={contentRef}
				className='overflow-hidden transition-all duration-300 ease-in-out'
				style={{ maxHeight: `${maxHeight}px` }}
			>
				<div className='py-2 bg-white'>{children}</div>
			</div>
		</div>
	);
};

const SidebarAccordion = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const defaultValues = { email: "", password: "" };
	const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
		resolver: zodResolver(CreateAccountFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors },
	} = form;

	const onSubmit = (data: z.infer<typeof CreateAccountFormSchema>) => {
		console.log("Submitted: ", data);
		push(`${pathname}?additional-info=true`);
	};

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='transition-all duration-300 ease-in-out bg-white shadow-lg min-w-[465px] rounded-lg'>
			<div className='mt-20 p-4'>
				<AccordionItem
					title='Services'
					isOpen={openIndex === 0}
					onClick={() => toggleAccordion(0)}
				>
					<p>Select services you offer and add the costs.</p>
					<div className='space-y-2'>
						<div className='flex gap-2 items-center mt-2'>
							<Checkbox />
							<p>Tax Management</p>
						</div>
						<Card className='w-full border-none shadow-none p-0'>
							<CardContent className='w-full'>
								<Form {...form}>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='grid grid-cols-2 gap-4'>
											<FormField
												name='firstName'
												render={({ field }) => (
													<FormItem className='w-full grid gap-2'>
														<FormControl>
															<Input
																placeholder='NGN 0.00'
																type='text'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<Select>
												<SelectTrigger className='h-[48px]'>
													<SelectValue placeholder='Per Month' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='monthly'>Per Month</SelectItem>
													<SelectItem value='yearly'>Per Year</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</form>
								</Form>
							</CardContent>
						</Card>

						<div className='flex gap-2 items-center mt-6'>
							<Checkbox />
							<p>Financial Reporting</p>
						</div>
						<Card className='w-full border-none shadow-none p-0'>
							<CardContent className='w-full'>
								<Form {...form}>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='grid grid-cols-2 gap-4'>
											<FormField
												name='firstName'
												render={({ field }) => (
													<FormItem className='w-full grid gap-2'>
														<FormControl>
															<Input
																placeholder='NGN 0.00'
																type='text'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<Select>
												<SelectTrigger className='h-[48px]'>
													<SelectValue placeholder='Per Month' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='monthly'>Per Month</SelectItem>
													<SelectItem value='yearly'>Per Year</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</form>
								</Form>
							</CardContent>
						</Card>
					</div>
				</AccordionItem>

				<AccordionItem
					title='Profiles'
					isOpen={openIndex === 1}
					onClick={() => toggleAccordion(1)}
				>
					<ProfileContent />
				</AccordionItem>

				<AccordionItem
					title='Payments'
					isOpen={openIndex === 2}
					onClick={() => toggleAccordion(2)}
				>
					<PaymentContent />
				</AccordionItem>

				<AccordionItem
					title='Socials'
					isOpen={openIndex === 3}
					onClick={() => toggleAccordion(3)}
				>
					<SocialContent />
				</AccordionItem>
			</div>
		</div>
	);
};

export default SidebarAccordion;
