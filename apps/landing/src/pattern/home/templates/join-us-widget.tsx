import React from 'react'
import { Button, Typography } from '@chainkeeping/ui'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import CheckIcon from '../atoms/check-icon'
import { APP_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'
import { getEnvironment } from '@/lib/helpers/get-environment'

export const currentEnvironment = getEnvironment()

export const list = ["Crypto Tax computation, filing, compliance", "Crypto & Fiat Invoicing, Payroll and Payments", "Crypto Portfolio management"]

const JoinUsWidget = () => {
    const { push } = useRouter()

    const handleGetStarted = () => {
        currentEnvironment === "PRODUCTION" ? push(APP_ROUTES.joinWaitlist) : push(APP_ROUTES.signup)
    }

    return (
        <div className='w-full min-h-[646px] h-fit lg:h-[472px] flex items-center justify-center px-[18px] lg:px-8'>
            <div className='bg-[hsla(0,67%,98%,1)] w-full lg:container h-full flex items-center justify-center py-16 px-[18px] rounded-[16px] lg:rounded-[32px]'>
                <div className='w-full flex flex-col items-center gap-y-8'>
                    <div className='lg:w-[798px] text-center space-y-[4px]'>
                        <HeaderLabel>Join us</HeaderLabel>
                        <Typography className='w-[269px] lg:w-fit text-center text-2xl lg:text-[2.25rem] leading-[28.44px] lg:leading-[42.66px]'>Seamless Crypto accounting and tax computations to make your compliance easy</Typography>
                    </div>
                    <p className='font-dmsans text-foreground text-center'>Chainkeeping makes it easy for your to calculate your taxes in few steps</p>

                    <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-4'>
                        {list.map((item, idx) => (
                            <div key={idx} className='w-fit flex items-start gap-3'>
                                <div>
                                    <CheckIcon />
                                </div>
                                <p className='font-rubik'>{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button variant="secondary" size="lg" onClick={handleGetStarted} >Get started for free</Button>
                </div>
            </div>
        </div>
    )
}

export default JoinUsWidget