// Example State
// let state =[{
//     name: "Manav Verma",
//     tel: 8851729421,
//     address: "AGCR Delhi",
//     striked: false,
// },{
//     name: "Abhishek Verma",
//     tel: 8800801437,
//     address: "SSCBS",
//     striked: false,
// },{
//     name: "Ayush Nagar",
//     tel: 1111111,
//     address: "Lal Qua",
//     striked: false,
// },{
//     name: "Roger ",
//     tel: 55555,
//     address: "Mohanagar",
//     striked: false,
// },
// ]

let state =[]
// Initialized as empty object
function render(state)
{
    let html = ""
    for(let i=0; i<state.length; i++)
    {
        if(state[i].striked)
        {    html +=`<ul class="card toBeDeleted"><li>${state[i].name}</li><li>${state[i].tel}</li><li>${state[i].address}</li><button class="delButton">Delete</button></ul>`
        }
        else
        {   html +=`<ul class="card"><li>${state[i].name}</li><li>${state[i].tel}</li><li>${state[i].address}</li><button class="delButton">Delete</button></ul>`
        }
    }
    return html
}

// paint function -->
function paint()
{
    var Contacts = document.getElementById("container2");
    Contacts.innerHTML = render(state)
    nowYouCanDel()
}

// Adding Contacts -->
window.onload = function(){
    const addButton = document.getElementById("Abutton")
    // console.log(addButton)
    addButton.addEventListener('click', function(){
        const iname = document.getElementById("name")
        const inum = document.getElementById("num")
        const iaddress = document.getElementById("address")
        state.push({
            name: iname.value,
            tel: inum.value,
            address: iaddress.value,
            striked: false,
        })

        iname.value=""
        iaddress.value=""
        inum.value=""
        
        paint()
    })
}


// Deleting Contacts -->
function nowYouCanDel(){

    const A = document.getElementsByClassName("delButton");

    for (var i=0;i<A.length;i++)
    {   
        A[i].addEventListener('click', function(e){
   
        let name = e.target.parentElement.firstElementChild.innerHTML;
   
        const selectedCard = state.find(function(contact){
                    return contact.name == name
                })
        selectedCard.striked = true
            
        paint()
        setTimeout( function(){
            state = state.filter(function(contact){
                return !contact.striked
            })
            paint()
        },100)
        })
    }
}



// Deleting Contact on clicking first on container and then on 'delete' button

// document.getElementById("container2").addEventListener('click', function(e){
//     // console.log(e.target.parentElement.firstElementChild.innerHTML)
//     const name = e.target.parentElement.firstElementChild.innerHTML
//     // console.log(name)
//     const selectedCard = state.find(function(contact){
//         return contact.name == name
//     })
//     selectedCard.striked = true

//     paint()
//     setTimeout( function(){
//         state = state.filter(function(contact){
//             return !contact.striked
//         })
//         paint()
//     },100)

//     // state = state.filter(function(contact){
//     //     return !contact.striked
//     // })
//     // paint()
//     // console.log(state)
// })