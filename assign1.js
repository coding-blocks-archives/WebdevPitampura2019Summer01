
para=document.getElementById("abc")

function prime(y)
{  var f=0
    for(i=2;i<y;i++)
    {
        if(y%i==0)
        {   f=1
            break;
        }
    }
    if(f===0)
    {   print="Yes, the number  "+y+" is a prime number"

    }
    else
    {print="No, the number  "+y+ " is not a prime number"

    }
    para.innerHTML=print
}
prime(11) 