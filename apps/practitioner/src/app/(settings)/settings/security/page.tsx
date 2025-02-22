"use client";
import SecuritySettings from "@/pattern/settings/templates/security";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const ChangePassword = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<SecuritySettings />
			</div>
		</SidebarProvider>
	);
};

export default ChangePassword;
