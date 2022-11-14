const SelectedBeer = ({ id, beer, selectedBeer, setSelectedBeer }) => {
  if (beer) {
    setSelectedBeer(beer.data.find((beer) => beer.id === id))
  }

  return (
    <>
      <section>
        {id ? (
          <div>
            <h2>{selectedBeer.name}</h2>
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
