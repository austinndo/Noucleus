import axios from 'axios'
import { useState, useEffect } from 'react'
import { URL } from '../Globals'

const SignIn = () => {
  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios.get(`${URL}/users`)
      console.log(res.data)
      setAllUsers(res.data)
    }
    getAllUsers()
  }, [])

  return (
    <div>
      <div>
        <h3>Sign In Form Here</h3>
      </div>
    </div>
  )
}

export default SignIn
