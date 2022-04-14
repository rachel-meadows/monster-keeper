import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'

// agree and import components
// suggested: Home, Collection, Add, Fight etc.

const App = () => {
  return (
    <div>
      <h1>Team Godzilla</h1>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
      </Routes>
    </div>
  )
}

export default App
