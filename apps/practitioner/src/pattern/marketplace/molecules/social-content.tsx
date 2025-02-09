import React, { useState } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/lib/routes";
import {
	BrandLogo,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	SubmitButton,
	Textarea,
} from "@chainkeeping/ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import EmailInput from "@/pattern/accounts/molecules/email-input";
import UploadIcon from "../atoms/upload-icon";
import TwitterIcon from "../atoms/twitter-icon";
import LinkedInIcon from "../atoms/linkedin-icon";
import FacebookIcon from "../atoms/facebook-icon";
import InstagramIcon from "../atoms/instagram-icon";

const CreateAccountFormSchema = z.object({
	email: z
		.string()
		.email("Invalid email address") // Ensures it's a valid email format
		.min(1, "Email is required"), // Ensures it's not empty
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long") // Minimum length
		.max(64, "Password must not exceed 64 characters") // Maximum length
		.regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase
		.regex(/\d/, "Password must contain at least one number") // At least one number
		.regex(
			/[@$!%*?&#]/,
			"Password must contain at least one special character"
		), // At least one special character
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
		.min(1, "Phone Number is required"),
	country: z.string().min(1, "Country is required"),
	state: z.string().min(1, "State of residence is required"),
});

const Socials: Array<"Apple" | "Google"> = ["Apple", "Google"];

const SocialContent = () => {
	const { push } = useRouter();
	const pathname = usePathname();
	const [countryName, setCountryName] = useState<string>("");
	const [stateName, setStateName] = useState<string>("");
	const params = useParams<{
		slug: "" | "personal" | "company" | "practitioners";
	}>();

	const defaultValues = {
		email: "",
		password: "",
	};

	const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
		resolver: zodResolver(CreateAccountFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: defaultValues,
	});

	const {
		handleSubmit,
		formState: { errors, isDirty },
	} = form;

	const onSubmit = (data: z.infer<typeof CreateAccountFormSchema>) => {
		console.log("Submitted: ", data);
		push(`${pathname}?additional-info=true`);
	};

	const [replyText, setReplyText] = useState("");
	return (
		<div className='w-fit flex   flex-col items-center '>
			<Card className='shadow-none w-fit max-w-full lg:w-full h-fit p-0  flex flex-col  sahdow-md border-none'>
				<CardContent className='w-full h-full flex flex-col  !mt-0'>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='flex flex-col xl:min-w-[430px] mb-4 w-full gap-4'>
								{/* Email */}

								<div className='flex flex-col gap-2'>
									<label className='text-gray-700 font-medium'>Twitter</label>
									<div className='flex items-center border h-[48px] rounded-lg overflow-hidden ring-offset-background hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
										<div className='px-3 xl:min-w-[216px]  gap-2 text-gray-500 bg-accent h-12 flex items-center '>
											<TwitterIcon />
											https://twitter.com/
										</div>
										<input
											type='text'
											placeholder='yourwebsite.com'
											className='w-full p-2 outline-none placeholder-grey-200'
										/>
									</div>
								</div>

								<div className='flex flex-col gap-2'>
									<label className='text-gray-700 font-medium'>Linkedin</label>
									<div className='flex  items-center border h-[48px] rounded-lg overflow-hidden ring-offset-background hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
										<div className='px-3 xl:min-w-[216px]  gap-2 text-gray-500 bg-accent h-12 flex items-center '>
											<LinkedInIcon />
											https://linkedin.com/in/
										</div>
										<input
											type='text'
											placeholder='yourwebsite.com/assets/logo'
											className='w-full p-2 outline-none placeholder-grey-200 '
										/>
									</div>
								</div>

								<div className='flex flex-col gap-2'>
									<label className='text-gray-700 font-medium'>Facebook</label>
									<div className='flex  items-center border h-[48px] rounded-lg overflow-hidden ring-offset-background hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
										<div className='px-3 xl:min-w-[216px]  gap-2 text-gray-500 bg-accent h-12 flex items-center '>
											<FacebookIcon />
											https://facebook.com/
										</div>
										<input
											type='text'
											placeholder='yourwebsite.com/assets/logo'
											className='w-full p-2 outline-none placeholder-grey-200 '
										/>
									</div>
								</div>

								<div className='flex flex-col gap-2'>
									<label className='text-gray-700 font-medium'>Instagram</label>
									<div className='flex  items-center border h-[48px] rounded-lg overflow-hidden ring-offset-background hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
										<div className='px-3 xl:min-w-[216px]  gap-2 text-gray-500 bg-accent h-12 flex items-center '>
											<InstagramIcon />
											https://instagram.com/
										</div>
										<input
											type='text'
											placeholder='yourwebsite.com/assets/logo'
											className='w-full p-2 outline-none placeholder-grey-200 '
										/>
									</div>
								</div>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default SocialContent;
