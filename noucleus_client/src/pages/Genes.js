import { useState, useEffect } from 'react'
import { Pagination } from 'react-rainbow-components'
import { useNavigate } from 'react-router-dom'

const Genes = ({ genes, setSidebarPage }) => {
  let navigate = useNavigate()

  const [pageState, setPageState] = useState({ activePage: 1 })

  useEffect(() => {
    setSidebarPage('Genes')
  }, [])

  const getGenes = ({ genes }) => {
    const { activePage } = pageState
    const lastItem = activePage * 2
    const firstItem = lastItem - 2
    return genes.slice(firstItem, lastItem).map(({ id, name, image_ref }) => (
      <div
        className="GeneCard"
        key={id}
        onClick={() => navigate(`/gene/${id - 1}`)}
      >
        <h2>{name}</h2>
        <img src={image_ref} />
      </div>
    ))
  }

  const handleOnChange = (event, page) => {
    setPageState({ activePage: page })
  }

  const { activePage } = pageState

  return genes != null ? (
    <div className="GenePage">
      <div className="GeneCardContainer">{getGenes({ genes })}</div>
      <div className="PaginationContainer">
        <Pagination
          pages={5}
          activePage={activePage}
          onChange={handleOnChange}
          variant="shaded"
        />
      </div>
    </div>
  ) : (
    <div className="GenePage">
      <h2>Loading genes...</h2>
    </div>
  )
}

export default Genes
