const express = require('express')

const app = express()
const todosRouter = require('./todos')

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/todos', todosRouter)

app.listen(3000)