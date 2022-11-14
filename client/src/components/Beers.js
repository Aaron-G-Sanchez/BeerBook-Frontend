const Beers = ({ beer }) => {
  return (
    <>
      <section className="beer-list">
        <h1>Beer</h1>
        <div className="beer-wrapper">
          {beer
            ? beer.data.map((beer) => (
                <div key={beer.id} className="single-beer">
                  <h3>{beer.name}</h3>
                  <p>{beer.brewery}</p>
                  {/* <img
                    className="beer-image"
                    src={beer.image}
                    alt="picture-of-beer"
                  /> */}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default Beers
