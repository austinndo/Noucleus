import { useEffect } from 'react'

const Guides = ({ guides, setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  if (guides) {
    return (
      <div>
        <h2>Guides page</h2>
        <div className="GuideCardContainer">
          {guides.map((guide) => (
            <div className="GuideCard" key={guide.id}>
              <h2>Target: {guide.gene}</h2>
              <h2>Strand: {guide.strand}</h2>
              <h2>Cas: {guide.cas}</h2>
              <h4>Seq: {guide.sequence}</h4>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Guides page, guides loading...</h2>
      </div>
    )
  }
}

export default Guides
