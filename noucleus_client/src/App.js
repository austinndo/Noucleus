import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SidebarComp from './components/SidebarComp'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Genes from './pages/Genes'
import GeneDetail from './pages/GeneDetail'
import Guides from './pages/Guides'
import GuidesByTarget from './pages/GuidesByTarget'
import GuidesByEdit from './pages/GuidesByEdit'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Glossary from './pages/Glossary'

const URL = process.env.REACT_APP_API_URL

const App = () => {
  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState(null)
  const [genes, setGenes] = useState(null)
  const [guides, setGuides] = useState(null)
  const [sidebarPage, setSidebarPage] = useState('Genes')

  useEffect(() => {
    const getGenes = async () => {
      let res = await axios.get(`${URL}/genes`)
      setGenes(res.data)
    }
    const getGuides = async () => {
      let res = await axios.get(`${URL}/guides`)
      setGuides(res.data)
      console.log(res.data)
    }
    getGenes()
    getGuides()
  }, [])

  return (
    <div className="App">
      <Header user={user} />
      <div className="Noucleus">
        <div className="sidebar">
          <SidebarComp user={user} sidebarPage={sidebarPage} />
        </div>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Genes genes={genes} setSidebarPage={setSidebarPage} />}
            />
            <Route
              path="/gene/:geneId"
              element={
                <GeneDetail
                  genes={genes}
                  setGenes={setGenes}
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
                  setAllUsers={setAllUsers}
                  setSidebarPage={setSidebarPage}
                />
              }
            />
            <Route
              path="/signup"
              element={<SignUp setSidebarPage={setSidebarPage} />}
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  user={user}
                  setUser={setUser}
                  setSidebarPage={setSidebarPage}
                />
              }
            />
            <Route
              path="/designs"
              element={
                <Guides guides={guides} setSidebarPage={setSidebarPage} />
              }
            />
            <Route
              path="/designs/:designTargetId"
              element={
                <GuidesByTarget
                  guides={guides}
                  setSidebarPage={setSidebarPage}
                />
              }
            />
            <Route
              path="/designs/editType"
              element={
                <GuidesByEdit guides={guides} setSidebarPage={setSidebarPage} />
              }
            />
            <Route
              path="/analytics"
              element={
                <Analytics guides={guides} setSidebarPage={setSidebarPage} />
              }
            />
            <Route
              path="/glossary"
              element={<Glossary setSidebarPage={setSidebarPage} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
