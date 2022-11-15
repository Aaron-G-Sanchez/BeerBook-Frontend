import Beers from '../components/Beers'
import { useState, useEffect } from 'react'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { getFeed, getUser, getAllBeers } from '../services/Queries'
import SelectedBeer from '../components/SelectedBeer'
import CreateNewList from '../components/CreateNewList'
import NewList from '../components/NewList'

const Home = ({ user, feed, setFeed, setBeer, beer, data, setData }) => {
  const initialState = {
    name: ''
  }

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
    // console.log(beer)
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

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  return (
    <>
      <main className="user-dash">
        {formValue.name ? (
          <NewList formValue={formValue} setFormValue={setFormValue} />
        ) : (
          <ListFeed feed={feed} />
        )}
        {toggle ? (
          <CreateNewList
            toggle={toggle}
            setToggle={setToggle}
            formValue={formValue}
            setFormValue={setFormValue}
            handleChange={handleChange}
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
        <UserInfo data={data} user={user} />
      </main>
    </>
  )
}

export default Home
