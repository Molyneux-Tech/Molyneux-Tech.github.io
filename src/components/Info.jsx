import React from 'react'
import styles from '../style'
import Button from './Button'
import { featuresYellowTop } from '../assets'

const Info = () => (
    <section className='mb-[10%]'>
        <img src={featuresYellowTop} className='absolute top-0 -z-10 ss:w-[30%] w-[70%]'/>
        
        <div className='flex flex-col justify-center items-center gap-[60px] pt-[100px]'>  
            <h1 className='font-poppins text-center font-[700] ss:text-[72px] text-[48px] self-center'>Features</h1>
            <p className='font-poppins text-[20px] ss:w-[1020px] w-[90%]'>
                <strong>Custom Designs.</strong> We tailor to your unique needs and requirements. We guarantee visually appealing and user friendly designs. This boosts customer retention and memorability. 38% of users stop engaging with a website if they find it unattractive.<br /><br /><br />

                <strong>Responsiveness.</strong> Our websites adapt to different screen sizes and devices such as laptops, mobile phones, desktops, and tablets, ensuring they can be used regardless of device.<br /><br /><br />
                
                <strong>Search Engine Optimisation.</strong> A well made website will place you higher up in searches, attracting more organic traffic to your business. 53.3% of all traffic to a website is from organic search.<br /><br /><br />
                
                <strong>Analytics.</strong> Get detailed information on your website's performance including traffic, engagement, and conversion rates.<br /><br /><br />
                
                <strong>Maintenance.</strong> We provide ongoing support and maintenance to keep everything up to date, secure and optimised.<br /><br /><br />
                
                <strong>Reliable and Fast Hosting.</strong> 99.9% uptime. Advanced security.<br /><br /><br />

                <strong></strong>
            </p>
            <Button msg={'Speak To Us Today To Learn More'} link="/contact"/>
        </div>
    </section>

)

export default Info