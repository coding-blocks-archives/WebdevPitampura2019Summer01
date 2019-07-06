const express = require('express')

const app = express()

const tasks = []

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('todo', {
    tasks
  })
})

app.post('/', (req, res) => {
  tasks.push(req.body.task)
  res.redirect('/')
})

app.listen(8777, () => {
  console.log('Started on http://localhost:8777')
})
