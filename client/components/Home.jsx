import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MintBox from './MintBox.jsx'
import Loading from './Loading.jsx'
import { getNewMonsterImageAPI } from '../api'
import { convertToBase64 } from './utils'

function Home({ setForm }) {
  const [monster, setMonster] = useState({})
  const [loading, setLoading] = useState(false)
  const healthRandom = Math.floor(Math.random() * 100 + 1)
  const damageRandom = Math.floor(Math.random() * 100 + 1)
  const [health, setHealth] = useState(healthRandom)
  const [damage, setDamage] = useState(damageRandom)
  const [image, setImage] = useState('')

  useEffect(() => {
    getNewMonster()
  }, [])

  function getNewMonster() {
    setLoading(true)
    getNewMonsterImageAPI().then((data) => {
      setImage('data:image/svg+xml;base64,' + data)
      setMonster({
        image: 'data:image/svg+xml;base64,' + data,
        health: health,
        damage: damage,
      })
      setLoading(false)
    })
  }

  useEffect(() => {
    setForm(monster)
  }, [monster])

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
        <button className="mint-btn" onClick={getNewMonster}>
          MINT
        </button>
        <button className="view-btn">
          <Link to="/collection">VIEW ALL</Link>
        </button>
      </div>
      {loading ? <Loading /> : <MintBox monster={monster} />}
    </div>
  )
}

export default Home
