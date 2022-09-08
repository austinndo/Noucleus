import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ setSidebarPage, setUser }) => {
  let navigate = useNavigate()

  useEffect(() => {
    setSidebarPage('Dashboard')
  }, [])
  return (
    <div>
      <h2>Dashboard Page</h2>
      <button
        onClick={() => {
          setUser(null)
          navigate('/')
        }}
      >
        Sign Out
      </button>
    </div>
  )
}

export default Dashboard
