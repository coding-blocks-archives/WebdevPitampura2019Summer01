const Vehicle = function (tyres, maxspeed) {
    this.tyres = tyres
    this.maxspeed = maxspeed
}


const Car = function (name, color, maxspeed) {
    // Vehicle.call(this, 4, maxspeed)
    this.name = name
    this.color = color

    this.getModelName = function () {
        return this.name + ' ' + this.color
    }
}

Car.prototype = new Vehicle(4, "120kmph")

const c1 = new Car("Baleno", "Black", "120kmph")

console.log(c1.tyres)