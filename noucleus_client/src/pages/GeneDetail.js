import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const GeneDetail = ({ genes, setGenes, setSidebarPage }) => {
  let { geneId } = useParams()
  let selected = genes[geneId]

  const [selectedGene, setSelectedGene] = useState(null)

  // const assignGene = () => {
  //   console.log(geneId)
  //   genes.map((gene) => {
  //     if (gene.id === { geneId }) {
  //       setSelectedGene(gene)
  //     }
  //   })
  // }

  useEffect(() => {
    setSidebarPage('Genes')
    setSelectedGene(selected)
    // assignGene()
  }, [])

  if (selectedGene != null) {
    return (
      <div>
        <h2>Gene Detail, gene found</h2>
        <div key={selectedGene.id}>
          <h2>{selectedGene.name}</h2>
          <h2>{selectedGene.function}</h2>
        </div>
      </div>
    )
  } else {
    return <h2>Gene Detail, gene loading</h2>
  }
}

export default GeneDetail
