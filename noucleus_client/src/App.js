import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const URL = process.env.REACT_APP_URL

const App = () => {
  const [genes, setGenes] = useState([])

  useEffect(() => {
    const getGenes = async () => {
      let res = await axios.get(`${URL}/genes`)
      setGenes(res.data)
      console.log(res.data)
      console.log(res.data[3].gene_guides[1].user)
    }
    getGenes()
  }, [])

  return (
    <div>
      <div>
        <h1>Noucleus App</h1>
        {genes.map((gene) => (
          <div key={gene.id}>
            <h2>{gene.name}</h2>
            <h2>{gene.function}</h2>
            <h2>Guide Designs: </h2>
            <h2>{gene.gene_guides.map((guide) => guide.sequence)}</h2>
          </div>
        ))}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
