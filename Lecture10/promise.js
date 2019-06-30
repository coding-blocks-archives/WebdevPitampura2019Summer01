function getCoffee (name, amount) {
    const f = (resolve, reject) => {
        setTimeout(() => {
            reject("no beans found")
        }, 2000)
    }

    const p1 = new Promise(f)
    return p1
}

const coffeePromise = getCoffee("Cold Brew")

const drink = function (coffee) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cup")
        }, 2000)
    })
}

const throwAway = function (cup) {
    console.log("threw cup")
}


coffeePromise.then(coffee => {
    console.log("coffee ready")
    return drink(coffee)
}).then(cup => {
    throwAway(cup)
}).catch(err => {
    console.log("Agony.......")
    throw err
}).then(() => {
    console.log("Exit Starbucks.")
}).catch(err => {
    console.log("Quit Life")
})

