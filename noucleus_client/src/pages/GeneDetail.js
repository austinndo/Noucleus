import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const GeneDetail = ({ genes, setGenes, setSidebarPage }) => {
  let { geneId } = useParams()
  let selected = genes[geneId]

  const [selectedGene, setSelectedGene] = useState(null)

  useEffect(() => {
    setSidebarPage('Genes')
    setSelectedGene(selected)
  }, [])

  if (selectedGene != null) {
    return (
      <div>
        <div className="GeneDetailContainer" key={selectedGene.id}>
          <h2>{selectedGene.name}</h2>
          <img src={selectedGene.image_ref} />
          <h2>Function:</h2>
          <h4>{selectedGene.function}</h4>
          <h2>Gene sequences:</h2>
          <ul>
            {selectedGene.gene_guides.map((gene) => (
              <li>
                <h4>
                  #{gene.id}) {gene.sequence}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  } else {
    return <h2>Gene Detail, gene loading</h2>
  }
}

export default GeneDetail
