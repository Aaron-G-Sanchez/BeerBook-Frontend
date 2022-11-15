const UserInfo = ({ user, data }) => {
  console.log(data)
  return (
    <>
      <section className="user-info">
        <div>
          <img
            className="user-icon"
            src="../assets/images/beerbook_logo.svg"
            alt="logo"
          />
          <h2>{data?.name}</h2>
          <p>{data?.email}</p>
        </div>
      </section>
    </>
  )
}

export default UserInfo
