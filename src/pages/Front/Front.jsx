import React from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import './front.css'

const Front = () => {
  return (
    <motion.div className='text-white main'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}}
    >
      <Navbar/>
      <div className='content'>
        <h1 className='text-center text-4xl text-black'>Welcome to Lofi Vibe</h1>
      </div>

      <div>
        <h1></h1>
      </div>
      <div>
        <h1></h1>
      </div>
    </motion.div>
  )
}

export default Front
