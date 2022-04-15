import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Form from './Form.jsx'
// agree and import components
// suggested: Home, Collection, Add, Fight etc.

const App = () => {
  return (
    <div className="container">
      <Link to="/home">
        <h1 className="app-title">Team Godzilla</h1>
      </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/collection" element={<Collection />} /> */}
        <Route path="/add" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
