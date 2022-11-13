import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
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
                <input className="first-name" type="text" placeholder="First" />
                <input className="last-name" type="text" placeholder="Last " />
              </div>
              <input className="email" type="text" placeholder="Email" />
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
              <input
                className="password"
                type="password"
                placeholder="Confirm Password"
              />
              <div className="age-consent-submit">
                <div className="age-consent">
                  <input classNeme="consent" type="checkbox" name="iAm21" />
                  <label for="iAm21">I am 21+</label>
                </div>
                <button className="register-submit" type="submit">
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
