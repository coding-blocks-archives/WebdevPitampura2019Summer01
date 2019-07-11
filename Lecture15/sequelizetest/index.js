const express = require('express')
const Sequelize = require('sequelize')
const app = express()

const sequelize = new Sequelize('testdb', 'root', 'root', {
  dialect: 'sqlite',
  storage: './db.sqlite3'
})

const Bands = sequelize.define('bands', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  striked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  Bands.findAll().then(bands => {
    res.json(bands)
  })
})


app.post('/', (req, res) => {
  const newBand = {
    title: req.body.title,
    // striked: req.body.striked
  }
  Bands.create(newBand).then(band => {
    res.json(band)
  })
})


Bands.sync().then(() => {
  app.listen(3000, function () {
    console.log("Running on 3000")
  })
})

