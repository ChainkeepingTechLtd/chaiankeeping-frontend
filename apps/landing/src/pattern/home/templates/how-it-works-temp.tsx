import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Button, Typography } from '@chainkeeping/ui'
import HowItWorksWidget from '../organisms/how-it-works-widget'
import HowItWorksImage from '../organisms/how-it-works-image'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/lib/routes'
import { getEnvironment } from '@/lib/helpers/get-environment'

export const currentEnvironment = getEnvironment()

const HowItWorksTemp = () => {
  const { push } = useRouter()

  const handleGetStarted = () => {
    currentEnvironment === "PRODUCTION" ? push(APP_ROUTES.joinWaitlist) : push(APP_ROUTES.signup)
  }

  return (
    <div className='w-full h-fit lg:h-[572px] flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-[87px] px-[18px] lg:container'>
      {/* Left */}
      <div className='w-full max-w-[515px] min-h-full flex flex-col justify-between gap-8'>
        <div className='space-y-[48px] lg:space-y-[18px]'>
          <div className='w-full text-left lg:text-center space-y-[4px]'>
            <HeaderLabel className='text-left'>How it works</HeaderLabel>
            <Typography className='w-[315px] lg:w-full text-left text-2xl lg:text-[2.25rem] leading-[28.44px] lg:leading-[42.66px] after:w-[71px] after:left-0 lg:after:w-[515px]'>Get started in 3 simple steps</Typography>
          </div>
          <p className='text-foreground text-base leading-[22.4px] font-dmsans'>Calculate and generate report for your crypto taxes in a few simple steps within a matter of minutes.</p>
        </div>
        <HowItWorksWidget />

        <Button size="md" onClick={handleGetStarted}>Get started</Button>
      </div>

      {/* Right */}
      <HowItWorksImage />
    </div>
  )
}

export default HowItWorksTemp