import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MintBox from './MintBox.jsx'

function Home() {
  const [next, setNext] = useState(0)
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setNext(next + 1)
  }

  return (
    <div>
      <p>
        The year is 2084. The Godzilla Wars have ripped a hole in the
        synthosphere, allowing 1.21 Gigawatts of Pixel Monsters to stream into
        your home of New Miami. Brave trainers have taken to the neon lit
        streets to tame and do battle with their pixelated partners. You emerge
        from your sleeping pod, pop your collar and take a swig from your
        crystal pespsi as you gaze over the city. Are you ready?
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
