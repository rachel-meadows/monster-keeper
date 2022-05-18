import React, { useEffect, useState } from 'react'
import { getImage } from '../apiClient.js'
import { Link } from 'react-router-dom'

function MintBox({ monster }) {
  const { image, health, damage } = monster

  return (
    <div className="mint-container">
      <div className="mint-container-right">
        <img src={image} alt="Monster Image" />
      </div>
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
