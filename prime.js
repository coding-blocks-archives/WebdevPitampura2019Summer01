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
    {   print="NO, the number x is not prime"
        
    }
    else
    {print="Yes, the number x in  prime"
        
    }
    para.innerHTML=print
}



prime(5)