import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@chainkeeping/ui'
import { INavigation } from '@/pattern/common/templates/topbar'
import FAQsCustomNavLink from '../molecules/faqs-nav-link'

const navigation: INavigation[] = [
    {
        title: "General FAQs",
        href: "#general"
    },
    {
        title: "Individual Account",
        href: "#individual-account"
    },
    {
        title: "Corporate Account ",
        href: "#corporate-account"
    },
    {
        title: "Accounting Practitioners",
        href: "#accounting-practitioners",
    },
    {
        title: "Tax Authorities ",
        href: "#tax-authority",
    },
    {
        title: "Pricing FAQs",
        href: "#pricing"
    }
]

const FaqsNavigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="appearance-none w-full h-fit flex flex-col items-end !gap-y-0 !space-y-0" >
                {navigation.map(({ title, href }, idx) => (
                    <div key={idx} className="h-full w-full">
                        <NavigationMenuItem className="h-full">
                            <FAQsCustomNavLink href={href as string} title={title} />
                        </NavigationMenuItem>
                    </div>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default FaqsNavigation