const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  username: 'sampleuser5',
  password: 'samplepass5',
  database: 'sampledb5',
})

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  vendor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
})

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
})

const CartItem = db.define('cartitem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

CartItem.belongsTo(User)
User.hasMany(CartItem)

CartItem.belongsTo(Product)
Product.hasMany(CartItem)

db.sync().then(() => {
  console.log('db created')
})

module.exports = {
  db,
  User,
  Product,
  CartItem
}
