import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { useEffect } from 'react'
import { getFeed } from '../services/Queries'

const Home = ({ user, setFeed, feed }) => {
  const getListFeed = async () => {
    const feed = await getFeed()
    console.log(feed)
    setFeed(feed)
  }

  useEffect(() => {
    getListFeed()
  }, [])

  return (
    <>
      <main className="user-dash">
        <ListFeed feed={feed} />
        <Beers />
        <UserInfo user={user} />
        <UserMadeList />
      </main>
    </>
  )
}

export default Home
