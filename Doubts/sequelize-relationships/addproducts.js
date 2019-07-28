const { Product } = require('./db')

;(async () => {
  await Product.create({
    name: 'Wand',
    vendor: 'Vanderwelt',
    price: 300,
  })

  await Product.create({
    name: 'Snitch',
    vendor: 'Hogswart',
    price: 4000,
  })

  await Product.create({
    name: 'Owl',
    vendor: 'Hogswart',
    price: 4000,
  })

})()
