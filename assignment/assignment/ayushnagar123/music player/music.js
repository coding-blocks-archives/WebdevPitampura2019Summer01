window.onload=function(){
// const addButton=document.getElementById("addButton");
// const text=document.getElementById("text");
// const display=document.getElementById("display");
// const bin=document.getElementById("bin")
// addButton.addEventListener("click",function(){
//     console.log("click")
//     var song=document.createElement("li")
//     song.innerText=text.value;
//     text.innerHTML=''
//     display.appendChild(song)

// })
// bin.addEventListener("click",function(){
//     console.log("click")
//     // var song=document.createElement("li")
//     display.innerhtml=''
//     // display.appendChild(song)
// })
const state=[{
    title: 'Attention',
    striked: false
},
{
    title:'alone',
    striked: false
}]
// function render (state){
//     const html =state.reduce(function(acc,song){
//         return acc + '<li>'+song.title+'</li>'
//     },"")
//     console.log(html)
// }
// }
// document.getElementById("display").innerHTML=render(state)
function paint(){
    const display= document.getElementById("document")
    display.innerHTML=render(state)
}
window.addEventListener('load',function(){
    const addButton = document.getElementById("addButton")
    addButton.addEventListener('click',function(){
        var text=document.getElementById("text")
        state.push({})
    })
})