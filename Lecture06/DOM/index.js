const para = document.getElementById("mypara")

// let string = ''
// function print (n) {
//     for(let i =0; i< n ;i++) {
//         string += i + '<br>'
//     }

//     para.innerHTML = string
// }

// print(1000)

// para.remove()

const a = document.createElement('a')
a.setAttribute("href", "http://codingblocks.com")
a.innerHTML = "Click Here for CB"

// para.innerHTML = ""
para.appendChild(a)

