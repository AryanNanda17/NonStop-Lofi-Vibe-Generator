import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import gsap from 'gsap'
import { delay } from 'framer-motion'

const Navbar = () => {
  useEffect(() => {
    gsap.from(".logo", {
      x: -30,
      opacity: 0
    })
    gsap.to(".logo", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.inOut"
    })
  }, [])
  return (
    <div className='sticky bg-black text-white z-10 top-0'>
      <div className='text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between'>
      <div className='logo ml-10'>
        Logo
      </div>
      <div>
        <ul className='flex items-center'>
            <Link to='/'><li className='item mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Home</li></Link>
            <Link to='/login'><li className='item mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Log In</li></Link>
            <Link to='/signup'><li className='item mr-8 hover:bg-white hover:text-black transition-all duration-300 rounded p-2'>Sign up</li></Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
