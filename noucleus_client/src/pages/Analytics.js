import { useEffect } from 'react'
import { ProgressCircular } from 'react-rainbow-components'

const Analytics = ({ setSidebarPage, guides }) => {
  useEffect(() => {
    setSidebarPage('Analytics')
  }, [])

  if (guides) {
    return (
      <div>
        <h2>Analytics Page</h2>
        {guides.map((guide) => (
          <div className="AnalyticsCard" key={guide.id}>
            <h2>Designer: {guide.user}</h2>
            <ProgressCircular value={guide.percent_gc} variant="success" />
            <h1 className="rainbow-font-size-heading_small rainbow-color_gray-3">
              Percent GC
            </h1>

            <h2>Efficiency: {guide.efficieny}</h2>
            <h2>Percent GC: {guide.percent_gc}</h2>
          </div>
        ))}
      </div>
    )
  } else {
    return <h2>Guide Analytics loading ...</h2>
  }
}

export default Analytics
