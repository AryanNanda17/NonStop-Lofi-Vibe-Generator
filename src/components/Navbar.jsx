import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <div className='sticky bg-black text-white z-10 top-0'>
      <div className='text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between'>
      <div>
        Logo
      </div>
      <div>
        <ul className='flex items-center'>
            <Link to='/'><li className='mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Home</li></Link>
            <Link to='/about'><li className='mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>About</li></Link>
            <Link to='/explore'><li className='mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Explore</li></Link>
            <Link to='/login'><li className='mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Log In</li></Link>
            <Link to='/signup'><li className='mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Sign up</li></Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
