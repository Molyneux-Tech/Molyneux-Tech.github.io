import React from 'react'
import { InlineWidget } from "react-calendly";
import styles from '../style';
import { contactRed, contactYellow } from '../assets';

const ContactInfo = () => {
  return (
    <section className={`${styles.paddingY} pt-[20%] flex xl:flex-row flex-col items-center justify-between`}>
        <img src={contactRed} className='absolute top-0 right-[10%] -z-10' />
        {/* TODO: MAKE THIS NOT LOOK SO BAD */}
        <img src={contactYellow} className='absolute left-0 bottom-[0] -z-10' />

        {/* Desktop view */}
        <div className='xl:flex hidden'>
          <InlineWidget 
          url="https://calendly.com/hrmolyneux/free-consultation"
          styles={{
            minWidth: '1000px',
            width: '40vw',
            height: '800px'
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
          />
        </div>
        
        {/* Mobile view */}
        <div className='xl:hidden flex'>
          <InlineWidget 
            url="https://calendly.com/hrmolyneux/free-consultation"
            styles={{
              minWidth: '200px',
              width: '90vw',
              height: '770px'
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: '00a2ff',
              textColor: '4d5055'
            }}
            />
        </div>
        
        <div className='flex flex-col items-center justify-center xl:order-1 -order-1 pb-[15%] xl:pr-[10vw] pr-0'>
            <h1 className='font-poppins font-[700] ss:text-[72px] text-[48px] flex-none '>Contact Us</h1>
            <p className='font-poppins font-[600] text-[20px] ss:w-[500px] w-[90%]'>
            Want to get in touch? Pick out a time to schedule a free 30 minute call to discuss what you want, your goals, and how we can help you reach them.
            </p>
        </div>
    </section>
    
  )
}

export default ContactInfo