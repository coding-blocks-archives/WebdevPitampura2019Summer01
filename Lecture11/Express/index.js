const express = require('express')
const app = express()
const fs = require('fs')

// const currentTime = new Date()
const users = []
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const readUsersFromFile = (filename) => {
  return new Promise((resolve) => {
    fs.readFile(filename, 'utf8', (err, data = '') => {
      resolve(data ? JSON.parse(data) : [])
    })
  })
}

const writeUsersToFile = (users, filename) => {
  return new Promise((resolve) => {
    fs.writeFile(filename, JSON.stringify(users), err => {
      resolve()
    })
  })
}

app.get('/users', (req, res) => {
  readUsersFromFile('./users.txt').then(users => {
    res.send(users)
  })
})

app.post('/users', (req, res) => {
  readUsersFromFile('./users.txt').then(users => {

    users = users || []
    users.push(req.body)
    return users
  })
  .then(users => writeUsersToFile(users, './users.txt'))
  .then(() => res.sendStatus(200))
  
})

app.listen(3000)




// app.get('/', function (req, res) {
//     res.send(`
//       <html>
//           <body>
//               <p style="color: red">Hello World </p>
//           </body>
//       </html>
//     `)
//   })

//   app.get('/time', (req, res) => {
//       res.send(currentTime)
//   })