import React, { useState } from 'react'
import { getImage } from '../apiClient.js'

function MintBox() {
  //Get image from API
  const [image, setImage] = useState('')

  const health = Math.floor((Math.random() * 100) + 1)
  const damage = Math.floor((Math.random() * 100) + 1)
 
  getImage().then((str) => setImage(str)).catch(err => console.error(err))

  return (
    <div>
      <img src={image} alt="Monster Image"/>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <button>KEEP</button>
    </div>
  )
}

export default MintBox