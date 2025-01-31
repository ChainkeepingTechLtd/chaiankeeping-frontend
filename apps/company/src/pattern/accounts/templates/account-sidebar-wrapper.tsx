"use client";

import React, { ReactNode } from "react";

import { cn, SidebarProvider } from "@chainkeeping/ui";
import Sidebar from "../organisms/sidebar";

interface IProps {
	children: ReactNode;
}

const PageWrapper = ({ children }: IProps) => {
	return (
		<>
			<SidebarProvider>
				<div
					className={cn(
						"relative bg-accent w-full min-h-screen flex transition-all duration-200 ease-in-out"
					)}
				>
					{/* Sidebar */}
					<Sidebar />

					{/* Main Content */}
					<main
						className='w-full flex items-center justify-center ml-[var(--sidebar-width)] pt-[var(--topbar-height)] pl-8 pb-[88px] overflow-x-auto'
					>
						{children}
					</main>
				</div>
			</SidebarProvider>
		</>
	);
};

export default PageWrapper;
