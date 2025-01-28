"use client";

import { Topbar } from "@/pattern/common/templates/topbar";
import PageWrapper from "@/pattern/settings/templates/settings-sidebar-wrapper";

const SettingsLayout = ({
	children,
}: {
	children: any;
}) => {
	return (
		<div className='relative bg-accent w-screen min-h-screen h-auto flex flex-col font-dmsans'>
			{/* Topbar */}
			<Topbar />

			{/* Main Content Wrapper */}
			<div className='flex w-full flex-1 overflow-hidden'>
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
}

export default SettingsLayout