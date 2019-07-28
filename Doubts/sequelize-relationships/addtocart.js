const { CartItem, User, Product} = require('./db')


;(async () => {

  let ron = await User.findOne({
    where: {
      username: 'Ron'
    }
  })
  console.log(ron.get())

  let wand = await Product.findOne({
    where: {
      name: 'Wand'
    }
  })
  console.log(wand.get())

  await CartItem.create({
    userId: ron.id,
    productId: wand.id,
    quantity: 1
  })

  const items = await CartItem.findAll({
    include: [User, Product]
  })
  items.forEach( i => {
    console.log(`
       ${i.user.username} has ${i.quantity} ${i.product.name}
    `)
  })


})()
