para=document.getElementById("mypara")

function prime(x)
{   print=""
    var flag=0
    for(i=2;i<x;i++)
    {
        if(x%i==0)
        {   flag=1
            break;
        }
    }
    if(flag==1)
    {   print="Yes, the number x is prime"
        
    }
    else
    {print="No, the number x in not prime"
        
    }
    para.innerHTML=print
}



prime(5)