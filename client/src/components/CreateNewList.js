import { createBeerList } from '../services/Queries'

const CreateNewList = ({
  user,
  toggle,
  setToggle,
  formValue,
  setFormValue,
  beerListId,
  setBeerListId,
  initialState
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    setToggle(!toggle)
    let response = await createBeerList({
      name: formValue.name,
      userId: user.id
    })
    setBeerListId(response.data)
  }

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
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
