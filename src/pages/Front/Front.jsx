import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import './front.css'
import gsap from 'gsap'

const Front = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".head", {
      y: 300,
      stagger: {
        each: 5
      },
      duration: 2.5,
      ease: 'expo.inOut'
    })
  }, [])
  return (
    <motion.div className='text-white bg-black h-screen'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}}
    >
      <Navbar/>

      <div>
        <div className='text-9xl uppercase tracking-wider mx-40 mt-32'>
          {
            'LofiVibe'.split(' ').map((word) => {
              return word === ' ' ? <div className='head'>&nbsp;</div> : <div className='head'>{word}</div> 
            })
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Front
