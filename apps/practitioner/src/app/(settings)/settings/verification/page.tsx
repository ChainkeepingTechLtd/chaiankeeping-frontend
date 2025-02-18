"use client";
import VerificationSettings from "@/pattern/settings/templates/verification-settings";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Verifications = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<VerificationSettings />
			</div>
		</SidebarProvider>
	);
};

export default Verifications;
