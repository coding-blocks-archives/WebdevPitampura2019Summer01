const { User } = require('./db')

;(async () => {
  await User.create({
    username: 'Harry',
  })
  await User.create({
    username: 'Hermoine',
  })
  await User.create({
    username: 'Ron',
  })
})()
