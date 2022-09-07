import axios from 'axios'
import { useState, useEffect } from 'react'
import SidebarComp from '../components/SidebarComp'

const URL = process.env.REACT_APP_API_URL

const Genes = () => {
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
    <div className="GenePage">
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
  )
}

export default Genes
