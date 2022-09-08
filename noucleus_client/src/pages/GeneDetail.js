import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const GeneDetail = ({ genes, setGenes, setSidebarPage }) => {
  let { geneId } = useParams()

  const [selectedGene, setSelectedGene] = useState(null)

  useEffect(() => {
    const getGenes = async () => {
      let res = await axios.get(`${URL}/genes`)
      setGenes(res.data)
    }

    const renderGene = () => {
      genes.map((clickedGene) => {
        if (clickedGene.id === geneId) {
          setSelectedGene(clickedGene)
        }
      })
    }
    setSidebarPage('Genes')
    getGenes()
    renderGene()
  }, [])

  if (selectedGene != null) {
    return (
      <div>
        <h2>Gene Detail, gene found</h2>
        {selectedGene.map((gene) => (
          <div key={gene.id}>
            <h2>{gene.name}</h2>
            <h2>{gene.function}</h2>
          </div>
        ))}
      </div>
    )
  } else {
    return <h2>Gene Detail, gene loading</h2>
  }
}

export default GeneDetail
