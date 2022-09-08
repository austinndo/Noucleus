import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const URL = process.env.REACT_APP_API_URL

const SignIn = ({ user, setUser, sidebarPage, setSidebarPage }) => {
  let navigate = useNavigate()
  const [allUsers, setAllUsers] = useState([])
  const [formValues, setFormValues] = useState({ username: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const payload = await SignInUser(formValues)
    setFormValues({ username: '', email: '' })
    //If username and email is in the user table, set user to the user array/object
    // if (payload.isHunter === true) {
    //   navigate('/feed')
    // } else {
    //   navigate('/profile')
    //
    //
  }

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios.get(`${URL}/users`)
      console.log(res.data)
      console.log(res.data.map((s) => s.user_guides))
      setAllUsers(res.data)
    }
    getAllUsers()
    setSidebarPage('Sign In')
  }, [])

  return (
    <div className="SignInPage">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="input">
          <Input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            value={formValues.username}
            required
          />
        </div>
        <div className="input">
          <Input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="email"
            value={formValues.email}
            required
          />
        </div>
        <Button
          className="signin-btn"
          disabled={!formValues.username || !formValues.email}
        >
          Sign In
          <FontAwesomeIcon icon={faArrowRight} className="fontIcon" />
        </Button>
        <div className="link-switch">
          <Link className="link signLink" to="/signup">
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn
