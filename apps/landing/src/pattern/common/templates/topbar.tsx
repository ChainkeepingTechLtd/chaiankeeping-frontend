import { ReactElement, useState } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, BrandLogo, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Hidden, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, TopbarMenuIcon, TopbarMenuCloseIcon } from "@chainkeeping/ui";
// import SolutionsNavContent from "../organisms/solutions-nav-content";
// import IntegrationsNavContent from "../organisms/integrations-nav-content";
import CustomNavLink from "../molecules/custom-nav-link";
import ResourcesNavContent from "../organisms/resources-nav-content";
import { CountrySelect } from "../organisms/country-selector";
import Link from "next/link";
import { APP_ROUTES, AUTH_ROUTES, RESOURCES_ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { getEnvironment } from "@/lib/helpers/get-environment";

export const currentEnvironment = getEnvironment()

export interface INavigation {
    title: string;
    href?: string;
    content?: ReactElement;
    subLinks?: { title: string, link: string }[]
}

const navigation: INavigation[] = [
    // {
    //     title: "Solutions",
    //     content: <SolutionsNavContent />
    // },
    {
        title: "Solutions",
        href: APP_ROUTES.solutions
    },
    // {
    //     title: "Integrations",
    //     content: <IntegrationsNavContent />
    // },
    {
        title: "Resources",
        content: <ResourcesNavContent />,
        subLinks: [
            {
                title: "Tax Guide",
                link: RESOURCES_ROUTES.taxGuide
            },
            {
                title: "Blog",
                link: RESOURCES_ROUTES.blog
            },
            {
                title: "Financial Reporting Guide",
                link: RESOURCES_ROUTES.financialReportingGuide
            },
            {
                title: "Support",
                link: RESOURCES_ROUTES.support
            },
            {
                title: "Glossary",
                link: RESOURCES_ROUTES.glossary
            }
        ]
    },
    {
        title: "Integrations",
        href: APP_ROUTES.integrations,
    },
    {
        title: "Pricing",
        href: APP_ROUTES.pricing,
    },
    {
        title: "About",
        href: APP_ROUTES.about,
    },
    {
        title: "Contact us",
        href: APP_ROUTES.contact,
    }
]

const Topbar = () => {
    const { push } = useRouter();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-background fixed inset-0 w-screen h-[var(--topbar-height)] flex items-center justify-between px-[24px] lg:px-0 shadow z-[25]">
            <div className='w-full h-full relative lg:container flex items-center justify-between'>
                {/* Logo */}
                <Link href={APP_ROUTES.index}>
                    <BrandLogo className="w-[143px] h-[24px] lg:w-[179px] lg:h-[30px]" />
                </Link>

                {/* laptop/Desktop navigation */}
                <div className="hidden h-full lg:flex lg:items-center lg:gap-[27px]">
                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="h-[var(--topbar-height)]" >
                            {navigation.map(({ title, content, href }, idx) => (
                                <div key={idx} className="h-full">
                                    <Hidden isVisible={content ? true : false} >
                                        <NavigationMenuItem className="h-full">
                                            <NavigationMenuTrigger className="py-2 px-3">{title}</NavigationMenuTrigger>
                                            <NavigationMenuContent asChild>
                                                {content}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </Hidden>

                                    <Hidden isVisible={!content} >
                                        <NavigationMenuItem className="h-full">
                                            <CustomNavLink href={href as string} title={title} />
                                        </NavigationMenuItem>
                                    </Hidden>
                                </div>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-2">
                        {/* Get Early Access */}
                        <Hidden isVisible={currentEnvironment === "STAGING" ? true : false}>
                            <Button variant="secondary" size="sm" className="w-full font-medium text-base" onClick={()=>push(APP_ROUTES.joinWaitlist)} >Get early access</Button>
                        </Hidden>
                        <Hidden isVisible={currentEnvironment !== "STAGING" ? true : false}>
                            {/* Log In */}
                            <Button variant="ghost" size="sm" onClick={() => push(AUTH_ROUTES.login)} className="w-fit font-semibold" >Log In</Button>
                            {/* Sign up */}
                            <Button variant="secondary" size="sm" onClick={() => push(APP_ROUTES.signup)} >Sign up</Button>
                        </Hidden>

                        {/* Select Country */}
                        <CountrySelect />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="icon" size="icon">
                                <TopbarMenuIcon />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" closeIcon={<TopbarMenuCloseIcon />} closeIconClassName="absolute top-[48px] right-[36px] rounded-full" className="bg-primary h-full w-screen text-white pt-12 pl-8 pr-9">
                            <SheetHeader>
                                <SheetTitle aria-hidden='true' className="hidden">Mobile navigation</SheetTitle>
                                <SheetDescription aria-hidden='true' className="hidden">
                                    Navigation links for Mobile
                                </SheetDescription>
                            </SheetHeader>

                            <nav className="h-full flex flex-col gap-4">
                                {navigation.map(({ title, subLinks, href }, idx) => (
                                    <div key={idx} className="h-[40px]">
                                        <Hidden isVisible={!subLinks} >
                                            <Link key={idx} href={href!} className="h-full " onClick={() => setIsOpen(false)}>
                                                {title}
                                            </Link>
                                        </Hidden>
                                        <Hidden isVisible={subLinks ? true : false} >
                                            <Accordion type='single' collapsible className='bg-primary w-full min-h-[40px] h-fit border-none'>
                                                <AccordionItem value={`${title}`} className='w-full h-fit space-y-[12px]  border-none outline-none shadow-sm'>
                                                    <AccordionTrigger className='text-white text-base text-left font-dmsans font-medium border-b-0 hover:no-underline py-0'>{title}</AccordionTrigger>
                                                    <AccordionContent className='bg-primary h-fit flex flex-col text-base text-white text-left shadow-sm'>
                                                        <div className="bg-primary w-fit h-fit flex flex-col gap-y-4 pl-4 pr-3 pb-3 rounded-md z-50">
                                                            {subLinks?.map(({ link, title }, idx) => (
                                                                <Link key={idx} href={link} className="h-full" onClick={() => setIsOpen(false)}>
                                                                    {title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </Hidden>
                                    </div>
                                ))}
                                <Hidden isVisible={currentEnvironment !== "STAGING" ? true : false}>
                                    {/* Log In */}
                                    <Button size="lg" onClick={() => push(AUTH_ROUTES.login)} className="w-full font-medium text-base" >Log In</Button>
                                    {/* Sign Up */}
                                    <Button variant="secondary" size="lg" className="w-full font-medium text-base" onClick={() => push(APP_ROUTES.signup)} >Sign up</Button>
                                </Hidden>
                                {/* Get Early Access */}
                                <Hidden isVisible={currentEnvironment === "STAGING" ? true : false}>
                                    <Button variant="secondary" size="lg" className="w-full font-medium text-base" onClick={()=>push(APP_ROUTES.joinWaitlist)} >Get early access</Button>
                                </Hidden>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div >
        </div >
    )
}

export { Topbar }