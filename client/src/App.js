import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { getFeed } from './services/Queries'

function App() {
  const [user, setUser] = useState(null)
  const [feed, setFeed] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route
          path="/home"
          element={<Home user={user} setFeed={setFeed} feed={feed} />}
        />
      </Routes>
    </>
  )
}

export default App
