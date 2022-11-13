const UserInfo = ({ user }) => {
  console.log(user.data)
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
        </div>
      </section>
    </>
  )
}

export default UserInfo
