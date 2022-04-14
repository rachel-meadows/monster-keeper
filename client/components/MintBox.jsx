import React from 'react'
import { getImage } from '../apiClient.js'

function MintBox() {
  //Get image from API
  

  const health = Math.floor((Math.random() * 100) + 1)
  const damage = Math.floor((Math.random() * 100) + 1)
  let image = ''

  getImage().then((url) => image = url).catch(err => console.error(err))

  console.log(image)

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