const express = require('express')
const router = express.Router()

const db = require('../db/db')
const helpers = require('../helpers')

// POST route for home - after clicking 'MINT'
router.post('/', (req, res) => {
  // Do later - get image from external API
  //

  // Get health and damage stats
  const health = helpers.generateRandomNumber(100)
  const damage = helpers.generateRandomNumber(100)
  const monsterData = {
    image: 'nothing yet!',
    health: health,
    damage: damage,
  }
  return monsterData
})

// GET route for add page ( /add)
router.get('/add', (req, res) => {
  // Get the existing monster data back from front end
  const monsterData = req.body // ?
  return monsterData
})

// POST route for add page ( /add) - the user has clicked 'save'
router.post('/add', (req, res) => {
  const formData = req.body
  //   {
  //   name: 'name'
  //   image: 'nothing yet!',
  //   health: health,
  //   damage: damage,
  //   description: 'description'
  // }
    db.addMonster(formData)
      .then((id) => {
        return (id)
      })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// GET route for collection page ( /collection )
router.get('/collection', (req, res) => {
  db.getMonsters()
    .then((monster) => {
      return res.json(monster)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

  // GET route to display monster by id
  router.get('/collection/:id', (req, res) => {
    const data = req.params.id
    db.getMonstersById(data)
      .then((monster) => {
        return res.json(monster)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })

// Routes / Pages

// /home - landing page, welcome page
// /collection - view entire collection
// /collection/:id - view individual monster
// /add - add a new monster (form)
// /fight - pit monsters against each other

module.exports = router
