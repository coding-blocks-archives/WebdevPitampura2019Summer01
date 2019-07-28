const util = require('util')

function doSomething(param, done) {
  setTimeout(() => {
    if (!param) done(new Error('No param'))
    else done(null, param)
  }, 2000)
}
let doSomethingPromise = util.promisify(doSomething)

console.log('running')

doSomethingPromise(false)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    throw err
  })
