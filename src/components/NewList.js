const NewList = ({
  formValue,
  setFormValue,
  beerList,
  setBeerList,
  setBeerListId
}) => {
  const handleClick = () => {
    setFormValue('')
    setBeerList(null)
    setBeerListId(null)
  }
  return (
    <>
      <section className="new-user-list">
        <h2>{formValue.name}</h2>
        {beerList ? (
          beerList.data.beers.map((beer) => (
            <div key={beer.id}>
              <p>{beer.name}</p>
            </div>
          ))
        ) : (
          <div>no beer yet</div>
        )}
        <button className="save-list" onClick={handleClick}>
          Save!
        </button>
      </section>
    </>
  )
}

export default NewList
