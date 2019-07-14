const { MongoClient } = require('mongodb')
 
// Connection URL
const url = 'mongodb://localhost:27017';
  
// Use connect method to connect to the server

const connectdb = (dbName) => {
  return MongoClient.connect(url).then(client => client.db(dbName))
}

// function getAllBlogs () {
//     return connectdb().then(db => {
//         return db.collection('blogs').find()
//     }).then(blogsCursor => blogsCursor.toArray())
// }

const getAllBlogs = () => 
    connectdb('testdb')
    .then(db => db.collection('blogs').find())
    .then(b => b.toArray())

const insertBlog = blog =>
    connectdb('testdb')
    .then(db => db.collection('blogs'))
    .then(collection => collection.insertOne(blog))

module.exports = {
    getAllBlogs,
    insertBlog
}