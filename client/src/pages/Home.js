import { useState, useEffect } from 'react'
import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import SelectedBeer from '../components/SelectedBeer'
import { getAllBeers, getFeed } from '../services/Queries'

const Home = ({ user, feed, setFeed, setBeer, beer }) => {
  const [toggle, setToggle] = useState(false)

  // Axios calls to get the user made feed and all the beers
  const getListFeed = async () => {
    const feed = await getFeed()
    setFeed(feed)
  }

  const getBeer = async () => {
    const beer = await getAllBeers()
    console.log(beer)
    setBeer(beer)
  }

  useEffect(() => {
    getListFeed()
    getBeer()
  }, [])

  return (
    <>
      <main className="user-dash">
        <ListFeed feed={feed} />
        <Beers beer={beer} toggle={toggle} setToggle={setToggle} />
        <SelectedBeer toggle={toggle} />
        <UserMadeList />
        <UserInfo user={user} />
      </main>
    </>
  )
}

export default Home
