import React from 'react'

const JoinWaitlistHeroSection = () => {
    return (
        <div className='bg-secondary-accent h-fit min-h-[230px] lg:min-h-[300px] w-full flex items-start justify-center pt-[26px] lg:pt-[54px]'>
            <div className='min-h-full h-fit flex flex-col items-start lg:items-center justify-start px-[18px] lg:container'>
                <h1 className='h-[68px] max-w-[546px] text-foreground text-4xl lg:text-[2.75rem] font-rubik font-bold'>Join our Waitlist</h1>
                <p className='max-w-[532px] text-foreground text-base text-left lg:text-center font-dmsans'>Interested in joining us? Fill out the form below to join our waitlist. We’ll reach out within 24 hours with more details!</p>
            </div>
        </div>
    )
}

export default JoinWaitlistHeroSection