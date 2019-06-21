function printValues (i, onDone) {
    for (var x = 0; x< i ; x++) {
        console.log(x)
    }
    return onDone
}

function afterCompletion () {
    console.log("Done")
}

var after = printValues(10, afterCompletion)
after()