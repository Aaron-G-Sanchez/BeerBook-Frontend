const CreateNewList = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className="new-list">
        <h1>Create New List</h1>

        <form className="new-list-form" onSubmit={handleSubmit}>
          <input
            className="new-list-input"
            type="text"
            placeholder="New List Name"
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
