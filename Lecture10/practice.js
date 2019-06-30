const generatePromise = val => n => {
    const f = (resolve) => {
        setTimeout(() => {
            resolve(val)
        }, n)
    }

    return new Promise(f)
}

generatePromise("Hello")(1000).then(v => console.log(v))
generatePromise("World")(2000).then(console.log)

const add = x => y => x+y

const incr2 = add(2)
incr2(5)
incr2(50)
