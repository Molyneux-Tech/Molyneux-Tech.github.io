import React from 'react'
import styles from '../style'
import { requirementRed, requirementYellow } from '../assets'
import Button from './Button'

const Requirements = () => (
  <section className={`${styles.paddingY} sm:mb-20 mb-6 sm:pt-[0] pt-[45%]`}>
  <img src={requirementRed} className='absolute -z-10 ss:w-[17%] w-[40%]'/>
  <img src={requirementYellow} className='absolute -z-20 ss:w-[35%] w-[80%] ss:pt-[20%] pt-[60%]'/>
  <div className='flex lg:flex-row flex-col justify-center items-start sm:pt-[30%] pt-[20%] xl:gap-[13vw] lg:gap-[5vw]'>
    <h1 className='font-poppins text-center font-[700] ss:text-[72px] text-[48px] self-center'>Built To Your <br />Requirements.</h1>
    <div className='flex flex-col justify-center items-center self-center p-0 gap-[40px]'>
      <p className='font-poppins font-[600] ss:text-[20px] ss:w-[545px] w-[90%]'>
        We take time to learn about your brand, audience  and goals to find the best solutions. Everything from the layout to typography to the colour scheme will create your perfect website.
      </p>
      <Button msg={'Speak To Us Today'} link="/contact"/>
    </div>
  </div>
</section>
)

export default Requirements