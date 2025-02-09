import React, { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@chainkeeping/ui";
import TwoFAModal from "../organisms/2FA-modal";
import EmailAuthModal from "../organisms/email-auth-modal";
import SmsAuthModal from "../organisms/SMS-auth-modal";
import ToggleIcon from "../atoms/toggle-icon";

const SecuritySettings = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
	const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	// Individual toggle states
	const [googleAuthToggled, setGoogleAuthToggled] = useState(false);
	const [emailAuthToggled, setEmailAuthToggled] = useState(false);
	const [smsAuthToggled, setSmsAuthToggled] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openEmailModal = () => setIsEmailModalOpen(true);
	const closeEmailModal = () => setIsEmailModalOpen(false);

	const openSmsModal = () => setIsSmsModalOpen(true);
	const closeSmsModal = () => setIsSmsModalOpen(false);

	return (
		<div className='w-fit flex pt-24 flex-col items-center px-[18px] pb-[144px]'>
			<Card className='bg-white w-fit max-w-[800px] lg:w-[800px] h-fit flex flex-col p-6 rounded-[8px] shadow-md border-none'>
				<CardHeader className='h-fit lg:h-[30px] flex items-start justify-start pb-2'>
					<CardTitle className='text-base font-bold font-sen text-grey-300'>
						SET UP, ENABLE OR DISABLE 2-FACTOR AUTHENTICATION
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full h-full flex flex-col !mt-0'>
					<form className='flex flex-col gap-2 mt-5'>
						{/* Google Authenticator */}
						<div className='flex justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>Google Authenticator</h6>
								<p className='text-grey-400 text-sm'>
									Use the Google Authenticator app to generate one-time security
									codes.
								</p>
							</div>
							{isAuthenticated ? (
								<ToggleIcon
									toggled={googleAuthToggled}
									onToggle={() => setGoogleAuthToggled(!googleAuthToggled)}
								/>
							) : (
								<Button
									onClick={openModal}
									size='sm'
									variant='secondaryOutline'
									type='button'
									className='text-base font-medium mt-[8px]'
								>
									Set up
								</Button>
							)}
						</div>

						{/* Email Authentication */}
						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>Email</h6>
								<p className='text-grey-400 text-sm'>
									Send one-time password to your email.
								</p>
							</div>
							{isAuthenticated ? (
								<ToggleIcon
									toggled={emailAuthToggled}
									onToggle={() => setEmailAuthToggled(!emailAuthToggled)}
								/>
							) : (
								<Button
									onClick={openEmailModal}
									size='sm'
									variant='secondaryOutline'
									type='button'
									className='text-base font-medium mt-[8px]'
								>
									Set up
								</Button>
							)}
						</div>

						{/* SMS Authentication */}
						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>
									Text Message (SMS)
									<span className='text-destructive'>*</span>
								</h6>
								<p className='text-grey-400 text-sm'>
									Add a mobile phone number for authentication.
								</p>
							</div>
							{isAuthenticated ? (
								<ToggleIcon
									toggled={smsAuthToggled}
									onToggle={() => setSmsAuthToggled(!smsAuthToggled)}
								/>
							) : (
								<Button
									onClick={openSmsModal}
									size='sm'
									variant='secondaryOutline'
									type='button'
									className='text-base font-medium mt-[8px]'
								>
									Set up
								</Button>
							)}
						</div>

						{/* YubiKey */}
						<div className='flex items-center justify-between w-full'>
							<div className='flex-col gap-1'>
								<h6 className='font-medium'>YubiKey</h6>
								<p className='text-grey-400 text-sm'>
									Set up an additional layer of authentication with YubiKey.
								</p>
							</div>
							<Button
								size='sm'
								variant='primaryOutline'
								type='submit'
								className='text-base font-medium mt-[8px] opacity-50'
							>
								Set up
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
			<TwoFAModal isOpen={isModalOpen} onClose={closeModal} />
			<EmailAuthModal isOpen={isEmailModalOpen} onClose={closeEmailModal} />
			<SmsAuthModal isOpen={isSmsModalOpen} onClose={closeSmsModal} />
		</div>
	);
};

export default SecuritySettings;
