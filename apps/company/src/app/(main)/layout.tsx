// "use client";

// import React from "react";
// import { cn } from '@chainkeeping/ui'
// import { Topbar } from '@/pattern/common/templates/topbar';

// export const MainLayout = ({
//     children
// }: {
//     children: React.ReactNode
// }) => {
//     return (
//         <div className={cn(
//             'relative bg-accent w-screen min-h-svh h-fit flex flex-col gap-[12px] font-dmsans transition-all duration-200 ease-in-out',
//         )}>
//             <Topbar />
//             <main className='bg-inherit w-full h-fit flex flex-col items-center gap-y-[62px] lg:gap-y-[144px] mt-[var(--topbar-height)]'>
//                 <div className="w-full h-fit flex flex-col gap-y-[48px] lg:gap-y-[88px]">
//                     {children}
//                 </div>
//             </main>
//         </div>
//     )
// }

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
				"relative bg-accent w-screen min-h-svh h-fit flex flex-col  gap-[12px] font-dmsans transition-all duration-200 ease-in-out"
			)}
		>
			<Topbar />
			<main className='bg-inherit w-full h-full flex flex-col items-center sm:mt-[var(--topbar-height)]'>
				{children}
			</main>
		</div>
	);
}
