import { useState, useEffect } from 'react'
import { Card, Pagination } from 'react-rainbow-components'

const Genes = ({ genes, setSidebarPage }) => {
  const [pageState, setPageState] = useState({ activePage: 1 })

  useEffect(() => {
    setSidebarPage('Genes')
  }, [])

  const getGenes = ({ genes }) => {
    const { activePage } = pageState
    const lastItem = activePage * 2
    const firstItem = lastItem - 2
    return genes
      .slice(firstItem, lastItem)
      .map(({ name, species, image_ref }) => (
        <Card className="GeneCard" key={name}>
          <h2>{name}</h2>
          <img src={image_ref} />
        </Card>
      ))
  }

  const handleOnChange = (event, page) => {
    setPageState({ activePage: page })
  }

  const { activePage } = pageState

  return genes != null ? (
    <div className="GenePage">
      {/* Gene search */}

      {getGenes({ genes })}

      <Pagination
        pages={5}
        activePage={activePage}
        onChange={handleOnChange}
        variant="shaded"
      />
    </div>
  ) : (
    <div className="GenePage">
      <h2>Loading genes...</h2>
    </div>
  )
}

export default Genes
