import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'

function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
