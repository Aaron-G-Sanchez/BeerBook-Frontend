import { addBeerToList } from '../services/Queries'

const SelectedBeer = ({ selectedBeer, beerListId, setBeerList, user }) => {
  const handleClick = async () => {
    const response = await addBeerToList(beerListId.id, {
      beerId: selectedBeer.id
    })

    setBeerList(response)
  }

  return (
    <>
      <section>
        {selectedBeer ? (
          <div>
            <h2 className="display-name">{selectedBeer.name}</h2>
            <h3>{selectedBeer.brewery}</h3>
            <img className="beer-image" src={selectedBeer.image} />
            <p>
              ABV: <span>{selectedBeer.abv}</span>
            </p>
            <p>Style: {selectedBeer.style}</p>
            {beerListId && user.id === beerListId.userId ? (
              <button className="add-to-list" onClick={handleClick}>
                Add to list
              </button>
            ) : null}
          </div>
        ) : (
          <div className="beer-guide">
            <h2>Select a beer for more info</h2>
          </div>
        )}
      </section>
    </>
  )
}

export default SelectedBeer
