function CheckPrime(Number)
{
    for(let i=2;i<Number;i++)
    {
        if(Number%i==0)
        {
            return false;
        }

    }
    return true;
}

function PrintPrime(Number)
{
    let PrimeNumbers=""
    for(let i=2;i<Number;i++)
    {
        if(CheckPrime(i))
            PrimeNumbers=PrimeNumbers+i+"<br>";
    }
    return PrimeNumbers;
}

PrimeNumbers=PrintPrime(1000);


DOM=document.getElementById("PrimeNumbers");
DOM.innerHTML=PrimeNumbers; 
