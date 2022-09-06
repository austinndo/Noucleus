import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { URL } from './Globals'
import SignIn from './pages/SignIn'

const App = () => {
  const [genes, setGenes] = useState([])

  useEffect(() => {
    const getGenes = async () => {
      let res = await axios.get(`${URL}/genes`)
      setGenes(res.data)
      console.log(res.data)
    }
    getGenes()
  }, [])

  return (
    // <div>
    //   <h1>Noucleus App</h1>
    //   {genes.map((gene) => (
    //     <div key={gene.id}>
    //       <h2>{gene.name}</h2>
    //       <h2>{gene.function}</h2>
    //     </div>
    //   ))}
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
