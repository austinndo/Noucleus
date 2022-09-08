import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const GuidesByEdit = ({ guides, setSidebarPage }) => {
  let { editType } = useParams()

  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  return (
    <div>
      <h2>Guides by edit type page</h2>
    </div>
  )
}

export default GuidesByEdit
