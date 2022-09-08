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
      <h2>Dashboard Page</h2>
      <button
        onClick={() => {
          setUser(null)
          navigate('/')
        }}
      >
        Sign Out
      </button>
      {/* {user.user_guides.map((guide) => (

      ))} */}
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.affiliation}</h2>
      <UserGuidesTable guides={user.user_guides} />
    </div>
  )
}

export default Dashboard
