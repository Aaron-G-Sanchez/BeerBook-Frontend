const Beers = ({ beer, setSelectedBeer, setNewBeer }) => {
  const selectBeer = (id) => {
    if (beer) {
      setSelectedBeer(beer.data.find((beer) => beer.id === id))
    }
  }

  const handleClick = () => {
    setNewBeer(true)
  }

  return (
    <>
      <section className="beer-list">
        <h1>Beer</h1>
        <div className="button-wrapper">
          <button onClick={handleClick} className="add-beer-button">
            +
          </button>
        </div>
        <div className="beer-wrapper">
          {beer
            ? beer.data.map((beer) => (
                <div
                  key={beer.id}
                  className="single-beer"
                  onClick={() => selectBeer(beer.id)}
                >
                  <h3 className="beer-name">{beer.name}</h3>
                  <h4 className="brewery">Brewery:</h4>
                  <p className="beer-maker">{beer.brewery}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default Beers
