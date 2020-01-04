string="Prime numbers till 1000\n"+"<br>"
function Prime(i){
    for(var x=2 ;x<=i;x++){
        check =false
        for(var y=2;y<x;y++){
            if(x%y==0){
                check=true
            }
        }
        if(!check){
            string+= x +"<br>"
        }
    }
}
Prime(1000)

document.getElementById("prime").innerHTML=string
