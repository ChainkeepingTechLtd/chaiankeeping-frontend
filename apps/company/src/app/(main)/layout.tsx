"use client";

import { Topbar } from "@/pattern/common/templates/topbar";
import { cn } from "@chainkeeping/ui";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative bg-[#F8F9FA] w-screen min-h-svh h-fit flex flex-col  gap-[12px] font-dmsans transition-all duration-200 ease-in-out"
			)}
		>
			<Topbar />
			<main className='bg-[#F4F7F9] w-full h-fit flex flex-col items-center sm:mt-[var(--topbar-height)]'>
				{children}
			</main>
		</div>
	);
}
