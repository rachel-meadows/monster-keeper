import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MintBox({ monster }) {
  const { image, health, damage } = monster

  return (
    <div className="mint-container">
      <img src={image} alt="Monster Image" />
      <div className="mint-container-left">
        <p className="margin-bottom">Health: {health}</p>
        <p>Damage: {damage}</p>
        <button className="save-btn margin-right">
          <Link to="/add">Save</Link>
        </button>
      </div>
    </div>
  )
}

export default MintBox
