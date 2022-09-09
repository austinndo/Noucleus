import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const URL = process.env.REACT_APP_API_URL

const SignUp = ({ setSidebarPage }) => {
  let navigate = useNavigate()

  useEffect(() => {
    setSidebarPage('Sign In')
  }, [])

  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    password_digest: 'crispr',
    affiliation: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = { ...formValues }
    let res = await axios
      .post(`${URL}/users`, data)
      .catch((error) => console.log(error))
    setFormValues({
      name: '',
      username: '',
      email: '',
      password_digest: 'crispr',
      affiliation: ''
    })
    navigate('/signin')
  }

  return (
    <div className="SignUpPage">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <Input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            value={formValues.username}
            required
          />
        </div>
        <div className="input-wrapper">
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            value={formValues.email}
            required
          />
        </div>
        <div className="input-wrapper">
          <Input
            onChange={handleChange}
            name="affiliation"
            type="text"
            placeholder="affiliation"
            value={formValues.affiliation}
            required
          />
        </div>
        <Button
          className="signin-btn"
          disabled={
            !formValues.name ||
            !formValues.username ||
            !formValues.email ||
            !formValues.affiliation
          }
          onClick={handleSubmit}
        >
          Sign Up
          <FontAwesomeIcon icon={faArrowRight} className="fontIcon" />
        </Button>
      </form>
    </div>
  )
}

export default SignUp
