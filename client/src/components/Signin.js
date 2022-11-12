import { useNavigate } from 'react-router-dom'
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
        <p className="description-body">
          Welcome to BeerBook. Your one stop shop to remember your favorit
          beers, as well as tracking beers you want to try.
        </p>
      </section>
      <section className="login-form">
        <h1 className="login-header">Sign In</h1>
        <form className="login-body" onSubmit={onSubmit}>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="checkbox"></input>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  )
}

export default Signin

{
  /* <button onClick={onClick}>Signin</button> */
}
