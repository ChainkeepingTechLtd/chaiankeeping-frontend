"use client";

import React from 'react'
import ContactUsHeroSection from '@/pattern/contact-us/templates/contact-us-hero-section';
import ContactForm from '@/pattern/contact-us/templates/contact-us-form';

const ContactUsPage = () => {
  return (
    <>
      <div className='relative w-full space-y-[32px] lg:space-y-0 lg:mb-[617px]'>
        <ContactUsHeroSection />
        <div className='lg:absolute lg:top-[223px] lg:left-1/2 lg:-translate-x-1/2'>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default ContactUsPage