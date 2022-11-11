import { useNavigate } from 'react-router-dom'

const Signin = () => {
  let navigate = useNavigate()

  const onSubmit = (e) => {
    navigate('/home')
  }

  return (
    <>
      <section>
        <button onClick={onSubmit}>Signin</button>
      </section>
    </>
  )
}

export default Signin
