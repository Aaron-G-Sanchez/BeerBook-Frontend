import { getBeerListById } from '../services/Queries'

const ListFeed = ({
  feed,
  setToggle,
  setFormValue,
  setBeerListId,
  setBeerList,
  setNewBeer
}) => {
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
      <section className="list-feed">
        <h2 className="feed-title">Recent Lists</h2>


        <div className="feed-wrapper">
          {feed
            ? feed.data.map((list) => (
                <div
                  key={list.id}
                  className="list"
                  onClick={() => selectList(list)}
                >
                  <p className="list-name">{list.name}</p>
                  <p>By: {list.creator.name}</p>
                </div>
              ))
            : null}
        </div>

      </section>
    </>
  )
}

export default ListFeed
