"use client";

import { FC, ReactNode } from "react";

import { cn, SidebarProvider } from "@chainkeeping/ui";
import Sidebar from "../organisms/sidebar";
import { AppSidebar } from "../organisms/app-sidebar";

interface IProps {
	children: ReactNode
}

const PageWrapper: FC<IProps> = ({ children }) => {
	return (
		<div className={cn(
			'relative w-full h-full flex items-start transition-all duration-200 ease-in-out',
		)}>
			<div
				className={cn(
					"relative bg-accent w-full min-h-svh flex transition-all duration-200 ease-in-out"
				)}
			>
				{/* Sidebar */}
				<AppSidebar />

				{/* Main Content */}
				<main
					className='w-full pl-8 flex items-center justify-center ml-[var(--sidebar-width)] mt-[var(--topbar-height)] pt-8 mb-[88px] overflow-x-auto'
				>
					{children}
				</main>
			</div>
		</div>
	);
};

export default PageWrapper;