const Band = function (name, songs) {
    this.name = name
    this.songs = songs

    // const self = this
    // this.getNumberOfSongs = function () {
    //     return songs.length

    //     // function f1() {
    //     //     // this // window
    //     //     // this != self
    //     // }
    // }
}

Band.prototype.getNumberOfSongs = function () {
    return this.songs.length
}

const b1 = new Band('Coldplay', ['Yellow', 'Paradise'])
const b2 = new Band('Black Sabbath', ['Iron Man'])

// console.log(b1.name)
// console.log(b1.songs)
// console.log(b1.getNumberOfSongs())

// console.log(b2.name)
// console.log(b2.songs)
// console.log(b2.getNumberOfSongs())


// __proto__ vs .prototype

// Band.prototype
// {getNumberOfSongs: ƒ, constructor: ƒ}getNumberOfSongs: ƒ ()constructor: ƒ (name, songs)__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// Band.__proto__ == Band.prototype
// false
// Band.__proto__ == Function.__proto__
// true
// function f () { }
// undefined
// f.__proto__ == Band.__proto__
// true
// [1, 2, 3].__proto__ == [].__proto__
// true
// [1, 2, 3].__proto__ === [].__proto__
// true


// b1
// Band {name: "Coldplay", songs: Array(2)}name: "Coldplay"songs: (2) ["Yellow", "Paradise"]__proto__: getNumberOfSongs: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: class.js:16[[Scopes]]: Scopes[2]constructor: ƒ (name, songs)__proto__: Object
// b2
// Band {name: "Black Sabbath", songs: Array(1)}name: "Black Sabbath"songs: ["Iron Man"]__proto__: Object
// b1.getNumberOfSongs()
// 2
// b1.getNumberOfSongs == b2.getNumberOfSongs
// true
// b1.__proto__ == b2.__proto__
// true
// b1.prototype
// undefined
// Band.prototype
// {getNumberOfSongs: ƒ, constructor: ƒ}getNumberOfSongs: ƒ ()constructor: ƒ (name, songs)__proto__: Object
// Band.prototype.getNumberOfSongs
// ƒ () {
//     return this.songs.length
// }
// Band.prototype.getNumberOfSongs()
// class.js:17 Uncaught TypeError: Cannot read property 'length' of undefined
//     at Object.Band.getNumberOfSongs (class.js:17)
//     at <anonymous>:1:16
// Band.getNumberOfSongs @ class.js:17
// (anonymous) @ VM611:1