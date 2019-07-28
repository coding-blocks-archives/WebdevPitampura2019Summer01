let PrintButton=document.getElementById("PrintButton");
let Number=document.getElementById("Number");

function CheckPrime(Number)
{
    for(let i=2;i<Number;i++)
    {
        if(Number%i==0)
            return false;
    }
    return true;
}

PrintButton.onclick=function()
{
    const NumberList=document.getElementById("NumberList");
    let NumberInput=parseInt(Number.textContent);

    //Removing Children
    while(NumberList.firstChild)
        NumberList.removeChild(NumberList.firstChild);

    let i=2;
    const PrintPrime=setInterval(function()
    {
        if(CheckPrime(i))
        {
            let ListItem=document.createElement("div");
            ListItem.setAttribute("class", "ListItem");
            ListItem.textContent=i;
            NumberList.appendChild(ListItem);
        }
        i++;
        if(i==NumberInput)
            clearInterval(PrintPrime);
        
            
    },50);

}



