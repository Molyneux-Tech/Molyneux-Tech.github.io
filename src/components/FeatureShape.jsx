import React from 'react'
import { featuresRed, featuresYellowBottom } from '../assets'

const FeatureShape = () => (
    <section className='relative'>
        <img src={featuresRed} className='absolute right-0 bottom-[20vw] -z-10 ss:w-[30%] w-[70%]' />
        <img src={featuresYellowBottom} className='absolute right-0 bottom-0 -z-20 ss:w-[25%] w-[60%]' />
    </section>
)

export default FeatureShape