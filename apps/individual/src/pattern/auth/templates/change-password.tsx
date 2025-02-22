import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, Button, Input } from "@chainkeeping/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
	const router = useRouter(); // Initialize useRouter

	// Function to handle login click
	const handleChangePassword = () => {
		// You can add your login logic here (e.g., validation, API call, etc.)

		// Redirect to the dashboard page after successful login
		router.push("/dashboard");
	};
	return (
		<div className='sm:mt-10 w-full flex flex-col sm:items-center'>
			<Link href={APP_ROUTES.index} className='max-sm:hidden'>
				<BrandLogo />
			</Link>
			<div className='bg-[#FFFFFF] sm:shadow-md w-[438px] max-sm:w-screen p-6 sm:mt-10 rounded-lg'>
				<Link href={APP_ROUTES.index} className='sm:hidden py-10'>
					<BrandLogo />
				</Link>

				<p className='max-sm:mt-14 font-bold'>Change password</p>
				<p className='mt-4  text-sm text-grey-500'>
					Can’t remember your password? enter your registered email address and
					we’ll send you a password reset link.
				</p>
				<div className='w-full border-b my-2 flex border-[#21293412]'></div>

				<div className='space-y-2'>
					<label htmlFor='email' className='text-sm'>
						New Password
					</label>
					<Input
						id='password'
						type='password'
						placeholder='enter your new password'
					/>
				</div>
				<div className='space-y-2 my-2'>
					<label htmlFor='email' className='text-sm'>
						Confirm Password
					</label>
					<Input
						id='password'
						type='password'
						placeholder='enter your new password'
					/>
				</div>

				<Button
					variant='default'
					size='md'
					className='w-full mt-4'
					onClick={handleChangePassword}
				>
					Change password{" "}
				</Button>
			</div>
		</div>
	);
};

export default ChangePassword;
