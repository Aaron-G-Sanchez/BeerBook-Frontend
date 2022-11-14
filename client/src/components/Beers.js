const Beers = ({ beer }) => {
  return (
    <>
      <section className="beer-list">
        <h1>Beer</h1>
        {beer
          ? beer.data.map((beer) => <div key={beer.id}>{beer.name}</div>)
          : null}
      </section>
    </>
  )
}

export default Beers
