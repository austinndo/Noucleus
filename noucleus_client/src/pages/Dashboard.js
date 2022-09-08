import { useEffect } from 'react'

const Dashboard = ({ setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Dashboard')
  }, [])
  return <h2>Dashboard Page</h2>
}

export default Dashboard
