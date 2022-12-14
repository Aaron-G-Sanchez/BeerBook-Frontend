import { destroyList, removeBeerFromList } from '../services/Queries'

const SelectedList = ({
  user,
  beerList,
  beerListId,
  setBeerListId,
  setBeerList
}) => {
  const handleClick = async () => {
    const deleteList = await destroyList(beerListId.id)
    window.location.reload()
  }

  const saveList = () => {
    setBeerListId(null)
    setBeerList(null)
  }

  const getBeerId = async (id) => {
    const response = await removeBeerFromList(beerListId.id, id)
    setBeerList(response)
  }

  const moveBack = () => {
    setBeerList(null)
    setBeerListId(null)
  }

  return (
    <>
      <section className="selected-list">
        <p onClick={moveBack} className="back-button">
          Back
        </p>
        <h2 className="selected-list-title">
          {beerList ? beerList.data.name : null}
        </h2>

        <div className="selected-list-wrapper">
          {beerList
            ? beerList.data.beers.map((beer) => (
                <div className="beer-on-list" key={beer.id}>
                  <p>{beer.name}</p>
                  {user.id === beerList.data.userId ? (
                    <button
                      className="remove-beer"
                      onClick={() => getBeerId(beer.id)}
                    >
                      X
                    </button>
                  ) : null}
                </div>
              ))
            : null}
          {(() => {
            if (beerList) {
              if (user.id === beerList.data.userId) {
                return (
                  <div className="list-controls">
                    <button className="save-list-button" onClick={saveList}>
                      Save
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to delete this list?'
                          )
                        ) {
                          handleClick()
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )
              }
            }
          })()}
        </div>
      </section>
    </>
  )
}

export default SelectedList
