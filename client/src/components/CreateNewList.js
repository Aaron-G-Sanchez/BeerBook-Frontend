const CreateNewList = ({
  toggle,
  setToggle,
  formValue,
  setFormValue,
  handleChange
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setToggle(!toggle)
    // setFormValue('')
  }

  return (
    <>
      <section className="new-list">
        <h1>Create A New List</h1>

        <form className="new-list-form" onSubmit={handleSubmit}>
          <input
            className="new-list-input"
            type="text"
            placeholder="New List Name"
            value={formValue}
            onChange={handleChange}
          />
          <button className="new-list-submit" type="submit">
            Create!
          </button>
        </form>
      </section>
    </>
  )
}

export default CreateNewList
