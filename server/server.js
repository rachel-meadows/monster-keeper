const path = require('path')
const express = require('express')
const cors = require('cors')
const route = require('./routes/route')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))


server.use('/api/v1/', route)


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
