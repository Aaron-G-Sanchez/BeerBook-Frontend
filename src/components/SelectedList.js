import { destroyList } from '../services/Queries'

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

  // const getBeerId = (id) => {
  //   console.log(id)
  // }

  return (
    <>
      <section className="selected-list">
        <div className="selected-list=wrapper">
          <h2>{beerList ? beerList.data.name : null}</h2>
          {beerList
            ? beerList.data.beers.map((beer) => (
                <div className="beer-on-list" key={beer.id}>
                  <p>{beer.name}</p>
                  {/* <button
                    className="remove-beer"
                    // onClick={() => getBeerId(beer.id)}
                  >
                    X
                  </button> */}
                </div>
              ))
            : null}

          {(() => {
            if (beerList) {
              if (user.id === beerList.data.userId) {
                return (
                  <div className="list-controls">
                    <button className="save-list" onClick={saveList}>
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
