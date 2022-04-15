import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MintBox from './MintBox.jsx'

import Loading from './Loading.jsx'

function Home({ setForm }) {
  const [next, setNext] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    // add API here
  }, [next])
  // console.log(next)
  function handleNext() {
    setNext(next + 1)
  }

  function handleNextReset() {
    setNext(0)
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
        <button className="mint-btn" onClick={handleNext}>
          MINT
        </button>
        <button className="view-btn">
          <Link to="/collection" onClick={handleNextReset}>
            VIEW ALL
          </Link>
        </button>
      </div>
      {next > 0 && loading ? <Loading /> : <MintBox setForm={setForm} />}
    </div>
  )
}

export default Home
