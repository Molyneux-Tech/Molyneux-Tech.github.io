import React from 'react'
import { Navbar, NavItem, Info, Footer, FeatureShape } from '../components'
import styles from '../style'

const Features = () => (
    <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className='w-full'>
                <Navbar>
                    <NavItem to='/' text='Home' />
                    <NavItem to='/about' text='About Us' />
                    <NavItem to='/features' text='Features' />
                    <NavItem to='/contact' text='Contact' />
                </Navbar>
            </div>
        </div>
        
        <div className={`${styles.flexStart}`}>
            <div className='w-full'>
                <Info />
                <Footer />
                <FeatureShape />
            </div>
        </div>
    </div>
)

export default Features