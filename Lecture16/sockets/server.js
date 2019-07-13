const express = require('express')
const socket = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)

const io = socket(server)

io.on('connection', (socket) => {
    console.log("Connection Established ", socket.id)

    // socket.on('disconnect', () => {
    //     console.log('Disconnected')
    // })

    socket.on("send_chat", (data) => {
        console.log("Data Recieved ", data.message)

        // socket.emit("recieve_chat", {
        //     message: data.message
        // })

        socket.broadcast.emit("recieve_chat", {
            message: data.message
        })
    })
})

app.use('/', express.static(__dirname + '/frontend'))

server.listen(4848, () => {
    console.log("Server started on http://localhost:4848")
})