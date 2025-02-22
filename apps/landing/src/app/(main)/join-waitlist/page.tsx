"use client";

import React from 'react'
import ContactForm from '@/pattern/contact-us/templates/contact-us-form';
import JoinWaitlistHeroSection from '@/pattern/contact-us/templates/join-waitlist-hero-section';

const JoinWaitlistPage = () => {
    return (
        <>
            <div className='relative w-full space-y-[32px] lg:space-y-0 lg:mb-[617px]'>
                <JoinWaitlistHeroSection />
                <div className='lg:absolute lg:top-[223px] lg:left-1/2 lg:-translate-x-1/2'>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default JoinWaitlistPage