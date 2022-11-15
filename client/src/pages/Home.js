import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'
import { useState, useEffect } from 'react'
import { getFeed, getUser } from '../services/Queries'
import Client from '../services/api'

const Home = ({ user, setFeed, feed }) => {
  const [data, setData] = useState()
  const getListFeed = async () => {
    const feed = await getFeed()
    setFeed(feed)
  }

  const userId = async () => {
    let id = user.id
    console.log(user.id)
    const response = await getUser(`${id}`)
    setData(response.data)
  }

  useEffect(() => {
    getListFeed()
    userId()
  }, [user])

  return (
    <>
      <main className="user-dash">
        <ListFeed feed={feed} />
        <Beers />
        <UserInfo data={data} />
        <UserMadeList data={data} />
      </main>
    </>
  )
}

export default Home
