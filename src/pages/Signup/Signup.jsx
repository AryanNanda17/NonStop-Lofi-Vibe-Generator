import React from 'react'
import { motion } from 'framer-motion'

const Signup = () => {
  return (
    <motion.div className='bg-black h-screen text-white flex items-center justify-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}}
    >
      <form action="" className=''>
        <h1 className='text-5xl uppercase tracking-wider text-center mt-4 mb-8'>Sign up</h1>

        <div className='mt-3 pl-4 pr-4 pb-3'>
          <span className='text-2xl'>Username</span>
            <br />
          <input type="text" placeholder='Enter Username' className='mt-3 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl mr-40'/>
          <br />
        </div>
        <div className='mt-3 pl-4 pr-4 pb-3'>
          <span className='text-2xl'>Email</span>
            <br />
          <input type="email" placeholder='Enter Email' className='mt-3 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl'/>
          <br />
        </div>

        <div className='mt-3 pl-4 pr-4 pb-3'>
          <span className='text-2xl'>Password</span>
          <br />
          <div>
            <input type="password" placeholder='Password' className='mt-2 w-full bg-black text-white rounded-md p-2 border-solid border-2 border-white text-xl'/>
          </div>
          <br />
        </div>

        <div className='mt-3 pl-4 pr-4 pb-3'>
          <span className='text-2xl'>Age</span>
          <br />
            <input type="number" name="age" id="age" className='mt-3 bg-black p-2 border-2 border-solid border-white rounded-md w-full text-xl' placeholder='Your Age'/>
          <br />
        </div>

        <div className='mt-3 pl-4 pr-4 pb-3'>
          <span className='text-2xl'>Music Preference</span>
            <br />
          <input type="text" placeholder='Enter Your Music Preference' className='mt-3 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl'/>
          <br />
        </div>

        <div className='flex items-center justify-center p-5 ml-1'>
          <button type='submit' className='mt-8 text-white bg-pink-500 font-semibold w-full p-3 rounded-md text-xl hover:scale-110 transition-all duration-300'>Create Account</button>
        </div>
      </form>
    </motion.div>
  )
}

export default Signup
