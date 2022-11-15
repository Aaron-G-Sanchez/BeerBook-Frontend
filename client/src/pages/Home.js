import { useState, useEffect } from 'react'
import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import SelectedBeer from '../components/SelectedBeer'
import { getAllBeers, getFeed } from '../services/Queries'
import CreateNewList from '../components/CreateNewList'

const Home = ({ user, feed, setFeed, setBeer, beer }) => {
  const [selectedBeer, setSelectedBeer] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [formValue, setFormValue] = useState('')

  // Axios calls to get the user made feed and all the beers
  const getListFeed = async () => {
    const feed = await getFeed()
    setFeed(feed)
  }

  const getBeer = async () => {
    const beer = await getAllBeers()
    // console.log(beer)
    setBeer(beer)
  }

  useEffect(() => {
    getListFeed()
    getBeer()
  }, [])

  const handleChange = (e) => {
    setFormValue(e.target.value)
  }

  return (
    <>
      <main className="user-dash">
        <ListFeed feed={feed} />
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
        <UserMadeList toggle={toggle} setToggle={setToggle} />
        <UserInfo user={user} />
      </main>
    </>
  )
}

export default Home
