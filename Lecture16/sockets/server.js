const express = require('express')
const socket = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)

const io = socket(server)

io.on('connection', (xyz) => {
    console.log("Connection Established ", xyz.id )
})

app.use('/', express.static(__dirname + '/frontend'))

server.listen(4848, () => {
    console.log("Server started on http://localhost:4848")
})