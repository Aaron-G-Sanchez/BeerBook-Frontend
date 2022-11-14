import { useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { useState } from 'react'

const Signin = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/home')
  }

  return (
    <>
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
        <h2 className="login-header">Sign In</h2>
        <form className="login-body" onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            className="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
          />
          <input
            onChange={handleChange}
            className="password"
            name="password"
            type="password"
            value={formValues.password}
            placeholder="Password"
            required
          />
          <div className="register-field">
            <p>Not a member?</p>
            <Link to="/register">
              <p>Sign Up</p>
            </Link>
          </div>
          <button
            className="submit"
            type="submit"
            disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </button>
        </form>
      </section>
    </>
  )
}

export default Signin
