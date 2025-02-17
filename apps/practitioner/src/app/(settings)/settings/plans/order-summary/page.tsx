"use client";

import OrderSummaryTemplates from "@/pattern/pages/templates/order-summary-templates";
import { SidebarProvider } from "@chainkeeping/ui";

const OrderSummary = () => {
	return (
		<SidebarProvider>
			<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
				<OrderSummaryTemplates />
			</div>
		</SidebarProvider>
	);
};

export default OrderSummary;
