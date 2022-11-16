// import { useNavigate } from 'react-router-dom'

const NewList = ({ formValue, setFormValue, beerListId }) => {
  // let navigate = useNavigate()
  const handleClick = () => {
    setFormValue('')
    window.location.reload()
  }
  return (
    <>
      <section className="new-user-list">
        <h2>{formValue.name}</h2>
        {/* {beerList.data.beers ? (
          <div>
            <p>{beerList.data.beers.name}</p>
          </div>
        ) : null} */}
        <button className="save-list" onClick={handleClick}>
          Save!
        </button>
      </section>
    </>
  )
}

export default NewList
