const para=document.getElementById("mypara")

function prime_num(x)
{
    if(x<=1)
    {
        return false;
    }
    for(let k=2;k<x;k++)
    {
        if(x%k===0)
        {
            return false;
        }
    }
    return true;

}
let str=" ";
for(let i=0;i<=100;i++)
{
    let ans=prime_num(i);
    if(ans)
    {
        str+= i+' ';
    }
}

para.innerHTML=str;