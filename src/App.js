import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { getFeed } from './services/Queries'
import { CheckSession } from './services/Auth'
import Register from './components/Register'

function App() {
  const [user, setUser] = useState(null)
  const [feed, setFeed] = useState(null)
  const [beer, setBeer] = useState(null)
  const [data, setData] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <Home
              user={user}
              feed={feed}
              setFeed={setFeed}
              beer={beer}
              setBeer={setBeer}
              data={data}
              setData={setData}
              handleLogOut={handleLogOut}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
