import Beers from '../components/Beers'
import { useState, useEffect } from 'react'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { getFeed, getUser, getAllBeers } from '../services/Queries'
import { useNavigate } from 'react-router-dom'
import SelectedBeer from '../components/SelectedBeer'
import CreateNewList from '../components/CreateNewList'
import NewList from '../components/NewList'

const Home = ({
  user,
  feed,
  setFeed,
  setBeer,
  beer,
  data,
  setData,
  handleLogOut
}) => {
  const initialState = {
    name: ''
  }
  const navigate = useNavigate()
  const [selectedBeer, setSelectedBeer] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [formValue, setFormValue] = useState(initialState)
  // const [data, setData] = useState()

  const getListFeed = async () => {
    const feed = await getFeed()
    setFeed(feed)
  }

  const getBeer = async () => {
    const beer = await getAllBeers()
    setBeer(beer)
  }
  const userId = async () => {
    if (user) {
      let id = user.id
      const response = await getUser(`${id}`)
      setData(response.data)
    }
  }

  useEffect(() => {
    getListFeed()
    getBeer()
    userId()
  }, [user])

  // const handleChange = (e) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value })
  // }

  return user ? (
    <>
      <main className="user-dash">
        {formValue.name ? (
          <NewList formValue={formValue} setFormValue={setFormValue} />
        ) : (
          <ListFeed feed={feed} />
        )}
        {toggle ? (
          <CreateNewList
            user={user}
            toggle={toggle}
            setToggle={setToggle}
            formValue={formValue}
            setFormValue={setFormValue}
            initialState={initialState}
            // handleChange={handleChange}
          />
        ) : (
          <Beers beer={beer} setSelectedBeer={setSelectedBeer} />
        )}
        <SelectedBeer
          beer={beer}
          selectedBeer={selectedBeer}
          setSelectedBeer={setSelectedBeer}
        />
        <UserMadeList data={data} toggle={toggle} setToggle={setToggle} />
        <UserInfo data={data} user={user} handleLogOut={handleLogOut} />
      </main>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default Home
