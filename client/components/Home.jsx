import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MintBox from './MintBox.jsx'

function Home() {
  const [next, setNext] = useState(0)

  function handleClick() {
    setNext(next + 1)
  }

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in.
      </p>

      <div className="home-btn-container">
        <button className="mint-btn" onClick={handleClick}>
          MINT
        </button>
        <button className="view-btn">
          <Link to="/component">VIEW ALL</Link>
        </button>
      </div>
      {next > 0 && <MintBox />}
    </div>
  )
}

export default Home
