import { ReactElement } from "react";
import {
	BrandLogo,
	Hidden,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@chainkeeping/ui";
import CustomNavLink from "../molecules/custom-nav-link";

import Link from "next/link";
import { APP_ROUTES } from "@/lib/routes";
import QuickActionIcon from "../atoms/quick-action-icon";
import UserProfileIcon from "../atoms/user-profile-icon";
import { QuickActionPopover } from "../organisms/quick-action-popover";
import { ProfileMenuDropdown } from "../organisms/profile-menu-dropdown";

interface INavigation {
	title: string;
	href?: string;
	content?: ReactElement;
}

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
		title: "Bulk Payment",
		href: "/bulk-payments",
	},
	{
		title: "Practitioner",
		href: "/practitioner",
	},
];

const Topbar = () => {
	return (
		<div className='bg-background fixed inset-0 w-full h-[var(--topbar-height)] border-b flex items-center justify-center px-[24px] md:px-0  z-[25]'>
			<div className='h-full relative md:px-8 w-full flex items-center justify-between'>
				<div className='flex items-center  gap-7'>
					<Link href={APP_ROUTES.index}>
						<BrandLogo />
					</Link>

					<div className='h-[22px] pl-7  border-l-2  flex items-center gap-[27px]'>
						{/* Navigation */}
						<NavigationMenu>
							<NavigationMenuList className='h-[var(--topbar-height)]'>
								{navigation.map(({ title, content, href }, idx) => (
									<div key={idx} className='h-full'>
										<Hidden isVisible={content ? true : false}>
											<NavigationMenuItem className='h-full'>
												<NavigationMenuTrigger className='py-2 px-3'>
													{title}
												</NavigationMenuTrigger>
												<NavigationMenuContent asChild>
													{content}
												</NavigationMenuContent>
											</NavigationMenuItem>
										</Hidden>

										<Hidden isVisible={!content}>
											<NavigationMenuItem className='h-full'>
												<CustomNavLink href={href as string} title={title} />
											</NavigationMenuItem>
										</Hidden>
									</div>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>

				<div className='h-full flex items-center gap-[27px]'>
					<div className='flex items-center gap-4'>
						<QuickActionPopover />
						<ProfileMenuDropdown
							email='example@gmail.com'
							username='Convexity'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Topbar };
