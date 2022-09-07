import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card, Pagination } from 'react-rainbow-components'
import SidebarComp from '../components/SidebarComp'

const URL = process.env.REACT_APP_API_URL

const Genes = ({ genes, sidebarPage, setSidebarPage }) => {
  const [pageState, setPageState] = useState({ activePage: 1 })

  const getContent = ({ genes }) => {
    const { activePage } = pageState
    const lastItem = activePage * 2
    const firstItem = lastItem - 2
    return genes
      .slice(firstItem, lastItem)
      .map(({ name, species, image_ref }) => (
        <Card className="GeneCard" key={name}>
          <h2>
            {name} ({species})
          </h2>
          <img src={image_ref} />
        </Card>
      ))
  }

  useEffect(() => {
    setSidebarPage('Genes')
  }, [])

  const handleOnChange = (event, page) => {
    setPageState({ activePage: page })
  }

  const { activePage } = pageState

  return genes != null ? (
    <div className="GenePage">
      {/* Gene search */}

      {/* Gene cards */}
      <div className="sidebar">
        <SidebarComp sidebarPage={sidebarPage} />
      </div>
      <div>{getContent({ genes })}</div>
      <div>
        <Pagination
          pages={5}
          activePage={activePage}
          onChange={handleOnChange}
          variant="shaded"
        />
      </div>
    </div>
  ) : (
    <h2>Loading genes...</h2>
  )
}

export default Genes
