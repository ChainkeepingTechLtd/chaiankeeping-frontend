import React from 'react'
import NavListItem from '../molecules/nav-list-item'
import CryptoTaxGuideIcon from '../atoms/nav-icons/crypto-tax-icon'
import BlogIcon from '../atoms/nav-icons/blog-icon'
import FinancialReportingGuide from '../atoms/nav-icons/financial-reporting-guide'
import SupportIcon from '../atoms/nav-icons/support-icon'
import GlossaryIcon from '../atoms/nav-icons/glossary-icon'
import { RESOURCES_ROUTES } from '@/lib/routes'

const ResourcesNavContent = () => {
    return (
        <div className='bg-white lg:w-[1100px] h-[300px] flex items-center justify-center p-9 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 transition-all'>
            <ul className='bg-inherit w-full h-full grid grid-cols-3 gap-12 mx-auto'>
                <li className='w-full flex flex-col items-center gap-y-9'>
                    {/* Crypto Tax guide */}
                    <NavListItem icon={<CryptoTaxGuideIcon />} href={RESOURCES_ROUTES.taxGuide} title='Crypto tax guide' description='Learn how crypto taxes work in your country of residence.Computation, filing, optimization and consultation' />

                    {/* Blog */}
                    <NavListItem icon={<BlogIcon />} href={RESOURCES_ROUTES.blog} title='Blog' description='Articles on cryptocurrency taxation, accounting, industry regulations etc.' />
                </li>

                <li className='w-full flex flex-col items-center gap-y-9'>
                    {/* Financial reporting guide */}
                    <NavListItem icon={<FinancialReportingGuide />} href={RESOURCES_ROUTES.financialReportingGuide} title='Financial reporting guide' description='Everything you need to know about crypto financial reporting.' />

                    {/* Support */}
                    <NavListItem icon={<SupportIcon />} href={RESOURCES_ROUTES.support} title='Support' description='More information about Chainkeeping, get answers to your questions.' />
                </li>

                <li className='w-full flex flex-col items-center gap-y-9'>
                    {/* Glossary */}
                    <NavListItem icon={<GlossaryIcon />} href={RESOURCES_ROUTES.glossary} title='Glossary' description='Get informed, A-Z of crypto, crypto taxation and more.' />
                </li>
            </ul>
        </div>
    )
}

export default ResourcesNavContent