import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.paddingY} sm:mb-20 mb-6 sm:pt-[20%] pt-[50%] flex justify-center`}>
    <div className='bg-button flex md:flex-row flex-col justify-between items-center rounded-[28px] px-[40px] py-[20px] ss:w-[1100px] gap-[20px] mx-5'>
      <div className='flex flex-col justify-center items-center ss:gap-1 gap-[20px]'>
        <h1 className='font-poppins text-center font-[700] ss:text-[72px] text-[48px] self-center'>Book A Meeting</h1>
        <p className='font-poppins font-[600] ss:text-[20px] ss:w-[512px]'>Have a free meeting to discuss your business, how we can support you and receive a quote.</p>
      </div>
      <Button msg={'Speak To Us Today'} styles={'bg-tertiary font-[700]'} link="/contact"/>
    </div>
  </section>
)

export default CTA