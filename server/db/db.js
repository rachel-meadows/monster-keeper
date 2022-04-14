const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getMonsters(db = connection) {
  return db('monsters').select()
}

function addMonster(db = connection) {

}

function deleteMonster(db = connection) {

}

module.exports = {
  getMonsters
}