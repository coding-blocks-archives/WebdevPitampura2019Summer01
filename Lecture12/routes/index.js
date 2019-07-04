const app = require('express')()

const usersRouter = require('./users')


// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(3000)
