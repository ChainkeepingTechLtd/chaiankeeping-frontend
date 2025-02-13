import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
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
import { QuickActionPopover } from "../organisms/quick-action-popover";
import { ProfileMenuDropdown } from "../organisms/profile-menu-dropdown";
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu
import HamburgerMenu from "../atoms/nav-icons/hamburger-menu";

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
		title: "Clients",
		href: "/clients",
	},
	{
		title: "Taxes",
		href: "/taxes",
	},
	{
		title: "Team",
		href: "/team",
	},
	{
		title: "Marketplace",
		href: "/marketplace",
	},
];

const Topbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname(); // Get the current pathname

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Get the current page name based on the route
	const currentPage =
		navigation.find((nav) => nav.href === pathname)?.title || "Dashboard";

	return (
		<div className='bg-background fixed inset-0 w-full h-[var(--topbar-height)] border-b flex items-center justify-center px-[24px] md:px-0 z-[25]'>
			<div className='h-full relative md:px-8 w-full flex items-center justify-between'>
				{/* Left Section: Brand Logo and Navigation */}
				<div className='flex items-center gap-7'>
					<Link href={APP_ROUTES.index} className='max-sm:hidden'>
						<BrandLogo />
					</Link>

					{/* Hamburger Menu for Mobile */}
					<button
						onClick={toggleMobileMenu}
						className='md:hidden  focus:outline-none'
					>
						{isMobileMenuOpen ? (
							<div className='bg-destructive-foreground p-1 rounded text-destructive'>
								<X size={20} />
							</div>
						) : (
							<div className='flex items-center gap-2'>
								<HamburgerMenu />
								<p>{currentPage}</p> {/* Display the current page name */}
							</div>
						)}
					</button>

					{/* Desktop Navigation */}
					<div className='h-[22px] pl-7 border-l-2 hidden md:flex items-center gap-[27px]'>
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

				{/* Right Section: Quick Actions and Profile */}
				<div className='h-full flex items-center gap-[27px]'>
					<div className='flex items-center md:gap-4 gap-1'>
						<QuickActionPopover />
						<ProfileMenuDropdown
							email='example@gmail.com'
							username='Convexity'
						/>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`${
						isMobileMenuOpen ? "block" : "hidden"
					} md:hidden fixed top-[var(--topbar-height)] left-0 w-full h-[calc(100vh-var(--topbar-height))] bg-background z-20 border-t`}
				>
					<NavigationMenu>
						<NavigationMenuList className='flex flex-col h-full'>
							{navigation.map(({ title, content, href }, idx) => (
								<div key={idx} className='w-full'>
									<Hidden isVisible={content ? true : false}>
										<NavigationMenuItem className='w-full'>
											<NavigationMenuTrigger className='py-2 px-3 w-full text-left'>
												{title}
											</NavigationMenuTrigger>
											<NavigationMenuContent asChild>
												{content}
											</NavigationMenuContent>
										</NavigationMenuItem>
									</Hidden>

									<Hidden isVisible={!content}>
										<NavigationMenuItem className='w-full'>
											<CustomNavLink href={href as string} title={title} />
										</NavigationMenuItem>
									</Hidden>
								</div>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	);
};

export { Topbar };
