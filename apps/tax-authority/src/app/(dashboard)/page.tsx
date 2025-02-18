"use client";

import DashboardTemplates from "@/pattern/dashboard/templates/dashboard-templates";

const page = () => {
  return (
    <div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
      <DashboardTemplates />
    </div>
  );
};

export default page;
