const fs = require('fs')


fs.readFile('./input.txt', 'utf8', (err, data) => {
    const sum = data.split('\n').reduce((acc, val) => acc + +val, 0)
    fs.writeFile('./output.txt', sum, err => {
        console.log("done")
    })
})