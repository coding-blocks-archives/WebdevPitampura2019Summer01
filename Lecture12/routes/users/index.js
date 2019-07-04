const express = require('express')

const router = express.Router()

const users = [{
    name: "Abhishek",
    age: 22
}, {
    name: "Arnav",
    age: 26
}]

router.get('/me', (req, res) => {
    res.send(users[0])
})


router.get('/:id', (req, res) => {
    res.send(users[req.params.id])
})

module.exports = router