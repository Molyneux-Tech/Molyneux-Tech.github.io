import React from 'react'
import { Navbar } from '../components'
import styles from '../style'

const NoPage = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className='w-full'>
        <Navbar />
        </div>
    </div>
    <h1>Error 404: Page not found</h1>
  </div>
)

export default NoPage