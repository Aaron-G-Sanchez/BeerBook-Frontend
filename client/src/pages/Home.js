import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { useEffect } from 'react'
import { getFeed } from '../services/Queries'

const Home = ({ user }) => {
  const getListFeed = async () => {
    const feed = await getFeed()
    console.log(feed)
  }

  useEffect(() => {
    getListFeed()
  }, [])

  return (
    <>
      <main className="user-dash">
        <ListFeed />
        <Beers />
        <UserInfo user={user} />
        <UserMadeList />
      </main>
    </>
  )
}

export default Home
