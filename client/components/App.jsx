import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Collection from './Collection.jsx'

const App = () => {
  const [form, setForm] = useState({
    image: '',
    health: 0,
    damage: 0,
  })
  return (
    <div className="container">
      <Link to="/">
        <h1 className="app-title">Monster Keeper</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Home setForm={setForm} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/add" element={<Form form={form} />} />
      </Routes>
    </div>
  )
}

export default App
