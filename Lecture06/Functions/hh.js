// This is visible to JS Interpreter, even if not printed
// var fn
console.log(fn)
// fn ()

// This is hoisted along with definition
// function fn () {
//     console.log("Called a func")
// }


var fn = function () {
    console.log("Called a func")
}