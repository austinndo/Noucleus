import { useEffect } from 'react'
import { ProgressCircular } from 'react-rainbow-components'

const Analytics = ({ setSidebarPage, guides }) => {
  useEffect(() => {
    setSidebarPage('Analytics')
    editEfficiencyAverage(guides)
  }, [])

  let efficiencies = []
  let guideCount = 0
  let avg = 0

  const editEfficiencyAverage = (guides) => {
    guides.map((guide) => {
      efficiencies.push(guide.efficiency)
    })
    guideCount = efficiencies.length + 1
    console.log(guideCount)
    efficiencies.map((num) => {
      avg = num + avg
    })
    avg = avg / guideCount
    console.log(avg)
  }

  if (guides) {
    return (
      <div>
        <button onClick={() => editEfficiencyAverage(guides)}>Calc Avg</button>
        <ProgressCircular
          value={avg}
          variant={{ avg } > 60 ? 'success' : { avg } > 40 ? 'brand' : 'error'}
        />{' '}
        <h2>Average Edit Efficiency</h2>
        <h2>Analytics Page</h2>
        {guides.map((guide) => (
          <div className="AnalyticsCard" key={guide.id}>
            <h2>Designer: {guide.user}</h2>
            <div className="AnalyticsGC">
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
            </div>

            <div className="AnalyticsEfficiency">
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
          </div>
        ))}
      </div>
    )
  } else {
    return <h2>Guide Analytics loading ...</h2>
  }
}

export default Analytics
