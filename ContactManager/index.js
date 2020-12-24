var add=document.getElementById("button");
var html=""
add.addEventListener('click',function(){
    
    var list=document.getElementById('list')
    //creating a div element inside lsit
    var outerDIV=document.createElement('div')
    //ppending the div to the list
    list.appendChild(outerDIV)
    //setting the class name for outerDIV
    outerDIV.className="outerDiv"
    //getting the reference of the url of photo 
    var photoUrl=document.getElementById('photo')
    //putting image inside the outerDIV element
    html+=`<img src=${photoUrl.value} id="image">`
    
    //getting reference  for name phone number and address
    var name=document.getElementById('name')
    var phone=document.getElementById('phone')
    var address=document.getElementById('address')
    html+=`<p id="Name" class="text">${name.value}</p>`
    html+=`<p id="Phone" class="text">${phone.value}</p>`
    html+=`<p id="Address" class="text">${address.value}</p>`
    outerDIV.innerHTML=html
    //creating delete and edit button
    var del=document.createElement('button')
    del.innerText="DELETE"
    del.id="del"
    var edit=document.createElement('button')
    edit.innerText="EDIT"
    edit.id="edit"
    //adding delete and edit to the outerDIV
    outerDIV.appendChild(del)
    outerDIV.appendChild(edit)
     
    
    del.onclick=function(e){
        e.target.parentElement.remove();
    }

    photoUrl.value=""
    name.value=""
    phone.value=""
    address.value=""
    html=""
    
    edit.onclick=function(e){
        
        var c=e.target.parentElement.childNodes;
        name.value=document.getElementById('Name').innerText;
        phone.value=document.getElementById('Phone').innerText;
        address.value=document.getElementById('Address').innerText;
        photoUrl.value=document.getElementById('image').src;
        add.onclick=function(){
            e.target.parentElement.remove();
        }
       
    }
    
        
})
