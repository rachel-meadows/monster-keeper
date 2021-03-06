const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getMonsters(db = connection) {
  return db('monsters').select()
}

function addMonster(data, db = connection) {
  console.log('data: ', data)
  return db('monsters')
    .insert(data)
    .then((id) => id[0])
}

function getMonsterById(id, db = connection) {
  return db('monsters').where('id', id).select()
}

function deleteMonster(db = connection) {}

module.exports = {
  getMonsters,
  addMonster,
  getMonsterById,
}
