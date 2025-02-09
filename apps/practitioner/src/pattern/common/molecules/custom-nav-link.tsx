import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	NavigationMenuLink,
	navigationMenulinkStyleTwo,
} from "@chainkeeping/ui";
import { INavListItemProps } from "../../types";

const CustomNavLink = ({
	href,
	title,
	exact,
}: Omit<INavListItemProps, "description" | "icon">) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<>
			<Link
				href={href as string}
				legacyBehavior
				passHref
				className='w-fit h-full'
			>
				<NavigationMenuLink
					className={navigationMenulinkStyleTwo()}
					active={isActive}
				>
					{title}
				</NavigationMenuLink>
			</Link>
		</>
	);
};

export default CustomNavLink;
