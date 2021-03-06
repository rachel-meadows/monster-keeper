import React, { useState } from 'react'
import { addNewMonster } from '../apiClient.js'
import { useNavigate } from 'react-router-dom'

function Form(props) {
  const navigate = useNavigate()

  //Create input state
  const [input, setInput] = useState({
    image: props.form.image,
    name: '',
    description: '',
    health: props.form.health,
    damage: props.form.damage,
  })

  //function to handle changes in form
  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  //function to handle the submit of the data to the API?
  function handleSubmit(event) {
    event.preventDefault()
    addNewMonster(input)
      .then(() => navigate('/collection'))
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div>
        <div className="form-box">
          <div className="image">
            <img src={input.image}></img>
          </div>
          <div className="form">
            <p>Health: {input.health}</p>
            <p>Damage: {input.damage}</p>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  onChange={handleChange}
                  value={input.name}
                  type="text"
                  name="name"
                  className="input-field-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Backstory:</label>
                <input
                  onChange={handleChange}
                  value={input.description}
                  type="textBox"
                  name="description"
                  className="input-field-back"
                  required
                />
              </div>
              <button onClick={handleSubmit} className="save-btn">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
