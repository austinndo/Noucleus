import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URL = 'http://localhost:8000'

function App() {
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
    <div className="App">
      <h1>Noucleus App</h1>
      {genes.map((gene) => (
        <div key={gene.id}>
          <h2>{gene.name}</h2>
          <h2>{gene.function}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
