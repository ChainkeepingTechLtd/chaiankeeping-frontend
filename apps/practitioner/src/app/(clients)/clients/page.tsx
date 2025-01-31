"use client";

import ClientsTemplate from "@/pattern/clients/templates/clients-template";
import DashboardTemplates from "@/pattern/dashboard/templates/dashboard-templates";

const page = () => {
	return (
		<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<ClientsTemplate />
		</div>
	);
};

export default page;
