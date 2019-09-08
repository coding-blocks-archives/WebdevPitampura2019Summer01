const name =document.getElementById('name')
const phone =document.getElementById('phone')
const address =document.getElementById('address')
const add =document.getElementById('add')
const inner =document.getElementById('inner')
add.onclick=function(){
    //let html=""
    //  html="<span>"+name.value+"</span>"+"<span>"+phone.value+"</span>"+"<span>"+address.value+"</span>"
    //  var div=document.createElement("div")
    //  div.append=html
    //  console.log(html)
//     html=name.value+"<br>"+phone.value+'<br>'+address.value
//     inner.innerText=html
   let item = document.createElement('span')
   item.textContent = name.value
   name.value=""
      inner.appendChild(item)
      let item1 = document.createElement('span')
      item1.textContent = phone.value
      phone.value=""
         inner.appendChild(item1)
         let item2 = document.createElement('span')
         item2.textContent = address.value
         address.value=""
            inner.appendChild(item2)
 }