let para=document.getElementById("para")
para.innerHTML+='<br/>'
print=''
function printPrime(n){
    if(n===1)
    {
        return false;
    }
    else if(n===2)
    {
        return true;
    }
    else
    {
        for(var x=2;x<n;x++)
        {
            if(n%x===0)
            {
                return false;
            }
        }
        return true;
    }
}
function isprime(n){
    for(i=2;i<=n;i++)
    {
        flag=printPrime(i)
        if(flag===true)
        {
            print+=i+'<br/>';
        }
    }
    para.innerHTML+=print
}
isprime(100)