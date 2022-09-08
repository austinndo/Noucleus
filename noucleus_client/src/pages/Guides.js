import { useEffect } from 'react'

const Guides = ({ guides, setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  return (
    <div>
      <h2>Guides page</h2>
    </div>
  )
}

export default Guides
