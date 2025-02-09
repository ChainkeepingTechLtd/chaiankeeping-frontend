"use client";
import MessageTemplate from "@/pattern/message/templates/message-template";

const page = () => {
	return (
		<div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<MessageTemplate />
		</div>
	);
};

export default page;
