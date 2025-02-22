import React from 'react'
import { Button } from '@chainkeeping/ui'
import ListItemIcon from '../atoms/list-item-icon'
import { APP_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'
import { getEnvironment } from '@/lib/helpers/get-environment'

export const currentEnvironment = getEnvironment()

const featuresAtGlance = [
    "All crypto platforms supported",
    "Easy transaction record",
    "Automated Operations"
]

const TaxComputationHeroSection = () => {
    const { push } = useRouter()

    const handleGetStarted = () => {
        currentEnvironment === "PRODUCTION" ? push(APP_ROUTES.joinWaitlist) : push(APP_ROUTES.signup)
    }
    return (
        <section className="bg-primary bg-pattern-bg-img bg-cover bg-center w-full h-fit lg:h-[345px]">
            <div className='w-full h-full flex flex-col items-start justify-center gap-y-3 py-[66px] px-[18px] lg:container'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[112px]'>
                    <div className='w-full max-w-[564px] h-[152px] flex flex-col gap-y-1'>
                        <h3 className='text-white text-4xl lg:text-[2.75rem] leading-[52.14px] font-rubik font-bold'>For Individuals</h3>
                        <p className='text-white text-base font-dmsans'>Automate your recordkeeping, tax computations, and tax filing procedures using Chainkeeping.</p>
                    </div>

                    <div className='w-[264px] h-full flex flex-col gap-y-4'>
                        <h5 className='text-white text-2xl whitespace-nowrap font-medium font-rubik'>Features at a glance</h5>
                        <ul className='w-full flex flex-col gap-y-4'>
                            {featuresAtGlance.map((item, idx) => (
                                <li key={idx} className='flex items-center gap-3'>
                                    <ListItemIcon />
                                    <span className='font-rubik font-normal text-base text-white'>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Button size='lg' variant="secondary" onClick={handleGetStarted} >Get started</Button>
            </div>
        </section>
    )
}

export default TaxComputationHeroSection