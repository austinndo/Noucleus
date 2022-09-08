import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ setSidebarPage, user, setUser }) => {
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
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.affiliation}</h2>
      <ul>
        {user.user_guides.map((guide) => (
          <li key={guide.id}>{guide.sequence}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
