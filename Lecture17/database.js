const { MongoClient } = require('mongodb')
 
// Connection URL
const url = 'mongodb://localhost:27017';
  
// Use connect method to connect to the server

module.exports.connectdb = (dbName) => {
  return MongoClient.connect(url).then(client => client.db(dbName))
}





