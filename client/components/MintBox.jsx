import React, { useState } from 'react'
import { getImage } from '../apiClient.js'
import { Link } from 'react-router-dom'

function MintBox() {
  //Get image from API
  const [image, setImage] = useState('')

  const health = Math.floor(Math.random() * 100 + 1)
  const damage = Math.floor(Math.random() * 100 + 1)

  getImage()
    .then((str) => setImage(str))
    .catch((err) => console.error(err))

  return (
    <div className="mint-container">
      <div className="mint-container-right">
        <img src={image} alt="Monster Image" />
      </div>
      <div className="mint-container-left">
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <button className="save-btn">
          <Link to="/add">Save</Link>
        </button>
      </div>
    </div>
  )
}

export default MintBox
