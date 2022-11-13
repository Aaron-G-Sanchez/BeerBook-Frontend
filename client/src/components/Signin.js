import { useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Signin = ({ setUser }) => {
  let navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser()
    setUser(payload)
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
          <input className="email" type="text" placeholder="Email" />
          <input className="password" type="password" placeholder="Password" />
          <div className="age-consent">
            <input classNeme="consent" type="checkbox" name="iAm21" />
            <label for="iAm21">I am 21+</label>
          </div>
          <div className="register-field">
            <p>Not a member?</p>
            <Link to="/register">
              <p>Sign Up</p>
            </Link>
          </div>
          <button className="submit" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </>
  )
}

export default Signin

{
  /* <button onClick={onClick}>Signin</button> */
}
