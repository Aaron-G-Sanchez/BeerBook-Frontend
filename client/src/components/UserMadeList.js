const UserMadeList = ({ data, toggle, setToggle }) => {
  const handleClick = (e) => {
    setToggle(!toggle)
  }
  return (
    <>
      <section className="user-made-lists">
        <h2>My Lists</h2>
        <div className="list-wrapper">
          {data
            ? data.BeerLists.map((list) => (
                <div key={list.id} className="users-list">
                  {list.name}{' '}
                </div>
              ))
            : null}
          <button className="add-list-button" onClick={handleClick}>
            +
          </button>
        </div>
      </section>
    </>
  )
}

export default UserMadeList
