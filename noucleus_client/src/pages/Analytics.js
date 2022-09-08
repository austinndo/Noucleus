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
            <ProgressCircular
              value={guide.percent_gc}
              variant={
                guide.percent_gc > 60
                  ? 'success'
                  : guide.percent_gc > 40
                  ? 'brand'
                  : 'error'
              }
            />
            <h3>Percent GC</h3>

            <ProgressCircular
              value={guide.efficiency}
              variant={
                guide.efficiency > 40
                  ? 'success'
                  : guide.efficiency > 40
                  ? 'brand'
                  : 'error'
              }
            />
            <h3>Efficiency</h3>
          </div>
        ))}
      </div>
    )
  } else {
    return <h2>Guide Analytics loading ...</h2>
  }
}

export default Analytics
