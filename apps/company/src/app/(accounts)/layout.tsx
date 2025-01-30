"use client";

import React, { ReactNode } from "react";
import PageWrapper from "@/pattern/accounts/templates/account-sidebar-wrapper";
import { Topbar } from "@/pattern/common/templates/topbar";
import { cn, SidebarProvider } from "@chainkeeping/ui";

interface IProps {
    children: ReactNode;
}

const AccountLayout = ({
    children,
}: IProps) => {
    return (
        <div
            className={cn(
                "relative bg-accent w-screen min-h-screen h-auto flex flex-col font-dmsans"
            )}
        >
            {/* Topbar */}
            <Topbar />

            {/* Main Content Wrapper */}
            <div className='flex w-full flex-1 overflow-hidden'>
                <PageWrapper>{children}</PageWrapper>
            </div>
        </div>
    );
}

export default AccountLayout