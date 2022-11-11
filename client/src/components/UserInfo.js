const UserInfo = ({ user }) => {
  return (
    <>
      <section className="user-info">
        <div>
          <p>{user.data.name}</p>
        </div>
      </section>
    </>
  )
}

export default UserInfo
