"use client";
import PlansTemplates from "@/pattern/pages/templates/plans-template";
import { Sidebar, SidebarProvider } from "@chainkeeping/ui";

const Plans = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<PlansTemplates />
			</div>
		</SidebarProvider>
	);
};

export default Plans;
