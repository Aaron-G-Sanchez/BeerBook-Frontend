import { destroyList } from '../services/Queries'

const SelectedList = ({ beerList, beerListId }) => {
  const handleClick = async () => {
    const deleteList = await destroyList(beerListId.id)
    window.location.reload()
  }

  return (
    <>
      <section className="selected-list">
        A list was clicked
        <div>
          <h2>{beerList ? beerList.data.name : null}</h2>
          {beerList
            ? beerList.data.beers.map((beer) => <p>{beer.name}</p>)
            : null}

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete?')) {
                handleClick()
              }
            }}
          >
            Delete List
          </button>
        </div>
      </section>
    </>
  )
}

export default SelectedList
