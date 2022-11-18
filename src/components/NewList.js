const NewList = ({
  formValue,
  setFormValue,
  beerList,
  setBeerList,
  setBeerListId,
  getListFeed,
  userId
}) => {
  const handleClick = () => {
    setFormValue('')
    setBeerList(null)
    setBeerListId(null)
    getListFeed()
    userId()
  }
  return (
    <>
      <section className="new-user-list">
        <h2 className="new-list-title">{formValue.name}</h2>
        <div className="new-list-wrapper">
          {beerList
            ? beerList.data.beers.map((beer) => (
                <div key={beer.id} className="new-list-beer">
                  <p>{beer.name}</p>
                </div>
              ))
            : null}
        </div>
        {beerList ? (
          <div>
            <button className="save-list" onClick={handleClick}>
              Save
            </button>
          </div>
        ) : null}
      </section>
    </>
  )
}

export default NewList
