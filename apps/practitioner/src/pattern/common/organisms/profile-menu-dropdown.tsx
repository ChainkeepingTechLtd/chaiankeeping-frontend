"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Button,
	DropdownMenuGroup,
} from "@chainkeeping/ui";

import EditProfileMenuIcon from "../atoms/edit-profile-menu-icon";
import PricingMenuIcon from "../atoms/pricing-menu-icon";
import SettingsMenuIcon from "../atoms/settings-menu-icon";
import AccountQuickActionIcon from "../atoms/account-quick-action-icon";
import SupportMenuIcon from "../atoms/support-menu-icon";
import ExternalLinkIcon from "../atoms/external-link-icon";
import LogoutIcon from "../atoms/logout-icon";
import { INavigation } from "@/pattern/types";

interface ProfileMenuProps {
	username: string;
	email: string;
}

interface IMenuLinks extends INavigation {
	Icon: any;
	isExternalLink?: boolean;
}

const MenuLinks: IMenuLinks[] = [
	{
		title: "Edit Profile",
		href: "/settings/edit-profile",
		Icon: EditProfileMenuIcon,
	},
	{
		title: "Pricing",
		href: "/settings/plans",
		Icon: PricingMenuIcon,
	},
	{
		title: "Settings",
		href: "/settings",
		Icon: SettingsMenuIcon,
	},
];

export const ProfileMenuDropdown = ({ username, email }: ProfileMenuProps) => {
	const { push } = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='icon' size='icon'>
					<AccountQuickActionIcon className='max-sm:h-8 max-sm:w-8' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[240px] p-0' align='end'>
				<div className='h-[68px] flex items-center gap-[10px] p-4'>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white'>
						{username?.charAt(0)?.toUpperCase()}
					</div>
					<div className='flex flex-col'>
						<p className='text-sm font-medium'>{username}</p>
						<p className='text-xs text-[hsla(215,16%,47%,1)]'>{email}</p>
					</div>
				</div>
				<DropdownMenuSeparator className='my-0' />
				<DropdownMenuGroup className='py-4 space-y-[8px]'>
					{MenuLinks?.map(({ title, href, Icon }, idx) => (
						<DropdownMenuItem
							key={idx}
							className='h-[34px] flex items-center gap-[10px] cursor-pointer py-[6px] px-4 rounded-none'
							onClick={() => push(href as string)}
						>
							<Icon />
							<span className='text-base text-foreground font-dmsans'>
								{title}
							</span>
						</DropdownMenuItem>
					))}
					<DropdownMenuItem className='h-[34px] flex items-center justify-between gap-[10px] cursor-pointer py-[6px] px-4 rounded-none'>
						<div className='flex items-center gap-[10px]'>
							<SupportMenuIcon />
							<Link href='' className='text-base text-foreground font-dmsans'>
								Support
							</Link>
						</div>
						<ExternalLinkIcon />
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuItem className='bg-accent w-full h-[58px] flex items-center justify-between gap-[10px] cursor-pointer text-foreground text-base font-dmsans py-0 px-4 border-t rounded-none'>
					<span>Log out</span>
					<LogoutIcon />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
