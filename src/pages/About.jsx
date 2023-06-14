import React from 'react'
import { Navbar, NavItem, AboutInfo, Footer } from '../components'
import styles from '../style'

const About = () => (
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
                <AboutInfo />
                <Footer />
            </div>
        </div>
    </div>
)

export default About