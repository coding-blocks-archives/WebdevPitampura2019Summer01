var add=document.getElementById("add");
var text=document.getElementById("text");
var display=document.getElementById("display");
add.onclick=function(){
    display.innerHTML+=text.value+'<br>';
}