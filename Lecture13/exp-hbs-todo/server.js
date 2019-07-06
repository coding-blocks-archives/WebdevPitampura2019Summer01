const express = require('express')

const app = express()

const tasks = []

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('todo', {
    tasks
  })
})

app.post('/', (req, res) => {
  tasks.push(req.body.task)
  res.redirect('/')
})

app.get('/todos', (req, res) => {
  res.send(tasks)
})

app.post('/todos', (req, res) => {
  console.log(req.body)
  tasks.push(req.body.task)
  res.send(tasks)
})

app.listen(8777, () => {
  console.log('Started on http://localhost:8777')
})
