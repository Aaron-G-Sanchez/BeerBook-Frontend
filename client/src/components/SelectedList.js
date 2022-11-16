const SelectedList = ({ beerList }) => {
  return (
    <>
      <section className="selected-list">
        A list was clicked
        <div>
          <h2>{beerList ? beerList.data.name : null}</h2>
          {beerList
            ? beerList.data.beers.map((beer) => <p>{beer.name}</p>)
            : null}

          <button>Delete List</button>
        </div>
      </section>
    </>
  )
}

export default SelectedList
