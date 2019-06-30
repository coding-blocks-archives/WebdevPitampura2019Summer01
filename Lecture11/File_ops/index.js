const fs = require('fs')

fs.writeFileSync('./file_sync.txt', 'Bye World')
console.log("Done")


// fs.writeFile('./file.txt', "Hello World", (err, result) => {
//     if (err) {
//         console.error(err)
//         return;
//     }

//     console.log("Done")
// })


