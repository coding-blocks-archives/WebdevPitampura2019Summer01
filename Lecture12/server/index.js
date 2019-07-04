const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.query)
    next()
})

app.get('/', (req, res, next) => {
    if (req.query.name)
        res.send('Hello ' + req.query.name)
    else
        next()
})

app.use((req, res, next) => {
    // console.log("Last Middleware")
    res.send('Hello Anon')
})


app.listen(3000, function () {
    console.log("Running on 3000")
})