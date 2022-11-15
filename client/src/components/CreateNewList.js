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
    setFormValue('')
  }

  // const handleChange = (e) => {
  //   setFormValue(e.target.value)
  //   console.log(formValue)
  // }
  // STOPED HERE ^ TRYING TO GET STATE TO NOT BE DELAYED.
  return (
    <>
      <section className="new-list">
        <h1>Create New List</h1>

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
