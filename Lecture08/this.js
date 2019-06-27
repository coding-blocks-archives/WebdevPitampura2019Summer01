const obj = {
    name: "Abhishek",
    getAge: function () {
        // console.log(this === obj)
        
        const fn = function () {
            console.log(this == global)
        }

        fn()
    }
}
obj.getAge()