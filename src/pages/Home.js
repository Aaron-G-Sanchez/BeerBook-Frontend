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
import SelectedList from '../components/SelectedList'
import NewBeerForm from '../components/NewBeerForm'

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
  const [beerListId, setBeerListId] = useState(null)
  const [beerList, setBeerList] = useState(null)
  const [newBeer, setNewBeer] = useState(false)

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

  return user ? (
    <>
      <main className="user-dash">
        {(() => {
          if (formValue.name) {
            return (
              <NewList
                formValue={formValue}
                setFormValue={setFormValue}
                beerList={beerList}
                setBeerList={setBeerList}
                setBeerListId={setBeerListId}
                getListFeed={getListFeed}
                userId={userId}
              />
            )
          } else if (beerListId) {
            return (
              <SelectedList
                user={user}
                beerList={beerList}
                beerListId={beerListId}
                setBeerListId={setBeerListId}
                setBeerList={setBeerList}
                setFeed={setFeed}
                getListFeed={getListFeed}
              />
            )
          } else {
            return (
              <ListFeed
                feed={feed}
                setToggle={setToggle}
                setFormValue={setFormValue}
                setBeerListId={setBeerListId}
                setBeerList={setBeerList}
                setNewBeer={setNewBeer}
              />
            )
          }
        })()}

        {(() => {
          if (toggle) {
            return (
              <CreateNewList
                user={user}
                toggle={toggle}
                setToggle={setToggle}
                formValue={formValue}
                setFormValue={setFormValue}
                setBeerListId={setBeerListId}
              />
            )
          } else if (!toggle && newBeer) {
            return <NewBeerForm setNewBeer={setNewBeer} setBeer={setBeer} />
          } else {
            return (
              <Beers
                beer={beer}
                setSelectedBeer={setSelectedBeer}
                setNewBeer={setNewBeer}
              />
            )
          }
        })()}

        <SelectedBeer
          beer={beer}
          selectedBeer={selectedBeer}
          setSelectedBeer={setSelectedBeer}
          beerListId={beerListId}
          setBeerList={setBeerList}
          user={user}
        />
        <UserMadeList
          data={data}
          toggle={toggle}
          setToggle={setToggle}
          setBeerListId={setBeerListId}
          setBeerList={setBeerList}
          setFormValue={setFormValue}
          setNewBeer={setNewBeer}
        />
        <UserInfo data={data} user={user} handleLogOut={handleLogOut} />
      </main>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')} className="protected-button">
        Sign In
      </button>
    </div>
  )
}

export default Home
