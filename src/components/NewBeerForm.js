import { useState } from 'react'
import { getNewBeers, newBeer } from '../services/Queries'
import { useNavigate } from 'react-router-dom'

const NewBeerForm = ({ setNewBeer, setBeer }) => {
  const initialState = { name: '', style: '', abv: 0.0, brewery: '', image: '' }
  const [formValues, setFormValues] = useState(initialState)
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await newBeer({
      name: formValues.name,
      style: formValues.style,
      abv: formValues.abv,
      brewery: formValues.brewery,
      image: formValues.image
    })
    const updatedBeers = await getNewBeers()
    setBeer(updatedBeers)
    setFormValues(initialState)
    setNewBeer(false)
    // navigate('/home')
  }

  return (
    <>
      <section className="beer-form">
        <h2 className="beer-form-title">New Beer Form</h2>
        <form onSubmit={handleSubmit} className="beer-form-wrapper">
          <input
            onChange={handleChange}
            name="name"
            value={formValues.name}
            type="text"
            placeholder="Beer Name"
            required
          />
          <input
            onChange={handleChange}
            name="style"
            value={formValues.style}
            type="text"
            placeholder="Beer Style"
            required
          />
          <input
            onChange={handleChange}
            name="abv"
            value={formValues.abv}
            type="number"
            step="0.1"
            placeholder="ABV"
            required
          />
          <input
            onChange={handleChange}
            name="brewery"
            value={formValues.brewery}
            type="text"
            placeholder="Brewery Name"
            required
          />
          <input
            onChange={handleChange}
            name="image"
            value={formValues.image}
            type="text"
            placeholder="Beer Image"
          />
          <button type="submit" className="beer-form-button">
            Add Beer
          </button>
        </form>
      </section>
    </>
  )
}

export default NewBeerForm
