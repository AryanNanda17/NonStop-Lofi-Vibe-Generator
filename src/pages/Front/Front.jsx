import React from 'react'
import Navbar from '../../components/Navbar'
import LofiGirl from '../../assets/lofigirl.mp4'
import './front.css'

const Front = () => {
  return (
    <div className='text-white main'>
      <Navbar/>
      <video src={LofiGirl} loop autoPlay muted/>
      <div className='content'>
        <h1 className='text-center text-4xl'>Welcome to Lofi Vibe</h1>
      </div>
    </div>
  )
}

export default Front
