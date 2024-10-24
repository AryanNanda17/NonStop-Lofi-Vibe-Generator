import React from 'react'
import Navbar from '../../components/Navbar'

const Music = () => {
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <div>
        <div className='flex items-center justify-center p-5'>
            <h1 className='text-white text-4xl mt-20 tracking-wider'>Enjoy Lofi Music... by AI</h1>
        </div>
      </div>
    </div>
  )
}

export default Music
