import { getBeerListById } from '../services/Queries'

const UserMadeList = ({
  data,
  toggle,
  setToggle,
  setBeerListId,
  setBeerList,
  setFormValue,
  setNewBeer
}) => {
  const handleClick = () => {
    setToggle(!toggle)
    setBeerListId(null)
    setBeerList(null)
    setNewBeer(false)
  }

  const selectList = async (list) => {
    setFormValue('')
    setToggle(false)
    setBeerListId(list)
    setNewBeer(false)
    const response = await getBeerListById(list.id)
    setBeerList(response)
  }

  return (
    <>
      <section className="user-made-lists">
        <h2>My Lists</h2>
        <div className="list-wrapper">
          {data
            ? data.BeerLists.map((list) => (
                <div
                  key={list.id}
                  className="users-list"
                  onClick={() => selectList(list)}
                >
                  <h4>{list.name} </h4>
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
