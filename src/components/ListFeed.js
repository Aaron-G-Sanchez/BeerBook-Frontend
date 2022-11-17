import { getBeerListById } from '../services/Queries'

const ListFeed = ({
  feed,
  setToggle,
  setFormValue,
  setBeerListId,
  setBeerList
}) => {
  const selectList = async (list) => {
    setFormValue('')
    setToggle(false)
    setBeerListId(list)
    const response = await getBeerListById(list.id)
    setBeerList(response)
  }
  return (
    <>
      <section className="list-feed">
        <h2>Recent Lists</h2>

        {feed
          ? feed.data.map((list) => (
              <div
                key={list.id}
                className="list"
                onClick={() => selectList(list)}
              >
                <p className="list-name">{list.name}</p>
                {/* <p>By: {list.creator.name}</p> */}
              </div>
            ))
          : null}
      </section>
    </>
  )
}

export default ListFeed
