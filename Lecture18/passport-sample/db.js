const Sequelize = require('sequelize')

const db = new Sequelize( {
  dialect: 'sqlite',
  storage: 'users.db',
})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = {
  db, Users
}
