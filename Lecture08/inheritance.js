const Person = {
    name: 'Not Defined',
    interests: [],
    getNumberOfInterests: function () {
        return this.interests.length
    }
}


const Abhishek = Object.create(Person)
// Abhishek.name = "Abhishek"

// Abhishek
// {}
// Abhishek.name
// "Not Defined"
// Abhishek.name = "abhishek"
// "abhishek"
// Abhishek
// {name: "abhishek"}


