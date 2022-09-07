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
  const [allUsers, setAllUsers] = useState(null)
  const [genes, setGenes] = useState(null)
  const [sidebarPage, setSidebarPage] = useState('Genes')

  useEffect(() => {
    const getGenes = async () => {
      let res = await axios.get(`${URL}/genes`)
      setGenes(res.data)
    }
    const getAllUsers = async () => {
      let res = await axios.get(`${URL}/users`)
      setAllUsers(res.data)
      console.log(res.data)
    }
    getGenes()
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <Header user={user} />
      <div className="Noucleus">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Genes
                  genes={genes}
                  user={user}
                  sidebarPage={sidebarPage}
                  setSidebarPage={setSidebarPage}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <SignIn
                  user={user}
                  setUser={setUser}
                  allUsers={allUsers}
                  sidebarPage={sidebarPage}
                  setSidebarPage={setSidebarPage}
                />
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" />
            <Route path="/designs" />
            <Route path="/analytics" />
            <Route path="/glossary" />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
