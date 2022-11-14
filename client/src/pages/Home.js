import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { useEffect } from 'react'
import { getAllBeers, getFeed } from '../services/Queries'

const Home = ({ user, feed, setFeed, setBeer, beer }) => {
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
        <Beers beer={beer} />
        <UserInfo user={user} />
        <UserMadeList />
      </main>
    </>
  )
}

export default Home
