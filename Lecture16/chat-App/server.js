const express = require('express')
const socket = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)

const io = socket(server)

io.on('connection', (socket) => {

    socket.on("send_chat", (data) => {
        io.emit("recieve_chat", data)
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(4848, () => {
    console.log("Server started on http://localhost:4848")
})