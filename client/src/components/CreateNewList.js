const CreateNewList = ({ toggle, setToggle, formValue, handleChange }) => {
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
            name="name"
            placeholder="New List Name"
            value={formValue.name}
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
