import { useState } from 'react'
import { menu, close } from '../assets'
import { Link } from 'react-router-dom'

function Navbar(props) {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w=full flex py-6 justify-between items-center navbar'>
      <h1 className='font-poppins font-bold text-[28px]'>Molyneux Tech</h1>

      {/* Desktop view */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>{ props.children }</ul>

      {/* Mobile view */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-button absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 gap-3'>
            { props.children }
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavItem({to, text}) {
  return (
    <li>
      <Link to={ to } className='font-poppins font-normal cursor-pointer text-[16px] text-black sm:mr-10 mt-10'>
        { text }
      </Link>
    </li>
  )
}

export { Navbar, NavItem }