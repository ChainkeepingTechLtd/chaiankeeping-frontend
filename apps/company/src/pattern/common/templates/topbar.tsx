"use client";

import React from 'react';
import Link from "next/link";
import { APP_ROUTES } from "@/lib/routes";
import { BrandLogo, NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@chainkeeping/ui";
import CustomNavLink from "../molecules/custom-nav-link";
import { QuickActionPopover } from "../organisms/quick-action-popover";
import { ProfileMenuDropdown } from "../organisms/profile-menu-dropdown";
import { INavigation } from "@/pattern/types";

const navigation: INavigation[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
    },
    {
        title: "Accounts",
        href: "/accounts",
    },
    {
        title: "Transactions",
        href: "/transactions",
    },
    {
        title: "Taxes",
        href: "/taxes",
    },
    {
        title: "Reports",
        href: "/reports",
    },
    {
        title: "Business",
        href: "/business",
    },
    {
        title: "Practitioner",
        href: "/practitioner",
    },
];

export const Topbar = () => {
    return (
        <div className='bg-white fixed inset-0 w-full h-[--topbar-height] flex items-center justify-between px-0 md:px-8 border-b z-[25]'>
            <div className='relative h-[40px] w-full flex items-center justify-between'>
                <div className='flex items-center gap-7'>
                    <Link href={APP_ROUTES.index}>
                        <BrandLogo />
                    </Link>

                    <div className='h-[22px] pl-7  border-l-2  flex items-center gap-[27px]'>
                        {/* Navigation */}
                        <NavigationMenu>
                            <NavigationMenuList className='h-full'>
                                {navigation.map(({ title, href }, idx) => (
                                    <div key={idx} className='h-full'>
                                        <NavigationMenuItem className='h-full'>
                                            <CustomNavLink href={href as string} title={title} />
                                        </NavigationMenuItem>
                                    </div>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className='h-full flex items-center gap-[27px]'>
                    <div className='flex items-center gap-4'>
                        <QuickActionPopover />
                        <ProfileMenuDropdown email="example@gmail.com" username="Convexity" />
                    </div>
                </div>
            </div>
        </div>
    );
};
