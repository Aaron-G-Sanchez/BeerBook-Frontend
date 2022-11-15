const UserInfo = ({ data }) => {
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
          <button className="log-out">Log Out</button>
        </div>
      </section>
    </>
  )
}

export default UserInfo
