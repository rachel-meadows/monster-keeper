import React, { useState, useEffect } from 'react'
import { getMonsters } from '../apiClient.js'

function Collection() {
  const [arr, setArr] = useState([])

  useEffect(() => {
    getMonsters()
      .then((obj) => setArr(obj.body))
      .catch((err) => console.error(err))
  }, [])

  console.log(arr)
  return (
    <div>
      {arr.map((arr, i) => {
        return (
          <div key={i} className="monster-container">
            {/* <img src="./1.png" alt="Image Placeholder" /> */}
            <p>name: {arr.name}</p>
            <p>description: {arr.description}</p>
            <p>health: {arr.health}</p>
            <p>damage: {arr.damage}</p>
            <p>date captured: {arr.capture_date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Collection
