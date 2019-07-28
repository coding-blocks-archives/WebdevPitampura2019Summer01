function doSomething(param) {

  return new Promise((resolve, reject) => {
    if (!param) return reject(new Error('No param'))

    setTimeout(() => {
      resolve(param)
    }, 2000)

  })
}

module.exports = { doSomething }
