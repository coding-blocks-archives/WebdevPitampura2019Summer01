const util = require('util')

const setTimeoutP = util.promisify(setTimeout)

// setTimeoutP(2000)
//   .then(() => {
//     console.log('step 1')
//     return setTimeoutP(1000)
//   })
//   .then(() => {
//     console.log('step 2')
//     return setTimeoutP(2000)
//   })
//   .then(() => {
//     console.log('step 3')
//   })

// setTimeoutP(2000)
//   .then(() => setTimeoutP(1000))
//   .then(() => setTimeoutP(2000))
//   .then(() => console.log('end'))

async function task() {
  console.log('step 0')
  await setTimeoutP(2000)
  console.log('step 1')
  await setTimeoutP(1000)
  console.log('step 2')
  await setTimeoutP(2000)
  console.log('end')
}

console.log('start')
task().then(() => {
  console.log('done')
})
