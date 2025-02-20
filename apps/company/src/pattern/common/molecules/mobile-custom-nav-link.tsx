import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn, NavigationMenuLink, navigationMenulinkStyleTwo } from '@chainkeeping/ui'
import { INavListItemProps } from '@/pattern/types';

const MobileCustomNavLink: FC<Omit<INavListItemProps, "description" | "icon">> = ({
    href,
    title,
    exact,
    toggleSheet
}) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <>
            <Link href={href as string} legacyBehavior passHref onClick={() => toggleSheet} className='w-fit'>
                <NavigationMenuLink className={cn("!mt-0 ")} active={isActive} onClick={() => toggleSheet?.()}>
                    {title}
                </NavigationMenuLink>
            </Link>
        </>
    )
}

export default MobileCustomNavLink