import { APP_ROUTES } from "@/lib/routes";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@chainkeeping/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const MenuItems = [
    { title: "Profile", href: "/settings" },
    { title: "Password", href: "/settings/change-password" },
    { title: "Contact person", href: "/settings/contact-person" },
    {
        title: "Tax settings",
        href: "/settings/tax-settings",
    },
    { title: "Payroll settings", href: "/settings/contact-person" },
    { title: "Team & Roles", href: "/settings/team-and-roles" },
    { title: "Ledger settings", href: "/settings/ledger-settings" },
    { title: "Security", href: "/settings/security" },

    { title: "Billing", href: "/settings/billing" },
    { title: "Plans", href: "/settings/plans" },
    { title: "Verification", href: "/settings/verification" },
];

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar variant="floating" className="pt-[140px]" >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="bg-sidebar min-h-[394px] w-fit pl-[14px] pr-[22px] space-y-[12px] py-5 border-r-2">
                            {MenuItems.map(({ href, title }) => (
                                <SidebarMenuItem key={title}>
                                    <SidebarMenuButton isActive={href === '/' ? pathname === href : pathname.startsWith(href)} asChild={true} className="h-fit text-base data-[active=true]:bg-transparent data-[active=true]:font-medium data-[active=true]:text-primary p-2">
                                        <Link href={href} className="w-full flex items-center gap-x-3 text-left font-dmsans" >
                                            <span className="whitespace-nowrap">{title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>
    )
}
