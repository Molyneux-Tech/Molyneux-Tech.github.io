import React from 'react'
import { Navbar, NavItem, Footer, ContactInfo } from '../components'
import Calendly from '../components/Calendly'
import styles from '../style'

const Contact = () => (
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
                <ContactInfo />
                {/* <Calendly /> */}
                <Footer />
            </div>
        </div>
    </div>
)

export default Contact