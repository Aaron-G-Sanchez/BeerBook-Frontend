import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Signin = ({ setUser }) => {
  let navigate = useNavigate()

  const onClick = async (e) => {
    const payload = await SignInUser()
    setUser(payload)
    navigate('/home')
  }

  return (
    <>
      <section>
        <button onClick={onClick}>Signin</button>
      </section>
    </>
  )
}

export default Signin
