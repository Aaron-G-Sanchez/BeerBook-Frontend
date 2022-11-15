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
          <div className="beer-guide">
            <h2>Select a beer for more info!</h2>
          </div>
        )}
      </section>
    </>
  )
}

export default SelectedBeer
