import React, { useEffect, useState } from 'react'
import { getImage } from '../apiClient.js'
import { Link } from 'react-router-dom'

function MintBox({setForm }) {
  //Get image from API
  const [image, setImage] = useState('')
  // const [count, setCount] = useState(0)

  //Get data from API 

  const health = Math.floor((Math.random() * 100) + 1)
  const damage = Math.floor((Math.random() * 100) + 1)

  getImage().then((str) => {
    // setCount(count + 1)
    setImage(str)
  }
  ).catch(err => console.error(err))

  useEffect(() => {
    setForm({
      image: {image},
      health: {health},
      damage: {damage},
    })
  }, [])


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
