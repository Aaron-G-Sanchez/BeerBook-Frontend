const SelectedBeer = ({ selectedBeer }) => {
  return (
    <>
      <section>
        {selectedBeer ? (
          <div>
            <h2>{selectedBeer.name}</h2>
            <h3>{selectedBeer.brewery}</h3>
            <img className="beer-image" src={selectedBeer.image} />
            <p>
              ABV: <span>{selectedBeer.abv}</span>
            </p>
          </div>
        ) : (
          <div>
            <p>Select a beer for more info!</p>
          </div>
        )}
      </section>
    </>
  )
}

export default SelectedBeer
