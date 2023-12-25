import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1, ease:[0.22, 1, 0,36, 1]}}
    >
      
    </motion.div>
  )
}

export default Loading
