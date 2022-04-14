const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getMonsters()
    .then((monster) => {
      res.json(monster)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  
})

router.delete('/', (req, res) => {
  
})

router.update('/', (req, res) => {
  
})

module.exports = router