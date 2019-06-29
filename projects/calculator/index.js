const div1=document.getElementById('div1')
const text=document.getElementById('text')
op=""
div1.addEventListener('click',function(e){
    if(e.target.innerHTML=="C"){text.value=""
op=""}
  else if(e.target.innerHTML=="="){
    text.value=eval(op)
    op=text.value}
  
   else{ text.value=e.target.innerHTML
    op+=e.target.innerHTML}
    console.log(op)
})
// equal.addEventListener('click',function(){
//     text.value=eval(op)
//     op=""})