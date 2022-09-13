import { useEffect, useState } from 'react'
import { ProgressCircular, Chart, Dataset } from 'react-rainbow-components'

const Analytics = ({ setSidebarPage, guides }) => {
  let efficiencies = []
  let ids = []
  let guideCount = 0
  let avg = 0
  const [average, setAverage] = useState(0)

  useEffect(() => {
    const getData = () => {
      guides.forEach((guide) => {
        efficiencies.push(guide.efficiency)
      })
      guides.map((guide) => {
        ids.push(guide.id)
      })
    }
    const getAvgEfficiency = () => {
      guideCount = guides.length
      guides.map((guide) => {
        avg = avg + guide.efficiency
      })
      avg = avg / guideCount
      avg = Math.floor(avg)
      setAverage(avg)
    }
    setSidebarPage('Analytics')
    getData()
    getAvgEfficiency()
    // editEfficiencyAverage(guides)
  }, [])

  // const editEfficiencyAverage = (guides) => {
  //   guides.map((guide) => {
  //     efficiencies.push(guide.efficiency)
  //   })
  //   guideCount = efficiencies.length + 1
  //   console.log(guideCount)
  //   efficiencies.map((num) => {
  //     avg = num + avg
  //   })
  //   avg = avg / guideCount
  //   console.log(avg)
  // }

  if (guides) {
    return (
      <div>
        <div></div>
        {/* <button onClick={() => editEfficiencyAverage(guides)}>Calc Avg</button> */}
        <ProgressCircular
          value={average}
          variant={
            { average } > 60 ? 'success' : { average } > 40 ? 'brand' : 'error'
          }
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
