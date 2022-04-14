import React, { useState } from 'react'



function Form(props) {
  //To do: pass info from mint page to form as props for input state, connect handle submit to API 


  //Create input state
  const [input, setInput] = useState({
    image: '', //props.image will go here
    name: '',
    description: '',
    health: 0, //props.health will go here
    damage: 0, //props.damage will go here
  })

  //function to handle changes in form
  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value})
  }
  
  //function to handle the submit of the data to the API?
  function handleSubmit(event) {
    event.preventDefault()
    // addNewMonster(input) //API function to add new monster, hasn't been written yet
  }

  return(
    <>
      <div>
        <h1>Godzilla pixel</h1>
        <div className='form-box'>
          <div className='image'>
            <img src={input.image}></img>
          </div>
          <div className='form'>
            <p>Health: {input.health}</p>
            <p>Damage: {input.damage}</p>
            <form>
              <label htmlFor='name'>Name:</label>
              <input onChange={handleChange} value={input.name} type='text' name='name' required/>
              <label htmlFor='description'>Backstory:</label>
              <input onChange={handleChange} value={input.description} type='text' name='description' required/>
              <button onClick={handleSubmit}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form