import React from "react";
import Link from "next/link";
import {
	NavigationMenuLink,
	navigationMenuListItemStyle,
} from "@chainkeeping/ui";
import { usePathname } from "next/navigation";
import { INavListItemProps } from "../../types";

const NavListItem = ({
	href,
	icon,
	title,
	description,
	exact,
	className,
	...props
}: INavListItemProps) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	return (
		<>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink
					className={navigationMenuListItemStyle()}
					active={isActive}
				>
					<div className='w-full h-full flex items-start gap-x-[9px] hover:mt-1 transition-all'>
						<div>{icon}</div>

						<div className='flex flex-col gap-2'>
							<h4 className='text-base text-foreground font-bold'>{title}</h4>
							<p className='text-sm text-[hsla(215,23%,40%,1)] font-normal'>
								{description}
							</p>
						</div>
					</div>
				</NavigationMenuLink>
			</Link>
		</>
	);
};

export default NavListItem;
