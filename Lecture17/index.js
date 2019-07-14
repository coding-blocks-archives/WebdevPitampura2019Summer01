const { connectdb } = require('./database')

 /// Insert
// connectdb('testdb')
// .then(db => {
//   const user = db.collection('users');
//   return user.insertOne({
//     bands: ['Nirvana', 'ColdPlay']
//   })
// }).then(result => {
//   console.log(result)
// })

/*
  Query
*/

// connectdb('testdb').then(db => {
//   const users = db.collection('users')
//   return users.find({
//     bands: {
//       $in: ['Nirvana']
//     }
//   })
// }).then(users => {
//   return users.sort({name: 1})
// })
// .then(users => {
//   return users.toArray()
// }).then(usersArray => {
//   console.log(usersArray)
// })

connectdb('testdb').then(db => {
  const users = db.collection('users')

  return users.deleteMany({
    bands: {
      $in: ['Nirvana']
    }
  })
}).then(result => {
  console.log(result)
})


// connectdb('testdb').then(db => {
//   const users = db.collection('users')
//   console.log(users.find())
// })
