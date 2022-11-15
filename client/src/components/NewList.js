const NewList = ({ formValue, setFormValue }) => {
  const handleClick = () => {
    setFormValue('')
  }
  return (
    <>
      <section className="new-user-list">
        <h2>{formValue}</h2>
        <button className="save-list" onClick={handleClick}>
          Save!
        </button>
      </section>
    </>
  )
}

export default NewList
