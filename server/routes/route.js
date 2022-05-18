const express = require('express')
const router = express.Router()
const request = require('superagent')

const db = require('../db/db')
const helpers = require('../helpers')

router.get('/monster', (req, res) => {
  request
    .get('https://app.pixelencounter.com/api/basic/monsters/random')
    .set('accept', 'application/json')
    .then((data) => {
      res.json({
        image: data.body,
      })
    })
    .catch((err) => {
      console.error(err.message)
      res.error(err.message)
    })
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
  const monsterDataReshaped = {
    image: formData.image,
    name: formData.name,
    description: formData.description,
    health: formData.health,
    damage: formData.damage,
    capture_date: new Date().toLocaleDateString(),
  }
  console.log('Up to the POST route')
  db.addMonster(monsterDataReshaped)
    .then((id) => {
      return res.redirect(`/collection${id}`)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// GET route for collection page ( /collection )
router.get('/collection', (req, res) => {
  db.getMonsters()
    .then((monsters) => {
      return res.json(monsters)
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
