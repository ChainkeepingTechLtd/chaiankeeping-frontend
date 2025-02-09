"use client";
import TaxSettingsSettings from "@/pattern/settings/templates/tax-settings";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const ChangePassword = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<TaxSettingsSettings />
			</div>
		</SidebarProvider>
	);
};

export default ChangePassword;
