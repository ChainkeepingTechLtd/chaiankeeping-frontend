import React from 'react'
import { BrandLogoWhite, cn } from '@chainkeeping/ui'
import Link from 'next/link';
import CopyrightText from '../atoms/copyright-text';
import FacebookIcon from '../atoms/social-icons.tsx/facebook-icon';
import LinkedInIcon from '../atoms/social-icons.tsx/linkedIn-icon';
import TwitterIcon from '../atoms/social-icons.tsx/twitter-icon';
import YoutubeIcon from '../atoms/social-icons.tsx/youtube-icon';
import { APP_ROUTES, RESOURCES_ROUTES, SOLUTIONS_ROUTES, WHO_WE_SERVE_ROUTES } from '@/lib/routes';

const navlinks = [
    // Solutions
    {
        header: "Solutions",
        links: [
            {
                title: "Crypto Taxes",
                href: SOLUTIONS_ROUTES.computation,
            },
            {
                title: "Crypto Invoicing",
                href: SOLUTIONS_ROUTES.invoicing,
            },
            {
                title: "Crypto Payments",
                href: SOLUTIONS_ROUTES.payments,
            },
            {
                title: "Crypto Payroll",
                href: SOLUTIONS_ROUTES.payroll,
            },
            {
                title: "Crypto Financial Reporting",
                href: SOLUTIONS_ROUTES.financialReporting,
            },
        ]
    },
    // Who we Serve
    {
        header: "Who we serve",
        links: [
            {
                title: "Individuals",
                href: WHO_WE_SERVE_ROUTES.individuals,
            },
            {
                title: "Corporate Entities",
                href: WHO_WE_SERVE_ROUTES.company,
            },
            {
                title: "Accounting Practitioners",
                href: WHO_WE_SERVE_ROUTES.accountingPractitioners,
            },
            {
                title: "Tax Authorities",
                href: WHO_WE_SERVE_ROUTES.taxAuthority,
            }
        ]
    },
    // Resources
    {
        header: "Resources",
        links: [
            {
                title: "Blog",
                href: RESOURCES_ROUTES.blog,
            },
            {
                title: "Crypto Tax guide",
                href: RESOURCES_ROUTES.taxGuide,
            },
            {
                title: "Financial Reporting guide",
                href: RESOURCES_ROUTES.financialReportingGuide,
            },
            {
                title: "Glossary",
                href: RESOURCES_ROUTES.glossary,
            },
            {
                title: "Help Center",
                href: RESOURCES_ROUTES.support,
            },
            {
                title: "FAQs",
                href: RESOURCES_ROUTES.FAQs,
            },
        ]
    },
    // Company
    {
        header: "Company",
        links: [
            {
                title: "About",
                href: APP_ROUTES.about,
            },
            {
                title: "Contact us",
                href: APP_ROUTES.contact,
            },
            {
                title: "Careers",
                href: APP_ROUTES.careers,
            },
            {
                title: "Partnership",
                href: APP_ROUTES.partnership,
            },
            {
                title: "Pricing",
                href: APP_ROUTES.pricing,
            }
        ]
    },
    // Legal
    {
        header: "Legal",
        links: [
            {
                title: "Privacy Policy",
                href: "",
            },
            {
                title: "Terms of use",
                href: "",
            },
            {
                title: "Security",
                href: "",
            }
        ]
    },
]

const style = {
    header: "text-base text-primary-foreground font-[700]",
    ul: "flex flex-col items-start justify-start gap-[8px]",
    li: "cursor-pointer hover:underline text-sm text-[hsla(215,20%,65%,1)] font-normal",
    bottomLink:
        "cursor-pointer hover:underline text-[0.8125rem] text-center text-white font-normal font-manrope !whitespace-pre",
};

const Footer = () => {


    return (
        <div className='bg-primary w-full h-[420px]'>
            <div className='w-full h-full md:container flex flex-col justify-between pt-[56px]'>
                <div className='w-full h-[180px] flex items-start gap-x-[50px]'>
                    <Link href={APP_ROUTES.index}>
                        <BrandLogoWhite />
                    </Link>
                    {/* Solutions */}
                    <div className='xl:min-w-[972px] 2xl:w-full flex items-start gap-6 justify-between'>
                        {/* Solutions */}
                        {navlinks?.map(({ header, links }, idx) => (
                            <ul className={cn(style.ul)} key={idx}>
                                <h5 className={cn(style.header)}>
                                    {header}
                                </h5>
                                {links.map(({ href, title }, idx) => (
                                    <li
                                        key={idx}
                                        className={cn(style.li)}
                                    //   onClick={}
                                    >
                                        <Link href={href} legacyBehavior passHref>
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className='h-[72px] w-full flex items-center justify-between py-6 border-t'>
                    <CopyrightText />
                    <div className='flex items-center gap-6'>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer