import React from 'react'
import Navbar from '../../components/Navbar'

const Contact = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
      <div className="w-1/2 p-24 text-2xl">
        Contact Us
        <form action="" className="p-8">
  <div className="mt-5 pl-4 pr-4 pb-3 w-full">
    <span className="text-2xl">Email</span>
    <br />
    <input type="email" placeholder="Enter Email" className="mt-5 p-2 bg-black border-solid border-2 border-white rounded-md w-full"/>
  </div>
  <div className="mt-5 pl-4 pr-4 pb-3 w-full">
    <span className="text-2xl">Feedback</span>
    <br />
    <textarea placeholder="Enter Your Feedback" className="mt-5 p-2 bg-black border-solid border-2 border-white rounded-md w-full"/>
  </div>
  <div className="flex items-center justify-center ml-4">
    <button
      type="submit"
      className="mt-4 text-white bg-gradient-to-r from-violet-600 to-pink-500 font-semibold w-full p-2 rounded-md text-xl hover:scale-110 transition-all duration-300"
    >
      Submit
    </button>
  </div>
</form>

      </div>
    </div>
  )
}

export default Contact
