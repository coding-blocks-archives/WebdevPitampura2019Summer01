function deleteme(c){
    var k=document.getElementsByClassName(c)
    k[0].parentNode.removeChild(k[0]);
}
function editme(c){
    var k=document.getElementsByClassName(c)
    document.getSelection().value=k[0].document.getSelection('div.'+c+'< li#name').value
}
window.onload=function(){
    
    var addButton=document.getElementById("addbutton")
    const state=[
    
    ]
    var i=1
    
    addButton.addEventListener('click',function(){
        var name=document.getElementById("name")
        var phone=document.getElementById("phone")
        var address=document.getElementById("address")
        var pic=document.getElementById("pic")
        var div=document.createElement("div")
        console.log(pic.value)
        var contactList=document.getElementById("contactList")
        contactList.appendChild(div)
        div.setAttribute("class","card")
        div.classList.add("bin"+i)
        var html="<img src='"+pic.value+"' </img>"+"<h1>"+name.value+"</h1>\
        <ul>"+"<li>"+phone.value+"</li>"+"<address>"+address.value+"</address>\
        <button id='bin"+i+"' onclick=\"deleteme(\'bin"+i+"\')\">Delete</button>\
        <button id='bin"+i+"' onclick=\"editme(\'bin"+i+"\')\">Edit</button>"+"</ul>"
        var obj={
            name:name.value,
            phone:phone.value,
            address: address.value,
            pic:pic.value,
        }
        state.push(obj)
        div.innerHTML=html
        i++
        name.value=''
        phone.value=''
        address.value=''
        pic.value=''
    }) 
}