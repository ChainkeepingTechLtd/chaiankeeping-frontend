import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn, NavigationMenuLink, navigationMenulinkStyleTwo } from '@chainkeeping/ui'
import { INavListItemProps } from '@/pattern/types';

const CustomNavLink: FC<Omit<INavListItemProps, "description" | "icon">> = ({
    href,
    title,
    exact
}) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <>
            <Link href={href as string} legacyBehavior passHref className='w-fit'>
                <NavigationMenuLink className={cn(navigationMenulinkStyleTwo(), "!mt-0")} active={isActive}>
                    {title}
                </NavigationMenuLink>
            </Link>
        </>
    )
}

export default CustomNavLink