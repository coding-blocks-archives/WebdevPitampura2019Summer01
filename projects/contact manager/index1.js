window.onload=function(){
    const addbutton=document.getElementById('addbutton')
    const name=document.getElementById('name')
    const phone=document.getElementById('phone')
    const address=document.getElementById('address')
    const deletebutton=document.getElementById('deletebutton')
    const container=document.getElementById('container')


    //let arr=[]
    addbutton.addEventListener('click',function(){
        // arr.push({
        //     name:name.value,
        //     phone:phone.value,
        //     address:address.value
        // })


        // let html=""
        // for(let i=0; i< arr.length; i++) {
        //        html+="Name:"+ arr[i].name+'<br>'+"Phone:"+arr[i].phone+"<br>"+'Address:'+arr[i].address+'<br><br>'
        // }
        
        // para.innerHTML=html
        
        // for(let i=0;i<arr.length;i++)
        // {
        //     // let div=document.createElement('div')
            
        //     p.innerHTML='Name:'+ arr[i].name +'<br>'+"Phone:"+arr[i].phone+"<br>"+'Address:'+arr[i].address+'<br><br>'
        //     // div.appendChild(p)
                    
        // }
        let div=document.createElement('div')
        let span=document.createElement('span')
        let btn=document.createElement('button')
        let ebtn=document.createElement('button')
        let br=document.createElement('br')
        btn.innerText="Delete"
        ebtn.innerText="Edit"
        btn.onclick=function(event)
        {
            event.target.parentElement.parentElement.remove()
        }
        ebtn.onclick=function(){
            
        }
        
        div.id="abc"
        span.innerHTML='Name : '+name.value +'<br>'+'Phone : '+phone.value+'<br>'+'Address : '+address.value+'<br><br>'
        span.appendChild(ebtn)
        span.appendChild(btn)
        span.appendChild(br)
        div.appendChild(span)
        container.appendChild(div)
        name.value=""
        phone.value=""
        address.value=""
    })

    deletebutton.addEventListener('click',function(){
        name.value=""
        phone.value=""
        address.value=""
    })
}