import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const URL = process.env.REACT_APP_API_URL

const SignIn = ({ allUsers, setAllUsers, user, setUser, setSidebarPage }) => {
  let navigate = useNavigate()

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios.get(`${URL}/users`)
      setAllUsers(res.data)
      console.log(res.data)
    }
    getAllUsers()
    setSidebarPage('Sign In')
  }, [])

  const [formValues, setFormValues] = useState({ username: '', email: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    allUsers.map((users) => {
      if (
        formValues.username === users.username &&
        formValues.email === users.email
      ) {
        setUser(users)
      }
    })

    setFormValues({ username: '', email: '' })
    if (user != null) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="SignInPage">
      <form className="signin-form">
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
          onClick={handleSubmit}
        >
          Sign In
          <FontAwesomeIcon icon={faArrowRight} className="fontIcon" />
        </Button>
      </form>
      <div className="link-switch">
        <Link className="link signLink" to="/signup">
          Don't have an account?
        </Link>
      </div>
    </div>
  )
}

export default SignIn
