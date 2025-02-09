"use client";
import AccountTransactionSection from "@/pattern/accounts/templates/account-section";
import BranchTemplate from "@/pattern/settings/templates/branch-template";
import ProfileSettings from "@/pattern/settings/templates/profiles-settings";
import TeamTemplate from "@/pattern/settings/templates/team-template";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Branches = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full mt-20 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<BranchTemplate />
			</div>
		</SidebarProvider>
	);
};

export default Branches;
