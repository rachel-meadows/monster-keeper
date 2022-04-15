import React, { useEffect, useState } from 'react'
import { getImage } from '../apiClient.js'
import { Link } from 'react-router-dom'

function MintBox({ setForm }) {
  //Get image from API
  const [image, setImage] = useState('')

  const healthRandom = Math.floor(Math.random() * 100 + 1)
  const damageRandom = Math.floor(Math.random() * 100 + 1)
  // const [count, setCount] = useState(0)
  const [health, setHealth] = useState(healthRandom)
  const [damage, setDamage] = useState(damageRandom)

  //Get data from API

  getImage()
    .then((str) => {
      // setCount(count + 1)
      setImage(str)
    })
    .catch((err) => console.error(err))

  useEffect(() => {
    setForm({
      image,
      health,
      damage,
    })
  }, [])

  return (
    <div className="mint-container">
      <div className="mint-container-right">
        <img src={image} alt="Monster Image" />
      </div>
      <div className="mint-container-left">
        <p className='margin-bottom'>Health: {health}</p>
        <p>Damage: {damage}</p>
        <button className="save-btn margin-right">
          <Link to="/add">Save</Link>
        </button>
      </div>
    </div>
  )
}

export default MintBox
