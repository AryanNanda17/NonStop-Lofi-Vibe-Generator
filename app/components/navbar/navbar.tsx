"use client"
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import Link from 'next/link'
import { Power3, Expo } from 'gsap'

const Navbar = () => {
  useLayoutEffect(() => {
    gsap.from(".navbar", {
      x : -50,
      opacity: 0,
    })
    gsap.to(".navbar", {
      x : 20,
      opacity: 1,
      stagger : {
        each: 2,
        ease: Power3.easeInOut,
        from: "end",
        grid: "auto",
      }
    })
    gsap.from(".logo", {
      y : -30,
      opacity: 0
    })

    gsap.to(".logo", {
      y : 0,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut
    })
  }, [])
  return (
    <div className='text-white flex justify-between p-6 text-3xl'>
      <div className='logo'>
        Logo
      </div>
      <div className='navbar'>
        <ul className='flex'>
          <li className='mr-8 p-3'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-8 p-3'>
            <Link href='/about'>About</Link>
          </li>
          <li className='mr-8 bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-800 hover:transition-all hover:duration-300'>
            <Link href='/sign-in'>Sign In</Link>
          </li>
          <li className='mr-8 bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-800 hover:transition-all hover:duration-300'>
            <Link href='/sign-up'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
