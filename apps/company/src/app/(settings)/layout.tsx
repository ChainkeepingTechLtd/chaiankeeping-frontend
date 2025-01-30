"use client";

import { Topbar } from "@/pattern/common/templates/topbar";
import { AppSidebar } from "@/pattern/settings/organisms/app-sidebar";
import { SidebarProvider } from "@chainkeeping/ui";

const SettingsLayout = ({
	children,
}: {
	children: any;
}) => {
	return (
		<SidebarProvider
		>
			<AppSidebar />
			<div className='relative bg-accent w-screen min-h-screen h-fit flex flex-col font-dmsans'>
				<div className="h-full flex flex-col flex-1 overflow-hidden">
					<Topbar />
					<main
						className='bg-accent w-full pl-8 flex items-center justify-center ml-[--sidebar-width] mt-[--topbar-height] pt-8 mb-[88px] overflow-auto'
					>{children}
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}

export default SettingsLayout