import axios from 'axios'
import { URL } from '../Globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
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
    // navigate()
  }

  return (
    <div className="signUpPage">
      <div className="signup-container">
        <div className="signup-background">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="name"
                value={formValues.name}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="username"
                value={formValues.username}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="email"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                name="affiliation"
                type="text"
                placeholder="affiliation"
                value={formValues.affiliation}
                required
              />
            </div>
            <button
              className="signin-btn"
              disabled={!formValues.username || !formValues.email}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
