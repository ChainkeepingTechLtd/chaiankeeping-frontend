"use client";
import ChangePasswordSettings from "@/pattern/settings/templates/change-password";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const ChangePassword = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<ChangePasswordSettings />
			</div>
		</SidebarProvider>
	);
};

export default ChangePassword;
