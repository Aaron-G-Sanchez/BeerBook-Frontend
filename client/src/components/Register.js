import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { useState } from 'react'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: `${formValues.firstName} ${formValues.lastName}`,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
  }

  return (
    <>
      <>
        <main className="register-page">
          <section className="login-description">
            <h1 className="description-header">BEERBOOK</h1>
            <div className="description-body">
              <p>
                Welcome to <span className="beerbook">BeerBook</span>. <br />
                Your one stop shop to remember your favorite beers, as well as
                tracking beers you want to try.
              </p>
            </div>
          </section>
          <section className="login-form">
            <img
              className="logo"
              src="../assets/images/beerbook_logo.svg"
              alt="logo"
            />
            <h2 className="login-header">Register</h2>
            <form className="login-body" onSubmit={handleSubmit}>
              <div className="new-user-name">
                <input
                  onChange={handleChange}
                  className="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First"
                  value={formValues.firstName}
                  required
                />
                <input
                  onChange={handleChange}
                  className="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last"
                  value={formValues.lastName}
                  required
                />
              </div>
              <input
                onChange={handleChange}
                className="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formValues.email}
              />
              <input
                onChange={handleChange}
                className="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
              <input
                onChange={handleChange}
                className="password"
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                required
              />
              <div className="age-consent-submit">
                <div className="age-consent">
                  <input
                    className="consent"
                    type="checkbox"
                    name="iAm21"
                    required
                  />
                  <label htmlFor="iAm21">I am 21+</label>
                </div>
                <button
                  disabled={
                    !formValues.email ||
                    (!formValues.password &&
                      formValues.confirmPassword === formValues.password)
                  }
                  className="register-submit"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </form>
          </section>
        </main>
      </>
    </>
  )
}

export default Register
