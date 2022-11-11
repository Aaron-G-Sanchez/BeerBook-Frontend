import Beers from '../components/Beers'
import ListFeed from '../components/ListFeed'
import UserInfo from '../components/UserInfo'
import UserMadeList from '../components/UserMadeList'

const Home = ({ user }) => {
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
