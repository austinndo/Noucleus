import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserGuidesTable from '../components/tables/UserGuidesTable'

const Dashboard = ({ setSidebarPage, user, setUser }) => {
  let navigate = useNavigate()

  useEffect(() => {
    setSidebarPage('Dashboard')
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          setUser(null)
          navigate('/')
        }}
      >
        Sign Out
      </button>

      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Affiliation: {user.affiliation}</h2>
      <UserGuidesTable guides={user.user_guides} />
    </div>
  )
}

export default Dashboard
