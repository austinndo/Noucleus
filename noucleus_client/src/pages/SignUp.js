import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SignUp = ({ setSidebarPage }) => {
  let navigate = useNavigate()

  useEffect(() => {
    setSidebarPage('Sign In')
  }, [])

  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    passwordDigest: 'crispr',
    affiliation: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${URL}/genes`)
    // axios post users
    // name :
    // username :
    // email :
    // passwordDigest : ?
    // affiliation :
    //setFormValues({
    //   name: '',
    //   username: '',
    //   email: '',
    //   passwordDigest: 'crispr',
    //   affiliation: ''
    // })
    navigate('/genes')
  }

  return (
    <div className="signUpPage">
      <div className="signup-container">
        <div className="signup-background">
          <form className="signup-form" onSubmit={handleSubmit}>
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
                !formValues.username ||
                !formValues.email ||
                !formValues.affiliation
              }
            >
              Sign In
              <FontAwesomeIcon icon={faArrowRight} className="fontIcon" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
