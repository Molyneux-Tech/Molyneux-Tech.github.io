import Button from "./Button"
import { heroRed } from "../assets"
import styles from "../style"

const Hero = () => (
  <section className={`${styles.paddingY} pt-[20%]`}>
    <img src={heroRed} className='absolute -z-10 ss:w-[30%] w-[70%]'/>
    <div className='flex flex-col justify-center sm:items-start items-center sm:pl-[10%] p-0 gap-[27px]'>
      <h1 className='font-poppins font-[700] ss:text-[72px] text-[48px] flex-none'>Websites Like <br /> No Other.</h1>
      <p className='font-poppins font-[600] ss:text-[20px] flex-none'>We create custom web designs that reflect <br className="block sm:hidden"/>  your unique vision.</p>
      <Button msg={'Speak To Us Today'} link='/contact'/>
    </div>
  </section>
)

export default Hero