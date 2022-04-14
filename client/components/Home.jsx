import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MintBox from './MintBox.jsx'



function Home() {
  const [next, setNext] = useState(0)
 
  function handleClick(){
    setNext(next + 1)
  }

  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
      <button onClick={handleClick}>MINT</button>
      <Link to='/component'>VIEW ALL</Link>
      {(next > 0) &&
        <MintBox />
      }
    </>
  )
}

export default Home