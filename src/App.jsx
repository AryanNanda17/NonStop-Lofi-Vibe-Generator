import React from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Front from './pages/Front/Front'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Sound from './pages/Sound/Sound'

const App = () => {
  const location = useLocation();
  return (
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index path='/' Component={Front}/>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={Signup}/> 
          <Route path='/sound' Component={Sound}/> 
        </Routes>
      </AnimatePresence>
  )
}

export default App
