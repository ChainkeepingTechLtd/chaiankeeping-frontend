"use client";
import AccountTransactionSection from "@/pattern/accounts/templates/account-section";
import ProfileSettings from "@/pattern/settings/templates/profiles-settings";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Settings = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<ProfileSettings />
			</div>
		</SidebarProvider>
	);
};

export default Settings;
