import Signin from '../components/Signin'

const Landing = ({ setUser }) => {
  return (
    <>
      <main className="landing-page">
        <Signin setUser={setUser} />
      </main>
    </>
  )
}

export default Landing
