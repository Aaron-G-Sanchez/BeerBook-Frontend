const Beers = ({ beer }) => {
  // Gets the beer id when the div is clicked
  const selectBeer = (id) => {
    console.log(id)
  }

  return (
    <>
      <section className="beer-list">
        <h1>Beer</h1>
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
