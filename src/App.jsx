import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Front from './pages/Front/Front'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Explore from './pages/Explore/Explore'
import About from './pages/About/About'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Front}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/explore' Component={Explore}/>
        <Route path='/about' Component={About}/>  
      </Routes>
    </div>
  )
}

export default App
