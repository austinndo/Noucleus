import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Genes from './pages/Genes'

const URL = process.env.REACT_APP_API_URL

const App = () => {
  return (
    <div className="Noucleus">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/genes" element={<Genes />} />
      </Routes>
    </div>
  )
}

export default App
