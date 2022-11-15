const UserMadeList = ({ data, toggle, setToggle }) => {
  const handleClick = (e) => {
    setToggle(!toggle)
  }

  return (
    <>
      <section className="users-list">
        <h2>My Lists</h2>
        <div>
          <button className="add-list-button" onClick={handleClick}>
            +
          </button>
        </div>
      </section>
    </>
  )
}

export default UserMadeList
