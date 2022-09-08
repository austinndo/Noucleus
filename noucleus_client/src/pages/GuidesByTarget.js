import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const GuidesByTarget = ({ guides, setSidebarPage }) => {
  let { designTargetId } = useParams()

  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  return (
    <div>
      <h2>Guides by target page</h2>
    </div>
  )
}

export default GuidesByTarget
