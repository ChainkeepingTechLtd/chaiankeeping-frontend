"use client";
import React from "react";
import { Links } from "./links";
import { cn } from "@chainkeeping/ui";

const SideBar = () => {
	return (
		<div
			className={cn(
				"w-72 bg-white  fixed flex h-full flex-col max-sm:hidden"
			)}
		>
			<div className='py-4 px-8 mt-16 border-b'>
				<h6 className='font-sen font-bold'>Settings</h6>
			</div>
			<div className='h-full  overflow-y-auto scrollbar-hide justify-between border-0 lg:h-auto lg:space-y-4'>
				<div className='flex flex-col'>
					<Links />
				</div>
			</div>
			{/* <div className='h-60 py-4 px-8 shadow-[0px_-4px_6px_rgba(0,0,0,0.1)]'>
				<Button variant='secondary' size='md' className='w-full text-md'>
					<AddIconW />
					Add Account
				</Button>
			</div> */}
		</div>
	);
};

export default SideBar;
