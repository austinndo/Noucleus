import React from 'react'
import { useEffect, useState } from 'react'
import { ProgressCircular } from 'react-rainbow-components'

const Analytics = ({ setSidebarPage, guides }) => {
  let efficiencies = []
  let ids = []
  let guideCount = 0
  let avg = 0
  const [average, setAverage] = useState(0)
  const [idLabels, setidLabels] = useState([])
  const [efficiencyValues, setEfficiencyValues] = useState([])

  useEffect(() => {
    const getData = () => {
      guides.forEach((guide) => {
        efficiencies.push(guide.efficiency)
      })
      setEfficiencyValues(efficiencies)
      guides.map((guide) => {
        ids.push(guide.id)
      })
      setidLabels(ids)
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
  }, [])

  if (guides) {
    return (
      <div className="AnalyticsPage">
        <div className="AnalyticsHeader">
          <ProgressCircular
            value={average}
            variant={
              { average } > 60
                ? 'success'
                : { average } > 40
                ? 'brand'
                : 'error'
            }
          />{' '}
          <h2>Average Edit Efficiency</h2>
        </div>
        {guides.reverse().map((guide) => (
          <div className="AnalyticsCard" key={guide.id}>
            <h3>#{guide.id}:</h3>
            <div className="AnalyticsGC">
              <ProgressCircular
                value={guide.percent_gc}
                variant={
                  guide.percent_gc > 60
                    ? 'brand'
                    : guide.percent_gc > 40
                    ? 'success'
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
