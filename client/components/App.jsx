import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Collection from './Collection.jsx'
// agree and import components
// suggested: Home, Collection, Add, Fight etc.

//2 ISSUES
//(1) form state is not passing as a prop in line 23
//(2) the 'image' is not being updated - I think it might be issues with async and timing of the promise being resolved in MintBox
const App = () => {
  const [form, setForm] = useState({
    image: '',
    health: 0,
    damage: 0,
  })
  return (
    <div className="container">
      <Link to="/home">
        <h1 className="app-title">Monster Keeper</h1>
      </Link>
      <Routes>
        <Route path="/home" element={<Home setForm={setForm} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
