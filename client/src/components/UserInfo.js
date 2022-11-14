const UserInfo = ({ user }) => {
  // console.log(user.data)
  return (
    <>
      <section className="user-info">
        <div>
          <img
            className="user-icon"
            src="../assets/images/beerbook_logo.svg"
            alt="logo"
          />
          <h2>{user.data.name}</h2>
          <p>{user.data.email}</p>
          <button className="log-out">Log Out</button>
        </div>
      </section>
    </>
  )
}

export default UserInfo
