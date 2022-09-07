import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SidebarComp from './components/SidebarComp'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Genes from './pages/Genes'

const URL = process.env.REACT_APP_API_URL

const App = () => {
  const [user, setUser] = useState(null)
  const [signedIn, setSignedIn] = useState(false)

  return (
    <div className="App">
      <Header user={user} />
      <div className="Noucleus">
        <div className="sidebar">
          <SidebarComp user={user} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Genes />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Genes />} />
            <Route path="/designs" element={<Genes />} />
            <Route path="/analytics" element={<Genes />} />
            <Route path="/glossary" element={<Genes />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
