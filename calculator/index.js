
window.addEventListener('load', function () {
    const input=document.getElementById('flex-container-button')
    input.addEventListener('click',function(e){
    let print=document.getElementById("calculation")
    if(e.target.innerText=="="){
        var ans=eval(print.value)
        print.value=ans
    }
    else if(e.target.innerText=="C"){
        print.value=" "  
    }
    else if(e.target.innerText=="<-"){
        print.value=print.value.substring(0,print.value.length-1)

    }
    else{
        print.value+=e.target.innerText;
    }
    
    
 })
})
    
