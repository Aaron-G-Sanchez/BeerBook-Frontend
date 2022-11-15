const UserMadeList = ({ data }) => {
  console.log(data)
  return (
    <>
      <section className="users-list">
        <h2>My Lists</h2>
        <button className="add-list-button">+</button>
      </section>
    </>
  )
}

export default UserMadeList
