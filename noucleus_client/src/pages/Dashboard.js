import { useEffect } from 'react'

const Dashboard = ({ setSidebarPage, setUser }) => {
  useEffect(() => {
    setSidebarPage('Dashboard')
  }, [])
  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={() => setUser(null)}>Sign Out</button>
    </div>
  )
}

export default Dashboard
