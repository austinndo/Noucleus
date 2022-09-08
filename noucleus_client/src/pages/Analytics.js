import { useEffect } from 'react'

const Analytics = ({ setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Analytics')
  }, [])
  return <h2>Analytics Page</h2>
}

export default Analytics
