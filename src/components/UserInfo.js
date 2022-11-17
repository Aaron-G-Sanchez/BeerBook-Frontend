import { useNavigate } from 'react-router-dom'

const UserInfo = ({ data, handleLogOut }) => {
  let navigate = useNavigate()
  const handleClick = (e) => {
    handleLogOut()
    navigate('/')
  }
  return (
    <>
      <section className="user-info">
        <div className="avatar-container">
          <img
            className="user-icon"
            src="../assets/images/beerbook_logo.svg"
            alt="logo"
          />
        </div>
        <div className="user-info-container">
          <h2>{data ? data.name : null}</h2>
          {/* <p>{data?.email}</p> */}
          <button onClick={handleClick} className="log-out">
            Log Out
          </button>
        </div>
      </section>
    </>
  )
}

export default UserInfo
