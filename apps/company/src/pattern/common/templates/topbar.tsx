"use client";

import { FC, useState } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { APP_ROUTES, AUTH_ROUTES } from "@/lib/routes";
import {
    BrandLogo, Button, NavigationMenu, NavigationMenuItem, NavigationMenuList, Sheet, SheetTrigger, TopbarMenuIcon, SheetContent, SheetHeader, SheetTitle, SheetDescription, Hidden, Accordion, AccordionItem, AccordionTrigger, AccordionContent, TopbarMenuCloseIcon
} from "@chainkeeping/ui";
import CustomNavLink from "../molecules/custom-nav-link";
import { QuickActionPopover } from "../organisms/quick-action-popover";
import { ProfileMenuDropdown } from "../organisms/profile-menu-dropdown";
import { INavigation } from "@/pattern/types";
import MobileCustomNavLink from '../molecules/mobile-custom-nav-link';
import { PageTitleWidget } from '../atoms/page-title-widget';

export const navigation: INavigation[] = [
    {
        title: "Dashboard",
        href: APP_ROUTES.dashboard,
    },
    {
        title: "Accounts",
        href: APP_ROUTES.accounts,
    },
    {
        title: "Transactions",
        href: APP_ROUTES.transactions,
    },
    {
        title: "Taxes",
        href: APP_ROUTES.taxes,
    },
    {
        title: "Reports",
        href: APP_ROUTES.reports,
    },
    {
        title: "Business",
        href: APP_ROUTES.business,
    },
    {
        title: "Practitioner",
        href: APP_ROUTES.practitioner,
    },
];

export const Topbar: FC = () => {
    const { push } = useRouter();
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const pathname = usePathname();

    console.log("PATHNAME: ", pathname)

    return (
        <div className='relative w-screen h-fit z-[25]'>
            <div className='hidden bg-white fixed inset-0 w-full h-[--topbar-height] lg:flex lg:items-center lg:justify-between px-0 md:px-8 border-b shadow'>
                {/* laptop/Desktop navigation */}
                <div className='relative h-[40px] w-full hidden lg:flex lg:items-center lg:justify-between'>
                    <div className='flex items-center gap-7'>
                        {/* Logo */}
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
            {/* Mobile Navigation */}
            <div className="lg:hidden fixed inset-0 bg-white w-full h-[56px] px-4 py-[14px] border-b shadow">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetHeader className="w-full h-full flex flex-row items-center justify-between space-y-0">
                        <div className='h-7 flex items-center gap-2'>
                            <SheetTrigger asChild>
                                <Button variant="icon" size="icon">
                                    <TopbarMenuIcon />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <PageTitleWidget />
                        </div>
                        <div className='h-full flex items-center gap-[27px]'>
                            <div className='flex items-center gap-0'>
                                <QuickActionPopover />
                                <ProfileMenuDropdown email="example@gmail.com" username="Convexity" />
                            </div>
                        </div>
                    </SheetHeader>
                    <SheetContent side="bottom" closeIcon={<TopbarMenuCloseIcon />} closeIconClassName="absolute top-[48px] right-[36px] rounded-full" className="bg-primary h-full w-screen text-white pt-12 pl-8 pr-9">
                        <SheetHeader>
                            <SheetTitle aria-hidden='true' className="hidden">Mobile navigation</SheetTitle>
                            <SheetDescription aria-hidden='true' className="hidden">
                                Navigation links for Mobile
                            </SheetDescription>
                        </SheetHeader>

                        <div className='w-full h-fit flex flex-col items-start gap-y-12'>
                            <NavigationMenu>
                                <NavigationMenuList className='h-full flex flex-col items-start gap-4'>
                                    {navigation.map(({ title, href }, idx) => (
                                        <div key={idx} className='h-full'>
                                            <NavigationMenuItem className='w-full h-full'>
                                                <MobileCustomNavLink href={href as string} title={title} toggleSheet={() => setIsSheetOpen(false)} />
                                            </NavigationMenuItem>
                                        </div>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            <Button size="lg" variant="secondary" onClick={() => push(AUTH_ROUTES.login)} className="w-full font-medium text-base">Log Out</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};
