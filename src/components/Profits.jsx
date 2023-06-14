import React from 'react'
import { profitRed, profitYellow } from '../assets'
import styles from '../style'
import Button from './Button'

const Profits = () => (
  <section className={`${styles.paddingY} sm:mb-20 mb-6 sm:pt-[0] pt-[65%]`}>
    <img src={profitRed} className='absolute -z-20 ss:w-[30%] w-[70%] right-0 pt-[10%]'/>
    <img src={profitYellow} className='absolute -z-10 ss:w-[40%] w-[80%] right-[10%] ss:pt-[20%] pt-[60%]'/>
    <div className='flex lg:flex-row flex-col justify-center items-start sm:pt-[30%] pt-[20%] xl:gap-[13vw] lg:gap-[5vw]'>
      <div className='flex flex-col justify-center items-center self-center lg:-order-1 order-1 p-0 gap-[40px]'>
        <p className='font-poppins font-[600] ss:text-[20px] ss:w-[545px] w-[90%]'>
          • Reach more customers. <br />
          • Boost in-store sales. 80% of sales involve online research. <br />
          • Higher customer loyalty. Sharing your message creates trust with customers. <br />
          • Increase visitors. Grow organically with SEO <br />
          • Keep customers on your site. 38% of people stop <br /> engaging with a website if it's unattractive. <br />
        </p>
        <Button msg={'Learn More'} link="/features"/>
      </div>
      <h1 className='font-poppins text-center font-[700] ss:text-[72px] text-[48px] self-center lg:order-1 -order-1'>Increase Your <br /> Profits</h1>
    </div>
  </section>
)

export default Profits