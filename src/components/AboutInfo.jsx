import React from 'react'
import styles from '../style'
import { aboutRed, photo } from '../assets'
import Button from './Button'

const AboutInfo = () => (
    <section className={`${styles.paddingY} pt-[20%]`}>
        <img src={aboutRed} className='absolute right-0 -z-10 '/>
        <div className='flex md:flex-row-reverse flex-col items-center justify-between'>
            <div className='flex flex-col items-center gap-[26px]  pt-[10%] md:pr-[10vw]'>
                <p className='font-poppins font-[700] text-[26px]'>Harvin Molyneux</p>
                <p className='font-poppins font-[700] text-[26px]'>Founder</p>
                <img src={photo} />
            </div>
            <div className='flex flex-col justify-center sm:items-start items-center md:pl-[10vw] pt-[5vh] gap-[82px]'>
                <h1 className='font-poppins font-[700] ss:text-[72px] text-[48px] flex-none'>About Us</h1>
                <div className='font-poppins font-[600] text-[20px] ss:w-[560px] w-[90%]'>
                    We build websites designed for the highest of quality. <br /><br />
                    <strong className='text-[28px] font-[700]'>What makes us different?</strong> <br />
                    <strong className='text-[24px] font-[700]'>Rooted in sales.</strong> We help you expand your business to the web, increase your sales and grow organically. <br /><br />
                    
                    <strong className='text-[24px] font-[700]'>Dedicated to quality.</strong> We listen to your needs and strive to create a website to be proud of.
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center sm:pt-[3vh] pt-[20%]'>
            <Button msg={'Speak To Us Today'} link='/contact'/>
        </div>
    </section>
)

export default AboutInfo