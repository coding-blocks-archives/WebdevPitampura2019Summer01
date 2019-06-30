// const exp = require('./file1')

const { add } = require('./algorithms')

// const add = require('./algorithms').add

// console.log(add(3,2))

const obj = {
    // name: "Abhishek",
    age: 22
}

const { name = "Unknown" } = obj

console.log(name)