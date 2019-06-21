var add=(function(){
    c=0
    return function(){c+=1; return c;}
})();
function fun(){
    document.getElementById("para2").innerHTML=add();
}