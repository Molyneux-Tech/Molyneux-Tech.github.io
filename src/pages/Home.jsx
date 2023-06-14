import styles from '../style';
import { Navbar, NavItem, Hero, Profits, Requirements, CTA, Footer } from '../components';

const Home = () => (
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
                <Hero />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className='w-full'>
                <Profits />
                <Requirements />
                <CTA />
                <Footer />
            </div>
        </div>
    </div>
)

export default Home