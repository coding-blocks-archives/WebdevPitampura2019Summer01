const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.post(
  '/submit',
  upload.single('photo'),
  (req, res) => {
    console.log(req.body)
    console.log(req.file)

    res.redirect('/')
  }
)

app.listen(3232, () => {
  console.log('http://localhost:3232/')
})
